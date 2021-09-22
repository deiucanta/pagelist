import { pagelist } from '../src';

const data = [
  {
    input: [1, 1, 10],
    output: [1],
  },
  {
    input: [1, 10, 10],
    output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    input: [2, 10, 10],
    output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    input: [1, 1000, 10],
    output: [1, 2, 3, 4, 5, 6, 7, 8, '-', 1000],
  },
  {
    input: [5, 1000, 10],
    output: [1, 2, 3, 4, 5, 6, 7, 8, '-', 1000],
  },
  {
    input: [6, 1000, 10],
    output: [1, '-', 4, 5, 6, 7, 8, 9, '-', 1000],
  },
  {
    input: [500, 1000, 7],
    output: [1, '-', 499, 500, 501, '-', 1000],
  },
  {
    input: [1000, 1000, 7],
    output: [1, '-', 996, 997, 998, 999, 1000],
  },
  {
    input: [995, 1000, 7],
    output: [1, '-', 994, 995, 996, '-', 1000],
  },
];

describe('pagelist', () => {
  data.forEach(({ input, output }) => {
    test(`pagelist(${input.join(', ')})`, () => {
      const result = pagelist(input[0], input[1], input[2]);
      expect(result).toEqual(output);
      expect(result.length).toBe(Math.min(input[1], input[2]));
    });
  });
});
