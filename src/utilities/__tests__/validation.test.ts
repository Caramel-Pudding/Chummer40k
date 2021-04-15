import { arrayOfNonNumericValues } from "@/tests/consts";
import { validateMin, validateMax, validateMinMax } from "../validation";

describe("Min Validation", () => {
  // * #TEST: ARRANGE
  const minValidationTestCases = [
    { newValue: 100, expected: 100 },
    { newValue: 0, expected: 0 },
    { newValue: -100, expected: 0 },
    { newValue: 100, minimalValue: 50, expected: 100 },
    { newValue: -100, minimalValue: 50, expected: 50 },
    { newValue: -100, minimalValue: -50, expected: -50 },
  ];

  minValidationTestCases.forEach((testCase) => {
    it(`if new value is ${testCase.newValue} with mimimum of ${
      testCase.minimalValue || "undefined"
    } should return ${testCase.expected}`, () => {
      // * #TEST: ACT
      const result = validateMin({ ...testCase });
      // * #TEST: ASSERT
      expect(result).toBe(testCase.expected);
    });
  });

  // * #TEST: ARRANGE
  arrayOfNonNumericValues.forEach((value) => {
    it("if input is not a number should throw error", () => {
      expect(() => {
        // * #TEST: ACT
        validateMin({ newValue: value as number });
        // * #TEST: ASSERT
      }).toThrow();
    });
  });

  // * #TEST: ARRANGE
  arrayOfNonNumericValues
    .filter((value) => typeof value !== "undefined")
    .forEach((value) => {
      it("if minimum is not a number should throw error", () => {
        expect(() => {
          // * #TEST: ACT
          validateMin({ newValue: 0, minimalValue: value as number });
          // * #TEST: ASSERT
        }).toThrow();
      });
    });
});

describe("Max Validation", () => {
  // * #TEST: ARRANGE
  const maxValidationTestCases = [
    { newValue: 0, maximalValue: 100, expected: 0 },
    { newValue: 100, maximalValue: 100, expected: 100 },
    { newValue: -100, maximalValue: 100, expected: -100 },
    { newValue: 100, maximalValue: 50, expected: 50 },
  ];

  maxValidationTestCases.forEach((testCase) => {
    it(`if new value is ${testCase.newValue} with maximum of ${testCase.maximalValue} should return ${testCase.expected}`, () => {
      // * #TEST: ACT
      const result = validateMax({ ...testCase });
      // * #TEST: ASSERT
      expect(result).toBe(testCase.expected);
    });
  });

  // * #TEST: ARRANGE
  arrayOfNonNumericValues.forEach((value) => {
    it("if input is not a number should throw error", () => {
      expect(() => {
        // * #TEST: ACT
        validateMax({ newValue: value as number, maximalValue: 0 });
        // * #TEST: ASSERT
      }).toThrow();
    });
  });

  // * #TEST: ARRANGE
  arrayOfNonNumericValues.forEach((value) => {
    it("if maximum is not a number should throw error", () => {
      expect(() => {
        // * #TEST: ACT
        validateMax({ newValue: 0, maximalValue: value as number });
        // * #TEST: ASSERT
      }).toThrow();
    });
  });
});

describe("MinMax Validation", () => {
  // * #TEST: ARRANGE
  const minMaxValidationTestCases = [
    { newValue: 0, maximalValue: 100, expected: 0 },
    { newValue: 100, maximalValue: 100, expected: 100 },
    { newValue: -100, maximalValue: 100, expected: 0 },
    { newValue: 100, maximalValue: 50, expected: 50 },
    { newValue: 100, minimalValue: 50, maximalValue: 100, expected: 100 },
    { newValue: -100, minimalValue: 50, maximalValue: 100, expected: 50 },
    { newValue: -100, minimalValue: -100, maximalValue: 100, expected: -100 },
  ];

  minMaxValidationTestCases.forEach((testCase) => {
    it(`if new value is ${testCase.newValue} with minimum of ${
      testCase.minimalValue || "undefined"
    } maximum of ${testCase.maximalValue} should return ${
      testCase.expected
    }`, () => {
      // * #TEST: ACT
      const result = validateMinMax({ ...testCase });
      // * #TEST: ASSERT
      expect(result).toBe(testCase.expected);
    });
  });

  // * #TEST: ARRANGE
  arrayOfNonNumericValues.forEach((value) => {
    it("if input is not a number should throw error", () => {
      expect(() => {
        // * #TEST: ACT
        validateMinMax({ newValue: value as number, maximalValue: 0 });
        // * #TEST: ASSERT
      }).toThrow();
    });
  });

  // * #TEST: ARRANGE
  arrayOfNonNumericValues
    .filter((value) => typeof value !== "undefined")
    .forEach((value) => {
      it("if minimum is not a number should throw error", () => {
        expect(() => {
          // * #TEST: ACT
          validateMinMax({
            newValue: 0,
            minimalValue: value as number,
            maximalValue: 0,
          });
          // * #TEST: ASSERT
        }).toThrow();
      });
    });

  // * #TEST: ARRANGE
  arrayOfNonNumericValues.forEach((value) => {
    it("if maximum is not a number should throw error", () => {
      expect(() => {
        // * #TEST: ACT
        validateMinMax({ newValue: 0, maximalValue: value as number });
        // * #TEST: ASSERT
      }).toThrow();
    });
  });
});
