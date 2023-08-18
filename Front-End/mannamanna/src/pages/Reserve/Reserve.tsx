import { useEffect } from "react";
import ReserveComp from "./ReserveComp";
import axios from "axios";
import { IMissionStartRequest } from "./Interfaces";
import { useRecoilState } from "recoil";
import { userSessionId } from "../Soagaeting/SogaetingState";





const Reserve = () => {
    return (
        <ReserveComp userId="test11" opponentId="test12"/>
    );
};

export default Reserve;
