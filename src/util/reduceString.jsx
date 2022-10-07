export const reduceString = (value, maxLength) => {
  if (value.length > maxLength) {
    return value.slice(0, maxLength) + "...";
  } else {
    return value;
  }
};
