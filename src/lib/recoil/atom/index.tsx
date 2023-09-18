import { atom } from "recoil";

export const isDarkMode = atom<boolean>({
  key: "isDarkMode",
  default: false,
});