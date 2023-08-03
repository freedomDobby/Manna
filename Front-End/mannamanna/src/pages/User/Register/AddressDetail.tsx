import { useRecoilState } from "recoil";
import { userAddressDetailState } from "./RegisterState";

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
        style={{ width: "70%", height: "10%" }}
        value={userAddressDetail}
        onChange={EnterAddressDetail}
      />
    </div>
  );
};
