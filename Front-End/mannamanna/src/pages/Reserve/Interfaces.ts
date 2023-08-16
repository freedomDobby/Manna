export interface IReservePlaceProps {
    data: IReservePlace[];
    index: number;
    femaleId: string,
    maleId: string;
}

export interface IReservationOfflineRequest {
    femaleId: string;
    maleId: string;
    date: string;
    reserveAddressId: number;
}


export interface IReservePlaceResponse {
    result: boolean;
    msg: string;
    data: IReservePlace[];
}

export interface IReservePlace {
    id: number;
    name: string;
    sido: string;
    gugun: string;
    detail: string;
    category: string;
    latitude: number;
    longitude: number;
}

export interface IReservePlaceRequest {
    sido: string;
    gugun: string;
    category: string;
}

export interface IReserveCompProps {
    userId: string;
    opponentId: string;
}

export interface ILocateObject {
    [key: string]: string[];
}

export interface IModalProps {
    isOpen: boolean;
    onClose: boolean
}

export interface IMiddleReservePlace {
    userId: string;
    opponentId: string;
    category: string;
}


export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface ModalContainerProps {
    isOpen: boolean;
}