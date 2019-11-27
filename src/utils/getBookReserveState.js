import { RESERVE_STATE } from "../constants/bookState";

export const getBookReserveState = (data) => {
  if(!data.reservations || !data.reservations.length)
    return (data.availableinstances && data.availableinstances.length) ? RESERVE_STATE.AVAILABLE : RESERVE_STATE.UNAVAILABLE;
  return RESERVE_STATE.RESERVED;
};