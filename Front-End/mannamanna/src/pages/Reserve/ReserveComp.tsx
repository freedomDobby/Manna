import MacBookBox from "../../components/common/macbookBox";
import KakaoMap from "../../components/common/KakaoMap";
import axios from "axios";
import {IMiddleReservePlace, IReserveCompProps, IReservePlaceRequest} from "./Interfaces";
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

const ReserveComp = (props: IReserveCompProps) => {
    const [queryType, setQueryType] = useState('member'); // 'posts' 또는 'comments'
    const queryClient = useQueryClient();

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
                                              maleId={props.userId == "male" ? props.opponentId : props.userId}
                                              femaleId={props.userId == "male" ? props.userId : props.opponentId}
                                              index={0}/>}
                    </ReservePlaceBox>
                </ReserveMainBox>
            </InnerBox>
        </MacBookBox>);
}

export default ReserveComp;