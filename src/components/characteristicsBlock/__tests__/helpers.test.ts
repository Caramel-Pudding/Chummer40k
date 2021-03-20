import { BCCharacteristic } from "@/redux/features/characteristics/consts";
import { arrayOfNonStringValues } from "@/tests/consts";
import { getCharacteristicRepresentation } from "../helpers";

describe("Characteristic Representation", () => {
  // VALID TEST DATA
  const validTestCases = [
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

  validTestCases.forEach((test) => {
    it(`if input string is: ${test.input} should correctly translate it to: ${test.expected}`, () => {
      const result = getCharacteristicRepresentation(test.input);
      expect(result).toEqual(test.expected);
    });
  });

  arrayOfNonStringValues.forEach((test) => {
    it("if input is not string should throw error", () => {
      expect(() => {
        getCharacteristicRepresentation(test as any);
      }).toThrow();
    });
  });
});
