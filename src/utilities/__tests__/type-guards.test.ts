import { arrayOfAllBasicTypes } from "@/tests/consts";
import { isString, isNumber } from "../type-guards";

const testPrimitiveTypeGuard = (
  typeGuard: (value: any) => boolean,
  type: "string" | "number"
) => {
  arrayOfAllBasicTypes.forEach((testValue) => {
    // * #TEST: ARRANGE
    const isCorrectType = typeof testValue === type;

    it(`if input input type is: ${typeof testValue} should return: ${String(
      isCorrectType
    )}`, () => {
      // * #TEST: ACT
      const result = typeGuard(testValue);
      // * #TEST: ASSERT
      expect(result).toEqual(isCorrectType);
    });
  });
};

describe("isString", () => {
  testPrimitiveTypeGuard(isString, "string");
});

describe("isNumber", () => {
  testPrimitiveTypeGuard(isNumber, "number");
});
