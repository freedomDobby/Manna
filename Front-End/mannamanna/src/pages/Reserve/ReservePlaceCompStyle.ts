import styled from "styled-components";
import {ModalContainerProps} from "./Interfaces";

export const InnerBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
`

export const PlaceContainer = styled.div`
  height: 100%;
  width: 100%;
`

export const PlaceBox = styled.div`
  padding-top: 2%;
  height: 85%;
  width: 100%;
`

export const PlacePagingButtonBox = styled.div`
  margin-top: 3%;
  height: 5%;
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  justify-content: center;
`

export const PlaceNameBox = styled.div`
  width: 70%;
  height: 100%;
  white-space: nowrap; /* 텍스트가 줄바꿈되지 않도록 설정 */
  overflow: hidden; /* 넘치는 내용을 숨김 */
  text-overflow: ellipsis; /* 넘치는 내용에 ... 표시 */
`

export const PlaceElement = styled.div`
  padding-top: 1%;
  padding-bottom: 1%;
  border-bottom: 3px solid black;
  margin-right: 5%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PlacePageButton = styled.button`
  margin-left: 3px;
  margin-right: 3px;
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
`

export const NumberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 중앙 정렬도 함께 적용 */
`

export const ReserveButton = styled.button`
  width: 30%;
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
`

export const ModalContainer = styled.div<ModalContainerProps>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const DateTimeBox = styled.div`
  width: 70%;
  padding-left: 15%;
  padding-right: 15%;
  height: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 10%;
`

export const UserDetailBox = styled.div`
  width: 70%;
  padding-right: 15%;
  padding-left: 15%;
  height: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ModalBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const IDBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  padding-bottom: 3vh;
  white-space: nowrap; /* 텍스트가 줄바꿈되지 않도록 설정 */
  overflow: hidden; /* 넘치는 내용을 숨김 */
  text-overflow: ellipsis; /* 넘치는 내용에 ... 표시 */
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`

export const ReserveFetchButton = styled.button`
  background: none;
  padding: 0;
  outline: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  -webkit-appearance: none; /* Safari와 Chrome */
  -moz-appearance: none; /* Firefox */
  appearance: none; /* 모든 브라우저에서 기본 버튼 스타일 제거 */
  border: none;
  border-radius: 5px;
  font-size: 15px;
  width: 50%;
  height: 100%;
  background-color: #bcd3ff;
`