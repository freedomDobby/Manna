import React, { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk"; // React Kakao 지도 라이브러리의 Map 컴포넌트를 가져옵니다.
// import useInjectKakaoMapApi from "useInjectKakaoMapApi"; // useInjectKakaoMapApi hook을 가져옵니다.

const KakaoMap = () => {
  // const [mapLoaded, setMapLoaded] = useState(false);
  // console.log(mapLoaded);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   const apiKey = JavaScriptKey;
  //   script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}`;
  //   script.async = true;
  //   script.onload = () => {
  //     setMapLoaded(true); // Kakao 지도 API 스크립트가 로드되면 상태 업데이트
  //   };
  //   document.head.appendChild(script);

  //   return () => {
  //     // 컴포넌트가 언마운트될 때 스크립트 제거
  //     document.head.removeChild(script);
  //   };
  // }, []);

  return (
    <Map
      center={{ lat: 36.354946759143, lng: 127.29980994578 }} // 지도의 중심 좌표
      style={{ width: "100%", height: "100%", zIndex: "30000000" }} // 지도 크기
      level={3} // 지도 확대 레벨
    >
      {/* MapMarker 컴포넌트를 여기에 추가하여 마커를 표시할 수 있습니다. */}
    </Map>
  );
};

export default KakaoMap;
