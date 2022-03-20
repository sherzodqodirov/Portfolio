export const convertPrice = (price) => {
  const option = {
    style: "currency",
    currency: "UZS",
  };
  return new Intl.NumberFormat(navigator.language,option).format(price);
};
