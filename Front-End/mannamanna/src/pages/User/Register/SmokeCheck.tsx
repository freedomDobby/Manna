import { useRecoilState } from "recoil";
import { Switch } from "@mui/material";
import { userSmokeState } from "./RegisterState";

const SmokeCheck = () => {
  const [userSmoke, setUserSmoke] = useRecoilState(userSmokeState);
  const handleSmokeingClick = () => {
    setUserSmoke(!userSmoke);
    console.log(userSmoke);
  };

  return (
    <Switch
      checked={!userSmoke}
      onClick={handleSmokeingClick}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export default SmokeCheck;
