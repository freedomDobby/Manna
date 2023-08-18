
// import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
// import { ForgotIdErrorModalAtom, LoginErrorModalAtom, findIdCheckIdAtom, findIdModalAtom, findPwModalAtom } from '../../../Recoil/State';
// import MacBookBox from '../../../components/common/macbookBox';
// import { MyPageButton } from '../MyPage/MyPageStyles';
// import Modal from '@mui/material/Modal';
// import { useNavigate } from 'react-router-dom';




export let SmallIdLabel = styled.label`
  color: #ffffff;
  width: 20vh;
  height: 6vh;
  font-size: 3vh;
  text-align: center;
  line-height: 7vh;
`;




export const LargeStyledButton = styled.button`
  margin: 1px;
  width: 50vh;
  height: 7vh;
  color: #ffcced;
  border: solid 0.4vh;
  border-color: #ffcced;
  background-color: #ffffff;
  border-radius: 1.5vh;
  font-size: 4vh;
  transition: border-color 0.3s, color 0.3s;

  &:hover {
    border-color: #d9cff4;
    color: #d9cff4;
    border: solid 0.3vh;
  }
`;
