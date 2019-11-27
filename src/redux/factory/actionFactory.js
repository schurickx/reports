import { START, SUCCESS,ERROR } from '../../constants/action-postfix'

export const createActions = (prefix, actionType) => {
  return {
    [`${prefix}RequestStart`]: payload => ({
      type: `${actionType}${START}`,
      payload
    }),
    [`${prefix}RequestSuccess`]: payload => {
      return {
        type: `${actionType}${SUCCESS}`,
        payload
      };
    },
    [`${prefix}RequestError`]: payload => {
      return {
        type: `${actionType}${ERROR}`,
        payload
      };
    }
  };
};

export const createActionWithPayload = type => payload => ({
  type,
  payload
});