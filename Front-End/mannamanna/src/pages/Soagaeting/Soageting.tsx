import React, { useEffect, useState, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { OpenVidu, StreamManager, Session, SignalOptions} from 'openvidu-browser';
import { dateName, isAudio, isVideo, sogaeUserName, userSessionId } from './SogaetingState';
import { apiopen } from '../../apis/Api';
import { OpenviduSecretKey } from '../User/Login/ApiKey';

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
        </div>
    );

}

export default Sogaeting;