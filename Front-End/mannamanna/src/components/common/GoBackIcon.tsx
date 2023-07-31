import React from 'react';
// import  ArrowBackIosIcon  from '@mui/icons-material/ArrowBackIos';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GoBackBtn from '../../../src/asset/image/GoBackBtn.png'

const StyledArrowBackIcon = styled.div`
width: 10%;
height: 17%;
  // border: 1px solid red;
  background-image:url(${GoBackBtn});
`;

const GoBackIcon = () => {
    const navigate = useNavigate();
    const GoBack = () => {
      navigate(-1);
    };
    return (
        <StyledArrowBackIcon onClick={GoBack}>
        </StyledArrowBackIcon>
    );
};

export default GoBackIcon;