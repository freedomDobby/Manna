import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Switch } from "@mui/material";
import { RegisterDataState } from "./RegisterState";

const DrinkCheck = () => {
  const [userDrink, setUserDrink] = useRecoilState(); // useRecoilState() 괄호 안을 채워야함

  const handleDrinkingClick = () => {
    // setUserDrink(!userDrink);
    console.log(!userDrink); // The console log might not reflect the updated value immediately due to asynchronous nature of setState
  };

  return (
    <Switch
      checked={!userDrink}
      onClick={handleDrinkingClick}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export default DrinkCheck;
