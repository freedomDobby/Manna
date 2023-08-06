import React, { useEffect, useState } from "react";
import axios from "axios";
import JavaScriptKey from "../../Login/ApiKey";

export interface KakaoLocationParams {
  xCoordinate: number;
  yCoordinate: number;
  apiKey: string;
}

const Register = () => {
  const [locationData, setLocationData] = useState<any>(null); // 받아온 데이터를 저장할 상태

  const xCoordinate = 127.1086228; // 예시 좌표값
  const yCoordinate = 37.4012191; // 예시 좌표값
  const apiKey = "YOUR_KAKAO_REST_API_KEY"; // 실제 API 키로 수정

  const headers = {
    Authorization: `KakaoAK ${JavaScriptKey}`,
  };

  return axios.get("https://dapi.kakao.com/v2/local/search/address.${FORMAT}", {
    headers,
  });
};
