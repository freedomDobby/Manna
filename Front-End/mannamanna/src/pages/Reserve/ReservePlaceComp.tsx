import {
    IReservationOfflineRequest,
    IReservePlace,
    IReservePlaceProps,
    ModalContainerProps,
    ModalProps
} from "./Interfaces";
import {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from 'dayjs';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import MacBookBox from "../../components/common/macbookBox";

const InnerBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
`

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

const ModalContainer = styled.div<ModalContainerProps>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const ModalContent = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;



const DateTimeBox = styled.div`
  width: 70%;
  padding-left: 15%;
  padding-right: 15%;
  height: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 10%;
`

const UserDetailBox = styled.div`
  width: 70%;
  padding-right: 15%;
  padding-left: 15%;
  height: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const ModalBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const IDBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  padding-bottom: 3vh;
  white-space: nowrap; /* 텍스트가 줄바꿈되지 않도록 설정 */
  overflow: hidden; /* 넘치는 내용을 숨김 */
  text-overflow: ellipsis; /* 넘치는 내용에 ... 표시 */
`

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`

const ReserveFetchButton = styled.button`
  background: none;
  padding: 0;
  outline: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  -webkit-appearance: none; /* Safari와 Chrome */
  -moz-appearance: none; /* Firefox */
  appearance: none; /* 모든 브라우저에서 기본 버튼 스타일 제거 */
  border: none;
  border-radius: 5px;
  font-size: 15px;
  width: 50%;
  height: 100%;
  background-color: #bcd3ff;
`

const insertReservation = (ReservationOfflineRequest: {
    femaleId: string;
    date: string;
    maleId: string;
    reserveAddressId: number | undefined
}) => {
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentShop, setCurrentShop] = useState<IReservePlace>();
    const openModal = (item:IReservePlace) => {
        setCurrentShop(item);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const [placeComponent, setPlaceComponent] = useState<any>(makePlaceComponent(data));
    const [date, setDate] = useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

    const Modal: React.FC<ModalProps> = ({isOpen, onClose}) => {
        return (
            <ModalContainer isOpen={isOpen} onClick={closeModal}>
                <MacBookBox width={"30vw"} height={"70vh"} color1={"#bcd3ff"} color2={"#ffffff"} alignItems={"center"}>
                    <InnerBox>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <ModalBox>
                                <DateTimeBox>
                                    <TitleBox>
                                        장소 : {currentShop?.name}
                                    </TitleBox>
                                    <TitleBox>
                                        소개팅시간을 선택하세요
                                    </TitleBox>
                                    <DateTimePicker
                                        label="예약 날짜 선택"
                                        value={date}
                                        onAccept={(newValue) => setDate(newValue)}
                                    />
                                </DateTimeBox>
                                <UserDetailBox>
                                    <IDBox>
                                        남성 아이디: {props.maleId}
                                    </IDBox>
                                    <br/>
                                    <IDBox>
                                        💕
                                    </IDBox>
                                    <br/>
                                    <IDBox>
                                        여성 아이디: {props.femaleId}
                                    </IDBox>
                                </UserDetailBox>
                                <ButtonBox>
                                    <ReserveFetchButton onClick={() => {
                                        insertReservation(makeRequestJSON(currentShop)).then(() => alert("예약 성공"));
                                    }}>
                                        예약하기
                                    </ReserveFetchButton>
                                </ButtonBox>
                            </ModalBox>
                        </LocalizationProvider>
                    </InnerBox>
                </MacBookBox>
            </ModalContainer>
        );
    };

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

    function makeRequestJSON(item: IReservePlace | undefined) {
        const formattedDate = `${date?.format('YYYY년 MM월 DD일 HH시 mm분')}`;
        return {
            femaleId: props.femaleId,
            maleId: props.maleId,
            date: formattedDate,
            reserveAddressId: item?.id
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
                        onClick={() => openModal(item)}
                    >
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
            <Modal isOpen={isModalOpen} onClose={closeModal}/>
        </PlaceContainer>
    )
}

export default ReservePlaceComp;