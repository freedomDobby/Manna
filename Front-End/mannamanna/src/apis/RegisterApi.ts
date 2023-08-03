import { AxiosResponse } from "axios";
import api from "./Api";
import { RegisterReq } from "./Request/Request";

export const postRegister = (
  registerData: RegisterReq
): Promise<AxiosResponse> => {
  return api.post("/user/regist", registerData);
};
