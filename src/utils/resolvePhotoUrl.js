import { BASE_URL_WITHOUT_API } from "../constants/api";

export const resolveBookCoverUrl = (name, bookId) =>
         `${BASE_URL_WITHOUT_API}/public/images/library/covers/${bookId}/${name}`;

