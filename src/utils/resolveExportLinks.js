import { BASE_URL } from "../constants/api";

export const resolveExportLink = (bookIds = [], format) =>
  `${BASE_URL}/bookexport?ids=${bookIds.join(",")}&format=${format}`;