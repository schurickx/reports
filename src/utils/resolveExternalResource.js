import { BASE_URL } from "../constants/api";

export const resolveExternalResource = (id) => {
  return `${BASE_URL}/resource/${id}`;
};