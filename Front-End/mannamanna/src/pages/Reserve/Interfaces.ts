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