import React, { useEffect, useState, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { OpenVidu, StreamManager, Session, SignalOptions} from 'openvidu-browser';
import { dateName, isAudio, isVideo, sogaeUserName, userSessionId } from './SogaetingState';
import { apiopen } from '../../apis/Api';
import { OpenviduSecretKey } from '../User/Login/ApiKey';
import { CenteredDiv } from '../Landing/LandingStyle';
import { CenterBox, StyledButton } from '../User/Login/LoginStyle';
import SmallMacBookProfile from '../../components/common/SmallMacBookProfile';
import HeartAnimation from '../../components/animation/HeartAnimation';
import MacBookBox from '../../components/common/macbookBox';
import { BlindDateMyVideo, BlindDateParter } from '../../components/common/Openvidu/UserVideoCompo';
import { HeartIconButton, MicVideoIconButton } from './SogaetingStyles';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import MoreTimeIcon from '@mui/icons-material/MoreTime';

const Sogaeting = () => {
    const [myUserSessionId, setMyUserSessionId] = useRecoilState(userSessionId);
    const [myUserName, setMyUserName] = useRecoilState(sogaeUserName);
    const [myDateName, setMyDateName] = useRecoilState(dateName);
    const [session, setSession] = useState<any>(undefined);
    const [publisher, setPublisher] = useState<any>(undefined);
    const [subscribers, setSubscribers] = useState<StreamManager[]>([]);
    const [myIsVideo, setMyIsVideo] = useRecoilState(isVideo);
    const [myIsAudio, setMyIsAudio] = useRecoilState(isAudio);

    const [myBlur, setMyBlur] = useState<number>(10);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const videoRefTemp = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const OV = new OpenVidu();

    const setupCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                return stream; // 비디오 스트림 반환
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const setupCameraTemp = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRefTemp.current) {
                videoRefTemp.current.srcObject = stream;
                return stream; // 비디오 스트림 반환
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };
  
    const setupCanvas = (videoStream: any) => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
    
            const applyBlurEffect = () => {
                if (video.paused || video.ended) {
                    return;
                }
        
                context?.drawImage(video, 0, 0, canvas.width, canvas.height);
                if (context?.filter !== undefined) {
                    context.filter = `blur(${myBlur}px)`;
                }
        
                context?.drawImage(canvas, 0, 0, canvas.width, canvas.height);
                if (context?.filter !== undefined) {
                    context.filter = 'none';
                }
        
                requestAnimationFrame(applyBlurEffect);
            };
    
            video.addEventListener('play', () => {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                applyBlurEffect();
            });
        }
    };
    const videoStream = setupCamera();
    const videoStreamTemp = setupCameraTemp();

    useEffect(() => {
        setupCanvas(videoStream);
        const onbeforeunload = (event: any) => {
            leaveSession();
        };

        window.addEventListener('beforeunload', onbeforeunload);

        return () => {
            window.removeEventListener('beforeunload', onbeforeunload);
        };
    }, []);

    const handleChangeMyIsAudio = async (event: React.MouseEvent<HTMLButtonElement>) => {
        const newIsAudio = !myIsAudio;
        publisher.publishAudio(newIsAudio);
        setMyIsAudio(newIsAudio);
    }

    const handleChangeMyIsVideo = async (event: React.MouseEvent<HTMLButtonElement>) => {
        const newIsVideo = !myIsVideo;
        publisher.publishVideo(newIsVideo);
        setMyIsVideo(newIsVideo);
    }

    const handleChangeBlur = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const newBlur = myBlur - 2.5 >= -1 ? myBlur - 2.5 : -1;
        setMyBlur(newBlur);
        changeStream();
    }

    const changeStream = () => {
        setupCanvas(videoStream);
    }

    const deleteSubscriber = (streamManager: StreamManager) => {
        setSubscribers([]);
    }
    
    const sendTimerChange = (data: any) => {
        const signalOptions: SignalOptions = {
            data: JSON.stringify(data),
            type: 'sendTimerChange',
        };
        session.signal(signalOptions);
    }

    // Session에 참여할 때 
    const joinSession = async () => {
        
        // 성별에 따라 SessionId를 통일하기 위해 남자는 본인+상대 여자는 상대+본인으로 설정하는 것이 필요하다. 
        setMyUserSessionId(myUserName + myDateName);

        // 새로운 OpenVidu를 하나 생성한다. 
        

        // Session을 초기화 해준다. 
        const newSession = OV.initSession();
        setSession(newSession);

        
        
        // 새로운 참가자가 생기게 될 경우.. 우리는 한명이긴 한데 일단 여러명 받을 수 있는 걸로.. 
        newSession.on('streamCreated', (event: any) => {
            const NewSubscriber = newSession.subscribe(event.stream, undefined);
            const NewSubscribers = [...subscribers, NewSubscriber];
            setSubscribers(NewSubscribers);
            
        });

        // 참가자가 나가게 되는 경우.. 
        newSession.on('streamDestroyed', (event: any) => {
            deleteSubscriber(event.stream.streamManager);
            leaveSession();
        });

        // 예외가 발생하는 경우
        newSession.on('exception', (exception: any) => {
            console.warn(exception);
        });

        newSession.on('signal:sendTimerChange', (event: any) => {
            const data = JSON.parse(event.data);
            const newTime = data.data;
        });
        
        const token = await getToken();
        
        newSession.connect(token, { clientData: myUserName })
        .then(async () => {
            const canvas = document.getElementById("mycanvas") as HTMLCanvasElement;
            if (canvas) {
                // canvas가 null이 아닌 경우에만 아래 코드 실행
                const newPublisher = await OV.initPublisherAsync(undefined, {
                  audioSource: undefined,
                  videoSource: canvas.captureStream().getVideoTracks()[0],
                  publishAudio: myIsAudio,
                  publishVideo: myIsVideo,
                  resolution: '640x480',
                //   resolution: '1280x720',
                  frameRate: 30,
                  insertMode: 'APPEND',
                  mirror: true,
                });
                newSession.publish(newPublisher);
                setPublisher(newPublisher);
            } else {
                console.error("canvas is null");
            }
        })
        .catch((error: any) => {
            console.log('There was an error connecting to the session:', error.code, error.message);
        });


        
    }//endjoinsession

    const leaveSession = () => {
        setSession(undefined);
        setPublisher(undefined);
        setSubscribers([]);
        const mySession = session;
        if (mySession) {
            mySession.disconnect();
        }
    }

    const getToken = async () => {
        const newsessionId = await createSession(myUserSessionId);
        return await createToken(newsessionId);
    }
    
    const createSession = async (newsessionId: string) => {
        try {
            const response = await apiopen.post('openvidu/api/sessions/', { customSessionId: newsessionId }, {
            headers: { Authorization: 'Basic ' + btoa(`OPENVIDUAPP:${OpenviduSecretKey}`), 'Content-Type': 'application/json' },
            });
            return response.data.sessionId;
        } catch (error: any) {
            if (error.response && error.response.status === 409) {
            return newsessionId;
            } else {
            console.error('Error creating session:', error);
            }
        }
    }
    
    const createToken = async (newsessionId: string) => {
        const response = await apiopen
        .post('openvidu/api/sessions/' + newsessionId + '/connection', {}, {
            headers: {  Authorization: 'Basic ' + btoa(`OPENVIDUAPP:${OpenviduSecretKey}`), 'Content-Type': 'application/json' },
        });
        console.log(response.data);
        return response.data.token; // The token
    }

    return (
        <div>
            {/* 세션에 들어가기 전 내 상태를 확인하고 입장하기를 누르기 전 화면 */}
            {session === undefined ? (
                <CenteredDiv style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ fontSize: '3vw', color: 'white', marginTop: '6vh' }}>
                        너와 내가 이어지는 중...
                    </div>
                    <CenterBox style={{display:'flex',justifyContent:'space-around',width:'90%'}}>
                        <SmallMacBookProfile 
                        width="25vw"
                        height="45vh"
                        color1="#bcd3ff"
                        color2="#ffffff"
                        alignItems="center"
                        Username=""
                        age="내 모습 확인하기"
                        address=""
                        >
                        <video ref={videoRefTemp} autoPlay style={{width: '100%', height: '90%', marginTop:'2.5%'}}/>
                        </SmallMacBookProfile>  

                        <HeartAnimation></HeartAnimation>

                        <SmallMacBookProfile
                        width="25vw"
                        height="45vh"
                        color1="#F8E3EA"
                        color2="#ffffff"
                        alignItems="center"
                        Username="이름"
                        age="나이"
                        address="지역"
                        >
                        </SmallMacBookProfile>
                    </CenterBox>
                    <StyledButton style={{ marginTop: '1vh', marginBottom: '5vh' }} onClick={joinSession}>입장하기</StyledButton>
                </CenteredDiv>
            ) : null}

            {/* 오픈비두에 필터를 적용하기 위한 비디오 안보이게 처리한다.  */}
            <div>
                <video  ref={videoRef} autoPlay style = {{ display:'none' }}/>
                <canvas id="mycanvas" ref={canvasRef} style = {{ display:'none' }}/>
            </div>

            {/* 입장하기를 누른 후 세션에 들어가있는 화면 */}
            {session !== undefined ? (
                <div>
                    <div style={{width: '99.5vw', height: '99vh', display:'flex'}}>
                        <div style={{width: '60%', height: '100%', flexDirection: 'column'}}>
                            <div style={{width: '100%', height: '60%', display:'flex', justifyContent: 'right'}}>
                                <div style={{width: '90%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <MacBookBox width="95%" height="95%" color1="#ffcced" color2="#ffffff" alignItems="center">
                                        <BlindDateParter streamManager={subscribers[0]} />
                                    </MacBookBox>
                                </div>
                            </div>
                            <div style={{width: '100%', height: '40%', display:'flex'}}>
                                <div style={{width: '40%', height: '100%', marginLeft: '10%'}}>
                                    <BlindDateMyVideo streamManager={publisher} />
                                </div>
                                <div style={{width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <div style={{border:'solid 0.3rem black', borderRadius:'1rem', background:'#ffffff', width: '90%', height: '40%', flexDirection: 'column', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginLeft: '2.5%'}}>
                                        <div style={{borderBottom:'solid 0.3rem black',borderTopRightRadius:'0.8rem', borderTopLeftRadius:'0.8rem', background:'#ffcced', width: '100%', height: '10%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
                                        <div style={{width: '100%', height: '80%', flexDirection: 'row', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                                            <MicVideoIconButton onClick={handleChangeMyIsVideo}>{myIsVideo ? (<VideocamIcon/>) : (<VideocamOffIcon/>)}</MicVideoIconButton>
                                            <MicVideoIconButton onClick={handleChangeMyIsAudio}>{myIsAudio ? (<MicIcon/>) : (<MicOffIcon/>)}</MicVideoIconButton>
                                            <HeartIconButton onClick={handleChangeBlur}><FavoriteIcon/></HeartIconButton>
                                            <HeartIconButton onClick={leaveSession}><CloseIcon/></HeartIconButton>
                                        </div>
                                        <div style={{borderTop:'solid 0.3rem black', borderBottomRightRadius:'0.8rem', borderBottomLeftRadius:'0.8rem', background:'#ffcced', width: '100%', height: '10%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '40%', height: '100%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{border:'solid 0.3rem black', borderRadius:'1rem', width: '80%', height: '90%', flexDirection: 'column', background:'white'}}>
                                <div style={{width: '100%', height: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <div style={{border:'solid 0.3rem black', borderRadius:'1rem', width: '80%', height: '80%', background:'#ffcced', flexDirection: 'row', display: 'flex'}}>
                                        <div style={{width: '40%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <div style={{border:'solid 0.2rem black', width: '80%', height: '80%'}}>
                                                상대방사진
                                            </div>
                                        </div>
                                        <div style={{width: '60%', height: '100%', flexDirection: 'column', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                                <div style={{fontSize: '1.5rem'}}>상대이름</div>
                                                <div style={{fontSize: '1rem'}}>나이 / 지역 / 직업 / MBTI</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{border:'solid 2px blue', width: '100%', height: '50%'}}>
                                    채팅영역 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );

}

export default Sogaeting;