import { StrengthType } from "./strength-level/types";

const getStrength = (pass: string): StrengthType => {
  let strength = 0;
  const strongRegex = new RegExp(
    "^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
    "g"
  );
  const mediumRegex = new RegExp(
    "^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
    "g"
  );
  const enoughRegex = new RegExp("(?=.{8,}).*", "g");

  if (strongRegex.test(pass)) {
    strength = 4;
  } else if (mediumRegex.test(pass)) {
    strength = 3;
  } else if (enoughRegex.test(pass)) {
    strength = 2;
  } else if (pass.length > 0) {
    strength = 1;
  }

  return strength as StrengthType;
};

export default getStrength;
