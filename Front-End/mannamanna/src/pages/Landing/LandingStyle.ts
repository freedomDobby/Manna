import styled from "styled-components";

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justifycontent: center;
  alignitems: center;
`;

const Content = styled.div`
  border: 1px solid red;
  color: #d9cff4;
  font-size: 13vh;
  text-align: center;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #98c1fe;
  font-weight: bolder;
`;
const BigContainer = styled.div`
  border: 2px solid gold;
  display: flex;
`;

const ContentBlue = styled.div`
  border: 1px solid red;
  color: #5c8ecb;
  font-size: 13vh;
  text-align: center;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #98c1fe;
  font-weight: bolder;
`;
const ContentLogo = styled.div`
  border: 1px solid red;
  color: #ff89ac;
  font-size: 13vh;
  text-align: center;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #5c8ecb;
  font-weight: bolder;
`;

const textandBtnContainer = styled.div`
  border: 1px solid red;
  height: 90vh;
  justifycontent: center;
  alignitems: center;
`;

export {
  CenteredDiv,
  Content,
  BigContainer,
  ContentBlue,
  ContentLogo,
  textandBtnContainer,
};
