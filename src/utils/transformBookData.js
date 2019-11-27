export const transformBookData = (data) => {
  return {
    ...data,
    clients: data.clients.map(item => parseInt(item.id, 10)),
    authors: data.authors.map(item => parseInt(item.id, 10)),
    publishers: data.publishers.map(item => parseInt(item.id, 10)),
    pageNum: data.pageNum
  }
};


