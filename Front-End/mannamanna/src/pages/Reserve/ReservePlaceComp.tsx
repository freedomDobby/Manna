import {IReservePlace, IReservePlaceProps} from "./Interfaces";
import {useState} from "react";
import styled from "styled-components";

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


const ReservePlaceComp = (props: IReservePlaceProps) => {
    const [index, setIndex] = useState(props.index);
    const [data, setData] = useState(props.data.slice(index * 10, index * 10 + 10));
    const [itemElements, setItemElements] = useState<any>([
        <PlacePageButton key={1} onClick={() => {ItemList(1)}}>{1}</PlacePageButton>,
        <PlacePageButton key={2} onClick={() => {ItemList(2)}}>{2}</PlacePageButton>,
        <PlacePageButton key={3} onClick={() => {ItemList(3)}}>{3}</PlacePageButton>,
        <PlacePageButton key={4} onClick={() => {ItemList(4)}}>{4}</PlacePageButton>,
        <PlacePageButton key={5} onClick={() => {ItemList(5)}}>{5}</PlacePageButton>])
    const [placeBox, setPlaceBox] = useState<any>(getPlaceBox(data));

    const ItemList = (curIndex: number) => {
        console.log(curIndex)
        setIndex(curIndex);
        setData(props.data.slice(curIndex * 10, curIndex * 10 + 10));
        setPlaceBox(getPlaceBox(data));

        const itemElements = [];

        if (curIndex < 3) {
            curIndex = 3;
        }
        for (let i = curIndex - 2; i < curIndex + 3; i++) {
            itemElements.push(<PlacePageButton key={i} onClick={() => ItemList(i)}>{i}</PlacePageButton>);
        }
        setItemElements(itemElements);
    }

    function getPlaceBox(item: IReservePlace[]) {
        return <>
            {item.map((item: IReservePlace, index: number) => (
                <PlaceElement key={index}>
                    {item.name}
                    <div>
                        ️💖예약하기
                    </div>
                </PlaceElement>
            ))}
        </>;
    }

    return (
        <PlaceContainer>
            <PlaceBox>
                {placeBox}
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