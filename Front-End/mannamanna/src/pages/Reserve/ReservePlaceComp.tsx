import {
    IReservePlace,
    IReservePlaceProps,
    ModalProps
} from "./Interfaces";
import {useState} from "react";
import axios from "axios";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from 'dayjs';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import MacBookBox from "../../components/common/macbookBox";
import {
    ButtonBox, CloseButton,
    DateTimeBox, IDBox,
    InnerBox,
    ModalBox,
    ModalContainer, NumberBox, PlaceBox, PlaceContainer, PlaceElement, PlaceNameBox,
    PlacePageButton, PlacePagingButtonBox, ReserveButton, ReserveFetchButton,
    TitleBox,
    UserDetailBox
} from "./ReservePlaceCompStyle";



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
    const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));

    const Modal: React.FC<ModalProps> = ({isOpen, onClose}) => {
        return (
            <ModalContainer isOpen={isOpen} >
                <CloseButton onClick={closeModal}>
                    X
                </CloseButton>
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