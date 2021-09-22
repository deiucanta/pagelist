const separator = '-';

export const pagelist = (current: number, total: number, display: number) => {
  let leftHalf = Math.floor((display - 1) / 2);
  let rightHalf = Math.ceil((display - 1) / 2);

  let left = current - leftHalf;
  let leftOffset = Math.max(1 - left, 0);

  let right = current + rightHalf;
  let rightOffset = Math.max(right - total, 0);

  left = Math.max(left - rightOffset, 1);
  right = Math.min(right + leftOffset, total);

  const result = [];

  if (left === 1) {
    result.push(...range(left, current - 1));
  } else {
    result.push(1, separator, ...range(left + 2, current - 1));
  }

  result.push(current);

  if (right === total) {
    result.push(...range(current + 1, right));
  } else {
    result.push(...range(current + 1, right - 2), separator, total);
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
