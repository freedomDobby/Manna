import {IReservationOfflineRequest, IReservePlace, IReservePlaceProps} from "./Interfaces";
import {useState} from "react";
import styled from "styled-components";
import axios from "axios";

const PlaceContainer = styled.div`
  height: 100%;
  width: 100%;
`

const PlaceBox = styled.div`
  padding-top: 3%;
  height: 85%;
  width: 100%;
`

const PlacePagingButtonBox = styled.div`
  height: 10%;
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  justify-content: center;
`

const PlaceNameBox = styled.div`
  width: 70%;
  height: 100%;
  white-space: nowrap; /* 텍스트가 줄바꿈되지 않도록 설정 */
  overflow: hidden; /* 넘치는 내용을 숨김 */
  text-overflow: ellipsis; /* 넘치는 내용에 ... 표시 */
`

const PlaceElement = styled.div`
  padding-top: 1%;
  padding-bottom: 1%;
  border-bottom: 3px solid black;
  margin-right: 5%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PlacePageButton = styled.button`
  margin-left: 3px;
  margin-right: 3px;
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
`

const NumberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 중앙 정렬도 함께 적용 */
`

const ReserveButton = styled.button`
  width: 30%;
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
`

const insertReservation = (ReservationOfflineRequest: IReservationOfflineRequest) => {
    return axios({
        method: "POST",
        url: "https://i9b205.p.ssafy.io/api/schedule/offline/insert",
        headers: {"Content-Type": "application/json"},
        data: ReservationOfflineRequest,
    })
}

const ReservePlaceComp = (props: IReservePlaceProps) => {
    function initialState() {
        return [
            <PlacePageButton key={1} onClick={() => {
                ItemList(1)
            }}>{1}</PlacePageButton>,
            <PlacePageButton key={2} onClick={() => {
                ItemList(2)
            }}>{2}</PlacePageButton>,
            <PlacePageButton key={3} onClick={() => {
                ItemList(3)
            }}>{3}</PlacePageButton>,
            <PlacePageButton key={4} onClick={() => {
                ItemList(4)
            }}>{4}</PlacePageButton>,
            <PlacePageButton key={5} onClick={() => {
                ItemList(5)
            }}>{5}</PlacePageButton>];
    }

    const [index, setIndex] = useState(props.index);
    const [data, setData] = useState(props.data.slice(index * 10, index * 10 + 10));
    const [itemElements, setItemElements] = useState<any>(initialState())
    const [placeComponent, setPlaceComponent] = useState<any>(makePlaceComponent(data));

    const maxIndex = props.data.length / 10;

    const ItemList = (curIndex: number) => {
        if (curIndex > maxIndex || curIndex <= 0) {
            return;
        }

        setIndex(curIndex);
        const newData = props.data.slice((curIndex - 1) * 10, (curIndex - 1) * 10 + 10);
        setData(newData);
        setPlaceComponent(makePlaceComponent(newData));

        const itemElements = [];

        let targetIndex = curIndex + 3;
        let startIndex = curIndex - 2;

        if (curIndex <= 3) {
            startIndex = 1;
            targetIndex = startIndex + 5
        }

        if (startIndex + 6 > maxIndex) {
            targetIndex = maxIndex;
        }

        for (let i = startIndex; i < targetIndex; i++) {
            itemElements.push(<PlacePageButton key={i} onClick={() => ItemList(i)}>{i}</PlacePageButton>);
        }
        setItemElements(itemElements);
    }

    function makeRequestJSON(item: IReservePlace) {
        const now = new Date();
        return {
            femaleId: props.femaleId,
            maleId: props.maleId,
            date: `${now.getFullYear()}년 ${String(now.getMonth()).padStart(2, '0')}월 ${String(now.getDay()).padStart(2, '0')}일 ${String(now.getHours()).padStart(2, '0')}시 ${String(now.getMinutes()).padStart(2, '0')}분`,
            reserveAddressId: item.id
        };
    }

    function makePlaceComponent(item: IReservePlace[]) {
        return <>
            {item.map((item: IReservePlace, index: number) => (
                <PlaceElement key={index}>
                    <PlaceNameBox>
                        {item.name}
                    </PlaceNameBox>
                    <ReserveButton
                        onClick={() => insertReservation(makeRequestJSON(item))
                            .then((response) => alert(response.data.msg))
                            .catch(() => alert("스케쥴 등록에 실패하였습니다."))
                    }>
                        ️💖예약하기
                    </ReserveButton>
                </PlaceElement>
            ))}
        </>;
    }

    return (
        <PlaceContainer>
            <PlaceBox>
                {placeComponent}
            </PlaceBox>
            <PlacePagingButtonBox>
                <PlacePageButton onClick={() => ItemList(index - 1)}>
                    ◀︎
                </PlacePageButton>
                <NumberBox>
                    {itemElements}
                </NumberBox>
                <PlacePageButton onClick={() => ItemList(index + 1)}>
                    ▶︎
                </PlacePageButton>
            </PlacePagingButtonBox>
        </PlaceContainer>
    )
}

export default ReservePlaceComp;