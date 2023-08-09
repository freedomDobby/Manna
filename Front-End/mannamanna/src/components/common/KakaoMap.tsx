import React, { useEffect } from "react";
import { RestKey } from "../../pages/User/Login/ApiKey";

declare global {
  interface Window {
    kakao: any;
    Auth: any;
    kakao_account: any;
  }
}

const KakaoMap: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${RestKey}`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        if (container) {
          const { LatLng, Map } = window.kakao.maps;
          const latitude = 36.333834;
          const longitude = 127.39287;
          const center = new LatLng(latitude, longitude);
          const options = {
            center,
            level: 3,
          };
          new Map(container, options);
        }
      });
    };

    document.head.appendChild(script);

    return () => {
      // Clean up the script tag when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "100vh", backgroundColor: "gold" }}
    />
  );
};

export default KakaoMap;
