import { isString } from "../type-guards";
import { abbreviate } from "../strings";

describe("Abbreviate", () => {
  it("if input is string should return string", () => {
    const result = isString(abbreviate(""));
    expect(result).toBe(true);
  });

  // VALID TEST DATA
  const validTestCases = [
    {
      input: "Death to The False Emperor",
      expected: "DTTFE",
    },
    {
      input: "death to the false emperor",
      expected: "DTTFE",
    },
    {
      input: "Death     to The False Emperor",
      expected: "DTTFE",
    },
    {
      input: "DeathtoTheFalseEmperor",
      expected: "D",
    },
    {
      input: "Death to 1he False Emperor",
      expected: "DT1FE",
    },
    {
      input: "",
      expected: "",
    },
  ];

  validTestCases.forEach((test) => {
    it(`if input string is: ${test.input} should correctly abbreviate it to: ${test.expected}`, () => {
      const result = abbreviate(test.input);
      expect(result).toEqual(test.expected);
    });
  });

  // INVALID TEST DATA
  const invalidTestCases = [null, undefined, 0, {}, {}, true];
  invalidTestCases.forEach((test) => {
    it("if input is not string should throw error", () => {
      expect(() => {
        abbreviate(test as any);
      }).toThrow();
    });
  });
});
