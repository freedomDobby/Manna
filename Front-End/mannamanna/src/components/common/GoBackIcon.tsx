import React from 'react';
// import  ArrowBackIosIcon  from '@mui/icons-material/ArrowBackIos';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GoBackBtn from '../../../src/asset/image/GoBackBtn.png'

const StyledArrowBackIcon = styled.div`
// border: 1px solid red;
width: 5vw;
height: 5vh;
background-image:url(${GoBackBtn});
background-size:100% 100%;
cursor: pointer;
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