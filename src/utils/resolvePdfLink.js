import { BASE_URL, BASE_URL_WITHOUT_API } from "../constants/api";

export const resolvePdfLink = (bookId, pdfFile) =>
         `${BASE_URL_WITHOUT_API}/public/files/library/${bookId}/pdf/${pdfFile}`;

export const resolvePdfDownloadLink = (bookId) =>
  `${BASE_URL}/book/${bookId}/pdf`;
