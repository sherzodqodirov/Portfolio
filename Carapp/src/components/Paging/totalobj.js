
export const totalobj = (total) => {
  let resuld;
  if (total % 6 === 0) {
    resuld = Math.floor(total / 6);
  } else {
    resuld = Math.floor(total / 6) + 1;
  }
  return resuld
};
