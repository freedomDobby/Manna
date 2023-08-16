import styled from "styled-components";

export const LocateSelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8%;
  padding-left: 3%;
  padding-bottom: 1%;
  padding-top: 1%;
  padding-right: 3%;
`

export const ReserveMainBox = styled.div`
  height: 87%;
  display: flex;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
`

export const KaKaoMapBox = styled.div`
  width: 49%;
  border: 2px solid black;
`

export const ReservePlaceBox = styled.div`
  width: 49%;
  border: 2px solid black;
`;

export const InnerBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
`

export const SelectBox = styled.div`
  height: 100%;
  margin-right: 3%;
  width: 30%;
  border: 2px solid black;
  display: flex;
  border-radius: 5px;
`

export const SelectLocate = styled.select`
  /* Remove default appearance */
  //appearance: none;
  //-webkit-appearance: none;
  //-moz-appearance: none;

  /* Remove the arrow or any browser's default styles */
  background: none;
  border: none;
  border-left: 1px solid black;
  font: inherit;
  font-size: 15px;

  height: 100%;
  width: 30%;
`

export const LocateDiv = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PlaceFilterBox = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: right;
  border: 2px solid black;
  border-radius: 5px;
`

export const PlaceFilterButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  outline: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  -webkit-appearance: none; /* Safari와 Chrome */
  -moz-appearance: none; /* Firefox */
  appearance: none; /* 모든 브라우저에서 기본 버튼 스타일 제거 */
  width: 25%;
  height: 100%;
  border-right: 1px black solid;
  font-size: 15px;
`
