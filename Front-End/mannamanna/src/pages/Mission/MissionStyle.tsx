import styled from "styled-components";

export const MissionContainerBox = styled.div`
  border: solid 5px black;
  background-color: white;
  width: 140vh;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.3vh;
`;

export const MissionBox = styled.div`
  // border: 1px solid red;
  width: 90%;
  height: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

interface MissionCardProps {
  image: any;
}

export const MissionCard = styled.div<MissionCardProps>`
  // border: 1px solid black;
  width: 25%;
  height: 90%;
  background-image: url(${(props) =>
    props.image}); // 프롭스로 받은 이미지 경로 사용
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;
