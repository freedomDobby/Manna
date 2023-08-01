import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledArrowBackIcon = styled(ArrowBackIosIcon)`
  color: white;
  cursor: pointer;
`;

const GoBackIcon = () => {
  const navigate = useNavigate();
  const GoBack = () => {
    navigate(-1);
  };
  return (
    <StyledArrowBackIcon
      fontSize="large"
      onClick={GoBack}
    ></StyledArrowBackIcon>
  );
};

export default GoBackIcon;
