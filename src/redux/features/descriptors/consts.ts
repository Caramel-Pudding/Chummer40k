export enum Race {
  Human = "Human",
  ChaosSpaceMarine = "Chaos Space Marine",
}

export enum HumanArchetype {
  Apostate = "Apostate",
  Heretek = "Heretek",
  Renegade = "Renegade",
  Psyker = "Psyker",
  QSalMagisterImmaterial = "Q'Sal Magister Immaterial",
  IdolitrexMagosofForgePolix = "Idolitrex Magos of Forge Polix",
  XuruntFrostFather = "Xurunt Frost Father",
  ChemHunterOfMessia = "Chem-Hunter of Messia",
  PiratePrinceoftheRaggedHelix = "Pirate Prince of the Ragged Helix",
  FleshShaperOfMelancholia = "Flesh Shaper of Melancholia",
  WrithingWorldSorcererKing = "Writhing World Sorcerer-King",
  DeathPriestOfMire = "Death Priest of Mire",
  Plaguemeister = "Plaguemeister",
}

export enum CSMArchetype {
  Champion = "Champion",
  Chosen = "Chosen",
  Forsaken = "Forsaken",
  Sorcerer = "Sorcerer",
  ThousandSonsSorcerer = "Thousand Sons Sorcerer",
  AlphaLegionMarine = "Alpha Legion Marine",
  KhorneBerserker = "Khorne Berserker",
  NightLordsChaosMarine = "Night Lords Chaos Marine",
  NoiseMarine = "Noise Marine",
  DarkApostle = "Dark Apostle",
  PlagueMarine = "Plague Marine",
  Warpsmith = "Warpsmith",
  VeteranOfTheLongWar = "Veteran of the Long War",
}

export type Archetype = HumanArchetype | CSMArchetype;

export enum Pride {
  Beauty = "Beauty",
  Charm = "Charm",
  Craftsmanship = "Craftsmanship",
  Devotion = "Devotion",
  Fortitude = "Fortitude",
  Foresight = "Foresight",
  Logic = "Logic",
  MartialProwess = "Martial Prowess",
  Grace = "Grace",
  Wealth = "Wealth",
}

export enum Disgrace {
  Betrayal = "Betrayal",
  Deceit = "Deceit",
  Dread = "Dread",
  Destruction = "Destruction",
  Gluttony = "Gluttony",
  Greed = "Greed",
  Hubris = "Hubris",
  Regret = "Regret",
  Waste = "Waste",
  Wrath = "Wrath",
}

export enum Motivation {
  Arcane = "Arcane",
  Ascendancy = "Ascendancy",
  Dominion = "Dominion",
  Immortality = "Immortality",
  Innovation = "Innovation",
  Legacy = "Legacy",
  Nihilism = "Nihilism",
  Perfection = "Perfection",
  Vengeance = "Vengeance",
  Violence = "Violence",
}

export enum Alignment {
  Unaligned = "Unaligned",
  Slaanesh = "Slaanesh",
  Nurgle = "Nurgle",
  Khorne = "Khorne",
  Tzeentch = "Tzeentch",
  Outcast = "???",
}

export type DescriptorsUnion =
  | Race
  | Archetype
  | Pride
  | Disgrace
  | Motivation
  | Alignment;
