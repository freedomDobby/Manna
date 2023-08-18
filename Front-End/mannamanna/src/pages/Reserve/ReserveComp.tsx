import MacBookBox from "../../components/common/macbookBox";
import KakaoMap from "../../components/common/KakaoMap";
import axios from "axios";
import {IMiddleReservePlace, IMissionStartRequest, IReserveCompProps, IReservePlaceRequest} from "./Interfaces";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import ReservePlaceComp from "./ReservePlaceComp";
import {LocateAddress} from "./LocateObject";
import {useEffect, useState} from "react";
import {
    InnerBox, KaKaoMapBox,
    LocateDiv,
    LocateSelectBox,
    PlaceFilterBox,
    PlaceFilterButton, ReserveMainBox, ReservePlaceBox,
    SelectBox,
    SelectLocate
} from "./ReserveCompStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { MissionIdAtom, genderAtom, scheduleIdAtom } from "../../Recoil/State";
import { dateName, sogaeUserName } from "../Soagaeting/SogaetingState";

const getPlaceByLocate = (ReservePlaceRequest: IReservePlaceRequest) => {
    return axios({
        method: "POST",
        url: "https://i9b205.p.ssafy.io/api/reserve/placeList",
        headers: {"Content-Type": "application/json"},
        data: ReservePlaceRequest,
    })
}

const getPlaceByMember = (MiddleReservePlace: IMiddleReservePlace) => {
    return axios({
        method: "POST",
        url: `https://i9b205.p.ssafy.io/api/reserve/middlePlaceList`,
        headers: {"Content-Type": "application/json"},
        data: MiddleReservePlace
    })
}

const fetchMission = (MissionStartRequest: IMissionStartRequest) => {
    return axios({
        method: "POST",
        url: `https://i9b205.p.ssafy.io/api/mission/start`,
        headers: {"Content-Type": "application/json"},
        data: MissionStartRequest
    })
}

const fetchMissionQuestion = (missionId: number) => {
    return axios({
        method: "POST",
        url: `https://i9b205.p.ssafy.io/api/mission/assign`,
        headers: {"Content-Type": "application/json"},
        data: {missionId: missionId}
    })
}

const ReserveComp = (props: IReserveCompProps) => {
    const [scheduleId] = useRecoilState(scheduleIdAtom);
    const [opponentId] = useRecoilState(dateName);
    const [myId] = useRecoilState(sogaeUserName);
    const [userGender] = useRecoilState(genderAtom);
    const [missionId,setMissionId] = useRecoilState(MissionIdAtom) 


    

    useEffect( () => {
        const fn = async () => {
            console.log(scheduleId);
            let maleId;
            let femaleId;
            if(userGender=="male") {
                maleId = myId;
                femaleId = opponentId;
            }
            else{
                maleId = opponentId;
                femaleId = myId;
            }
            
            const response = await fetchMission({
                sogaetingId: scheduleId,
                maleId: maleId,
                femaleId: femaleId,
            });
    
            return response.data;
        }
        // fn().then(returnVal=>{console.log(returnVal+","+returnVal.data.id+","+returnVal.msg)})
        fn().then(returnVal=>{fetchMissionQuestion(returnVal.data.id).then(res=>console.log(res))})
    },[])

    // useEffect(() => {
    //     fetchMissionQuestion(missionId)
    //     .then(() => console.log("미션디테일 불러오기 성공!!!!"))
    //     .catch(() => console.log("실패"))
    //  }, [missionId])

    const [queryType, setQueryType] = useState('member'); // 'posts' 또는 'comments'
    const queryClient = useQueryClient();
    const gender = useRecoilValue(genderAtom);

    const fetchData = async () => {
        if (queryType === 'member') {
            return await getPlaceByMember({
                userId: props.userId,
                opponentId: props.opponentId,
                category: category
            }).then(response => response.data);
        } else {
            return await getPlaceByLocate({
                sido: sido,
                gugun: gugun,
                category: category
            }).then(response => response.data);
        }
    };

    const {
        isLoading,
        data
    } = useQuery(["placeData"], fetchData);
    const [sido, setSido] = useState("");
    const [gugun, setGugun] = useState("");
    const [category, setCategory] = useState("");
    const [guguns, setGuguns] = useState<string[]>([]);

    useEffect(() => {
        fetchData().then(data => {
            queryClient.setQueryData(["placeData"], data);
        });
    }, [category, gugun]);

    return (
        <MacBookBox width="98%" height="98%" color1="#ffcced" color2="#ffffff" alignItems="center">
            <InnerBox>
                <LocateSelectBox>
                    <SelectBox>
                        <LocateDiv>지역선택</LocateDiv>
                        <SelectLocate value={sido} onChange={(event) => {
                            setSido(event.target.value);
                            setGuguns(LocateAddress[event.target.value])
                        }}>
                            <option> 시도</option>
                            {
                                Object.keys(LocateAddress).map((sido) => (
                                    <option key={sido} value={sido}>{sido}</option>
                                ))
                            }
                        </SelectLocate>
                        <SelectLocate value={gugun} onChange={(event) => {
                            setQueryType("locate");
                            setGugun(event.target.value);
                        }}>
                            <option> 구군</option>
                            {
                                guguns.map((gugun) => (
                                    <option key={gugun} value={gugun}>{gugun}</option>
                                ))
                            }
                        </SelectLocate>
                    </SelectBox>
                    <PlaceFilterBox>
                        <PlaceFilterButton onClick={() => {
                            setCategory("")
                        }}>
                            전체
                        </PlaceFilterButton>
                        <PlaceFilterButton onClick={() => {
                            setCategory("카페")
                        }}>
                            카페
                        </PlaceFilterButton>
                        <PlaceFilterButton onClick={() => {
                            setCategory("음식점");
                        }}>
                            음식점
                        </PlaceFilterButton>
                        <PlaceFilterButton onClick={() => {
                            setCategory("숙박")
                        }} style={{borderRight: "none"}}>
                            숙박
                        </PlaceFilterButton>
                    </PlaceFilterBox>
                </LocateSelectBox>
                <ReserveMainBox>
                    <KaKaoMapBox>
                        <KakaoMap />
                    </KaKaoMapBox>
                    <ReservePlaceBox>
                        {isLoading ? <span>now loading...</span> :
                            <ReservePlaceComp data={data.data}
                                              maleId={gender == "female" ? props.opponentId : props.userId}
                                              femaleId={gender == "female" ? props.userId : props.opponentId}
                                              index={0}/>}
                    </ReservePlaceBox>
                </ReserveMainBox>
            </InnerBox>
        </MacBookBox>);
}

export default ReserveComp;