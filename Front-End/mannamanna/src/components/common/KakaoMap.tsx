import React, { useEffect } from 'react';

interface LatLng {
  latitude: number;
  longitude: number;
}

interface MapOptions {
  center: LatLng;
  level: number;
  // 다른 옵션들도 필요에 따라 정의
}

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=736dcc51f648222222f38b0181a46ab0&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      // Kakao 지도 API 스크립트 로드가 완료된 후에 지도 초기화를 수행합니다.
      const container = document.getElementById('map');
      if (container) {
        const { kakao } = window;

        const latitude = 36.333834; // 대전 삼성화재연수원의 위도 값
        const longitude = 127.392870; // 대전 삼성화재연수원의 경도 값

        const center: LatLng = {
          latitude: latitude,
          longitude: longitude,
        };

        const options: MapOptions = {
          center: center,
          level: 3,
        };

        new kakao.maps.Map(container, options);
      }
    };

    return () => {
      // 컴포넌트가 언마운트될 때 스크립트를 정리합니다.
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '100%', backgroundColor: 'gold' }} />;
};

export default KakaoMap;
