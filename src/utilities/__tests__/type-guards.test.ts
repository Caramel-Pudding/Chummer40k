import { isString } from "../type-guards";

describe("isString", () => {
  // TEST DATA
  const testCases = [
    {
      input: "",
      expected: true,
    },
    {
      input: null,
      expected: false,
    },
    {
      input: undefined,
      expected: false,
    },
    {
      input: 0,
      expected: false,
    },
    {
      input: {},
      expected: false,
    },
    {
      input: true,
      expected: false,
    },
  ];

  testCases.forEach((test) => {
    it(`if input input type is: ${typeof test.input} should correctly abbreviate it to: ${String(
      test.expected
    )}`, () => {
      const result = isString(test.input);
      expect(result).toEqual(test.expected);
    });
  });
});
