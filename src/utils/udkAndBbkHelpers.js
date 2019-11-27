export const addToList = (list, id, newData) => {
  if (id === 0) {
    return [...list, ...newData];
  }
  const item = findInList(list, id);
  if (item)
    item.subList = [...newData];
  return list;
};

export const collapseList = (list, id) => {
  const item = findInList(list, id);
  if (item)
    item.subList = null;
  return list;
};

const findInList = (list, id) => {
  let result = list.find(item => item.id === id);
  if (!result) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].subList) {
        result = findInList(list[i].subList, id);
        if (result) {
          return result;
        }
      }
    }
  }
  return result;
};