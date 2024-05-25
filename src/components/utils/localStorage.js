const getStoredBookList = () => {
  const storedBookList = localStorage.getItem("read-list");
  if (storedBookList) {
    return JSON.parse(storedBookList);
  }
  return [];
};

const addToReadList = (id) => {
  const storedBookList = getStoredBookList();
  const bookExists = storedBookList.find((book_id) => book_id === id);
  if (!bookExists) {
    storedBookList.push(id);
    localStorage.setItem("read-list", JSON.stringify(storedBookList));
  }
};

export { addToReadList, getStoredBookList };
