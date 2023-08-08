import React, { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
    Auth: any;
    kakao_account: any;
  }
}

const KakaoMap: React.FC = () => {
  // const latitude1 = useRecoilValue(latitudeState);
  // const longitude1 = useRecoilValue(longitudeState);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js`;
    script.async = true;

    script.onload = () => {
      window.Kakao.init("dd25fb1ab1355cc42fcc658c13182ed6"); // Replace with your Kakao App Key
      if (window.kakao && window.kakao.maps) {
        const container = document.getElementById("map");
        const { LatLng, Map } = window.kakao.maps; // 명시적으로 객체 가져오기
        const latitude = 36.333834;
        const longitude = 127.39287;
        const center = new LatLng(latitude, longitude);
        const options = {
          center,
          level: 3,
        };
        new Map(container, options);
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "100%", backgroundColor: "gold" }}
    />
  );
};

export default KakaoMap;
