import { useRecoilState } from "recoil";
import { userPrState } from "./RegisterState";

export const InroduceText = () => {
  const [userPr, setUserPr] = useRecoilState(userPrState);
  const EnterPr = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserPr(event.target.value);
    console.log(userPr);
  };

  return (
    <div
      style={{
        // border: "1px solid red",
        width: "90%",
      }}
    >
      <textarea
        onChange={EnterPr}
        style={{
          border: "2px solid black",
          width: "100%",
          height: "90%",
        }}
      />
    </div>
  );
};
