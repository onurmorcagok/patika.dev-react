export const getRandomElement = (arr) => {
  const randomItem = arr[Math.floor(Math.random() * arr.length)];
  return randomItem;
};

export const findTotal = (arr, item) => {
  const targetItems = arr.filter((arrItem) => {
    return arrItem === item;
  });
  return targetItems.length;
};
