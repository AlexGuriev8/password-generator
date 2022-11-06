export type StrengthType = 1 | 2 | 3 | 4;

export interface LevelProps {
  level: StrengthType;
}

export enum Colors {
  TO_WEAK = "#f74b4b",
  WEAK = "#fb7a56",
  MEDIUM = "#f8cb63",
  STRONG = "#a3ffae",
  WHITE = "#fff",
}
