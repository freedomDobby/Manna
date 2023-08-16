import MacBookBox from "../../components/common/macbookBox";
import styled from "styled-components";
import KakaoMap from "../../components/common/KakaoMap";
import axios from "axios";
import {IMiddleReservePlace, IReserveCompProps, IReservePlaceRequest} from "./Interfaces";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import ReservePlaceComp from "./ReservePlaceComp";
import {LocateAddress} from "./LocateObject";
import {useEffect, useState} from "react";

const LocateSelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8%;
  padding-left: 3%;
  padding-bottom: 1%;
  padding-top: 1%;
  padding-right: 3%;
`

const ReserveMainBox = styled.div`
  height: 87%;
  display: flex;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
`

const KaKaoMapBox = styled.div`
  width: 49%;
  border: 2px solid black;
`

const ReservePlaceBox = styled.div`
  width: 49%;
  border: 2px solid black;
`;

const InnerBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
`

const SelectBox = styled.div`
  height: 100%;
  margin-right: 3%;
  width: 30%;
  border: 2px solid black;
  display: flex;
  border-radius: 5px;
`

const SelectLocate = styled.select`
  /* Remove default appearance */
  //appearance: none;
  //-webkit-appearance: none;
  //-moz-appearance: none;

  /* Remove the arrow or any browser's default styles */
  background: none;
  border: none;
  border-left: 1px solid black;
  font: inherit;
  font-size: 10px;

  height: 100%;
  width: 30%;
`

const LocateDiv = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PlaceFilterBox = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: right;
  border: 2px solid black;
  border-radius: 5px;
`

const PlaceFilterButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  outline: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  -webkit-appearance: none; /* Safari와 Chrome */
  -moz-appearance: none; /* Firefox */
  appearance: none; /* 모든 브라우저에서 기본 버튼 스타일 제거 */
  width: 25%;
  height: 100%;
  border-right: 1px black solid;
  font-size: 15px;
`

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
    const [gugun, setGuugn] = useState("");
    const [category, setCategory] = useState("");
    const [guguns, setGuguns] = useState<string[]>([]);

    useEffect(() => {
        console.log("num : " + gugun);
        console.log("num : " + category);
        fetchData().then(data => {
            queryClient.setQueryData(["placeData"], data);
        });
    }, [category, gugun]);

    return (
        <MacBookBox width={"80vw"} height={"70vh"} color1={"#bcd3ff"} color2={"#ffffff"} alignItems={"center"}>
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
                            setGuugn(event.target.value);
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
                        <KakaoMap/>
                    </KaKaoMapBox>
                    <ReservePlaceBox>
                        {isLoading ? <span>now loading...</span> :
                            <ReservePlaceComp data={data.data}
                                              femaleId={props.userId == "male" ? props.opponentId : props.userId}
                                              maleId={props.userId == "male" ? props.userId : props.opponentId}
                                              index={0}/>}
                    </ReservePlaceBox>
                </ReserveMainBox>
            </InnerBox>
        </MacBookBox>);
}

export default ReserveComp;