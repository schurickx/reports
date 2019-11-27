import { every, isEmpty } from "lodash";

export const objectValuesNonEmpty = object => {
  return every(object, isBlank);
};

//isEmpty для любых цифр возвращает true, пришлось такую штуку дописать

const isBlank = object => {
  switch (typeof object) {
    case "boolean":
      return false;
    case "number":
      return isNaN(object) || object === null;
    case "string":
      return object !== "";
    default:
      return isEmpty(object);
  }
};
