import MacBookBox from "../../components/common/macbookBox";
import styled from "styled-components";
import KakaoMap from "../../components/common/KakaoMap";
import axios from "axios";
import {IReserveCompProps, IReservePlaceRequest} from "./Interfaces";
import {useQuery} from "@tanstack/react-query";
import ReservePlaceComp from "./ReservePlaceComp";
import Select1 from "./Selection1";
import Select2 from "./Selection2";
import Select3 from "./Selection3";


const LocateSelectBox = styled.div`
  display: flex;
  height: 10%;
  padding-left: 3%;
  border: 1px solid red;
`

const ReserveMainBox = styled.div`
  height: 90%;
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  padding-left: 3%;
  padding-right: 3%;
`

const KaKaoMapBox = styled.div`
  width: 49%;
  border: 1px solid red;
`

const ReservePlaceBox = styled.div`
  width: 49%;
  border: 1px solid red;
`;

const InnerBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
`

const SelectBox = styled.div`
  height: 100%;
  margin-right: 3%;
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
    return (
        <MacBookBox width={"80vw"} height={"70vh"} color1={"#bcd3ff"} color2={"#ffffff"} alignItems={"center"}>
            <InnerBox>
                <LocateSelectBox>
                    <SelectBox><Select1/></SelectBox>
                    <SelectBox><Select2/></SelectBox>
                    <SelectBox><Select3/></SelectBox>
                </LocateSelectBox>
                <ReserveMainBox>
                    <KaKaoMapBox>
                        <KakaoMap/>
                    </KaKaoMapBox>
                    <ReservePlaceBox>
                        {isLoading ? <span>now loading...</span> :
                            <ReservePlaceComp data={data.data} index={0}/>}
                    </ReservePlaceBox>
                </ReserveMainBox>
            </InnerBox>
        </MacBookBox>)
}

export default ReserveComp;