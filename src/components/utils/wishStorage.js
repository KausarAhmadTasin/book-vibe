const getStoredWishList = () => {
  const wishLIst = localStorage.getItem("wish-list");
  if (wishLIst) {
    return JSON.parse(wishLIst);
  }
  return [];
};

const addToWishList = (id) => {
  const storedWishList = getStoredWishList();
  const bookExists = storedWishList.find((book_id) => book_id === id);
  if (!bookExists) {
    storedWishList.push(id);
    localStorage.setItem("wish-list", JSON.stringify(storedWishList));
  }
};

export { addToWishList, getStoredWishList };
