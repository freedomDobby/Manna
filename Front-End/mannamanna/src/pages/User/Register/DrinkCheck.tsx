// import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Switch } from "@mui/material";
import { userDrinkState } from "./RegisterState";

const DrinkCheck = () => {
  const [userDrink, setUserDrink] = useRecoilState(userDrinkState); // useRecoilState() 괄호 안을 채워야함

  const handleDrinkingClick = () => {
    setUserDrink(!userDrink);
    console.log(userDrink);
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
