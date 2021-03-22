import { isString } from "../type-guards";
import { convertStringEnumToArrayOfNames } from "../arrays";

describe("convertStringEnumToArrayOfNames", () => {
  enum Primarch {
    LionElJonson = "Lion El'Jonson",
    Classified = "Classified",
    Fulgrim = "Fulgrim",
    Perturabo = "Perturabo",
    JaghataiKhan = "Jaghatai Khan",
    LemanRuss = "Leman Russ",
    RogalDorn = "Rogal Dorn",
    KonradCurze = "Konrad Curze",
    Sanguinius = "Sanguinius",
    FerrusManus = "Ferrus Manus",
    Unknown = "Unknown",
    Angron = "Angron",
    RobouteGuilliman = "Roboute Guilliman",
    Mortarion = "Mortarion",
    MagnusTheRed = "Magnus the Red",
    Horus = "Horus",
    Lorgar = "Lorgar",
    Vulkan = "Vulkan",
    AlphariusOmegon = "Alpharius Omegon",
  }

  it("if input is string enum should return array of string", () => {
    const result = convertStringEnumToArrayOfNames(Primarch).every((name) =>
      isString(name)
    );
    expect(result).toBe(true);
  });

  const testCases = [
    {
      input: Primarch,
      expected: [
        "Lion El'Jonson",
        "Classified",
        "Fulgrim",
        "Perturabo",
        "Jaghatai Khan",
        "Leman Russ",
        "Rogal Dorn",
        "Konrad Curze",
        "Sanguinius",
        "Ferrus Manus",
        "Unknown",
        "Angron",
        "Roboute Guilliman",
        "Mortarion",
        "Magnus the Red",
        "Horus",
        "Lorgar",
        "Vulkan",
        "Alpharius Omegon",
      ],
    },
  ];

  testCases.forEach((test) => {
    it(`if input is string enum should return correct array of names`, () => {
      const result = convertStringEnumToArrayOfNames(test.input);
      expect(result).toEqual(test.expected);
    });
  });
});
