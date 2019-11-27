import { BASE_URL } from "../constants/api";

export const resolveUserPhoto = (mid) => {
  return `${BASE_URL}/people/photo/${mid}`;
};
