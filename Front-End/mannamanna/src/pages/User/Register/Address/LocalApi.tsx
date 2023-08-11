import { useState } from "react";
import api from "../../../../apis/Api";
import {
  RegisterDataState,
  latitudeState,
  longitudeState,
} from "../RegisterState";
import { useRecoilState } from "recoil";
import { type } from "os";
import { RestKey } from "../../Login/ApiKey";

interface AddressSearchResult {
  documents: {
    address_name: string;
    x: string;
    y: string;
  }[];
}

export const LocalApi = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [latitude, setlatitude] = useRecoilState(latitudeState);
  const [longitude, setlongitude] = useRecoilState(longitudeState);
  const [userInfo] = useRecoilState(RegisterDataState);

  const [searchQuery, setSearchQuery] = useState(""); // 주소 검색어 상태
  const [searchResults, setSearchResults] =
    useState<AddressSearchResult | null>(null); // 검색 결과 상태

  const handleSearch = async (event: any) => {
    event.preventDefault();
    const REST_API_KEY = "24de74d8dfbf09eef0de147e26dd6747"; // 실제 키로 교체해야 합니다.
    try {
      const response = await api.get<AddressSearchResult>(
        "https://dapi.kakao.com/v2/local/search/address.json",
        {
          headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`,
          },
          params: {
            query: searchQuery,
          },
        }
      );
      setSearchResults(response.data);
      console.log(searchResults);
      if (searchResults !== null) {
        const xValue = parseFloat(response.data.documents[0].x);
        const yValue = parseFloat(response.data.documents[0].y);
        // console.log(typeof xValue);
        setlatitude(xValue);
        setlongitude(yValue);
      } else {
        setlatitude(userInfo.latitude);
        setlongitude(userInfo.longitude);
      }
    } catch (error) {
      console.error("Error fetching address data:", error);
    }
  };

  // const handleTokenAndUserInfo = () => {
  //   console.log("토큰 정보 받아오기");

  //   window.Kakao.API.request({
  //     url: "/v2/user/me",
  //     success: (res: any) => {
  //       console.log(res); // 유저 정보 출력
  //     },
  //     fail: (error: any) => {
  //       console.error("Error fetching user info:", error);
  //     },
  //   });
  // };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="주소 검색어 입력"
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      {searchResults && (
        <div>
          <h2>검색 결과</h2>
          <ul>
            {searchResults.documents.map((result, index) => (
              <li key={index}>
                <p>{result.address_name}</p>
                <p>
                  X: {result.x}, Y: {result.y}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
