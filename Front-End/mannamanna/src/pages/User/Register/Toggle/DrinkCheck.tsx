import { useRecoilState } from "recoil";
import { Switch } from "@mui/material";
import { userDrinkState } from "../RegisterState";

const DrinkCheck = () => {
  const [userDrink, setUserDrink] = useRecoilState(userDrinkState);
  // console.log(userDrink);

  const handleDrinkingClick = () => {
    setUserDrink(!userDrink);
    console.log(userDrink);
  };

  return (
    <Switch
      checked={userDrink}
      onClick={handleDrinkingClick}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export default DrinkCheck;
