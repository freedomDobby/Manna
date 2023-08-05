const DEV = process.env.NODE_ENV !== "production";

const PORT_SERVER = ":9999"; // 백엔드 서버
const PORT_OPENVIDU = ":4443";

export const WS_BASE_URL =
  (DEV ? `ws://localhost${PORT_SERVER}` : "wss://i7a309.p.ssafy.io") + "/ws/ava";
  export const API_BASE_URL = "http://i9b205.p.ssafy.io:9999/api";
  export const API_LOGIN_URL = "http://i9b205.p.ssafy.io:9999"; // 로그인은 api 생략임
export const OPENVIDU_SERVER_URL ="http://i9b205.p.ssafy.io" + PORT_OPENVIDU;
export const OPENVIDU_SERVER_SECRET = DEV ? "MY_SECRET" : "avatime"; // 현재는 무조건 MY_SECRET
export const TEST_URL="https://codingapple1.github.io/shop"