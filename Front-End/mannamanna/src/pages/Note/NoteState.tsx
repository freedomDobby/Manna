import { atom } from "recoil";

export const SenderNameState = atom<string>({
  key: "SenderName",
  default: "SenderName",
});

export const SenderHeightState = atom<number>({
  key: "SenderHeight",
  default: 166,
});

export const SenderAgeState = atom<number>({
  key: "SendeAge",
  default: 25,
});
export const SenderJobState = atom<string>({
  key: "SenderJob",
  default: "SenderJob",
});
export const SenderMbtiState = atom<string>({
  key: "SenderMbti",
  default: "SenderMbti",
});
export const SenderPrState = atom<string>({
  key: "SenderPr",
  default: "SenderPr",
});
export const SenderProfileState = atom<string>({
  key: "SenderProfile",
  default: "SenderProfile",
});
