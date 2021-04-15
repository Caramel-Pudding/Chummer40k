import { arrayOfNonStringValues } from "@/tests/consts";
import { isString } from "../type-guards";
import { abbreviate } from "../strings";

describe("Abbreviate", () => {
  it("if input is string should return string", () => {
    // * #TEST: ARRANGE
    const input = "";
    // * #TEST: ACT
    const result = isString(abbreviate(input));
    // * #TEST: ASSERT
    expect(result).toBe(true);
  });

  // * #TEST: ARRANGE
  const testCases = [
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

  // * #TEST: ARRANGE
  testCases.forEach((test) => {
    it(`if input string is: ${test.input} should correctly abbreviate it to: ${test.expected}`, () => {
      // * #TEST: ACT
      const result = abbreviate(test.input);
      // * #TEST: ASSERT
      expect(result).toEqual(test.expected);
    });
  });

  // * #TEST: ARRANGE
  arrayOfNonStringValues.forEach((test) => {
    it("if input is not a string should throw error", () => {
      expect(() => {
        // * #TEST: ACT
        abbreviate(test as any);
        // * #TEST: ASSERT
      }).toThrow();
    });
  });
});
