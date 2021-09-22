const separator = '-';

export const pagelist = (page: number, total: number, display: number) => {
  let left = page - Math.floor((display - 1) / 2);
  let right = page + Math.ceil((display - 1) / 2);

  if (left < 1) {
    const offset = 1 - left;
    right = Math.min(right + offset, total);
    left = 1;
  }

  if (right > total) {
    const offset = right - total;
    left = Math.max(left - offset, 1);
    right = total;
  }

  const result = [];

  if (left === 1) {
    result.push(...range(left, page - 1));
  } else {
    result.push(1, separator, ...range(left + 2, page - 1));
  }

  result.push(page);

  if (right === total) {
    result.push(...range(page + 1, right));
  } else {
    result.push(...range(page + 1, right - 2), separator, total);
  }

  return result;
};

const range = (a: number, b: number) => {
  const result = [];
  while (a <= b) {
    result.push(a++);
  }
  return result;
};
