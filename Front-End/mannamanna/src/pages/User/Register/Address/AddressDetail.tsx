import { useRecoilState } from "recoil";
import { userAddressDetailState } from "../RegisterState";

export const AddressDetail = () => {
  const [userAddressDetail, setUserAddressDetail] = useRecoilState(
    userAddressDetailState
  );
  const EnterAddressDetail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAddressDetail(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="상세주소"
        style={{
          width: "100%",
          height: "10%",
          border: "1px solid black",
          borderRadius: "0.5vh",
          fontSize: "1.3rem",
        }}
        value={userAddressDetail}
        onChange={EnterAddressDetail}
      />
    </div>
  );
};
