import { BCCharacteristic } from "@/redux/features/characteristics/consts";
import { arrayOfNonStringValues } from "@/tests/consts";
import { getCharacteristicRepresentation } from "../helpers";

describe("Characteristic Representation", () => {
  // * #TEST: ARRANGE
  const testCases = [
    {
      input: BCCharacteristic.WeaponSkill,
      expected: "WS",
    },
    {
      input: BCCharacteristic.Strength,
      expected: "Str",
    },
    {
      input: "",
      expected: "",
    },
  ];

  testCases.forEach((test) => {
    it(`if input string is: ${test.input} should correctly translate it to: ${test.expected}`, () => {
      // * #TEST: ACT
      const result = getCharacteristicRepresentation(test.input);
      // * #TEST: ASSERT
      expect(result).toEqual(test.expected);
    });
  });

  // * #TEST: ARRANGE
  arrayOfNonStringValues.forEach((test) => {
    it("if input is not a string should throw error", () => {
      expect(() => {
        // * #TEST: ACT
        getCharacteristicRepresentation(test as any);
        // * #TEST: ASSERT
      }).toThrow();
    });
  });
});
