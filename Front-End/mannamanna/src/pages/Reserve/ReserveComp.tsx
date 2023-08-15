import MacBookBox from "../../components/common/macbookBox";
import styled from "styled-components";
import KakaoMap from "../../components/common/KakaoMap";
import axios from "axios";
import {IReserveCompProps, IReservePlaceRequest} from "./Interfaces";
import {useQuery} from "@tanstack/react-query";
import ReservePlaceComp from "./ReservePlaceComp";
import {LocateAddress} from "./LocateObject";
import {useState} from "react";

const LocateSelectBox = styled.div`
  display: flex;
  height: 8%;
  padding-left: 3%;
  padding-bottom: 1%;
  padding-top: 1%;
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
`

const ReservePlaceBox = styled.div`
  width: 49%;
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

const getPlaceByLocate = (ReservePlaceRequest: IReservePlaceRequest) => {
    return axios({
        method: "POST",
        url: "https://i9b205.p.ssafy.io/api/reserve/placeList",
        headers: {"Content-Type": "application/json"},
        data: {ReservePlaceRequest},
    })
}

const getPlaceByMember = (userId: string, opponentId: string) => {
    return axios({
        method: "GET",
        url: `https://i9b205.p.ssafy.io/api/reserve/${userId}/${opponentId}`,
        headers: {"Content-Type": "application/json"}
    })
}

const ReserveComp = (props: IReserveCompProps) => {
    const {
        isLoading,
        data
    } = useQuery(["placeData"], () => getPlaceByMember(props.userId, props.opponentId).then(response => response.data))
    const [sido, setSido] = useState("");
    const [gugun, setGuugn] = useState("");
    const [guguns, setGuguns] = useState<string[]>([]);

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
                            <option> 시도 선택</option>
                            {
                                Object.keys(LocateAddress).map((sido) => (
                                    <option key={sido} value={sido}>{sido}</option>
                                ))
                            }
                        </SelectLocate>
                        <SelectLocate value={gugun} onChange={(event) => setGuugn(event.target.value)}>
                            <option> 구군 선택</option>
                            {
                                guguns.map((gugun) => (
                                    <option key={gugun} value={gugun}>{gugun}</option>
                                ))
                            }
                        </SelectLocate>
                    </SelectBox>
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