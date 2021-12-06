import { regexNumberAndLetters } from "../constants";

export const validateKaijuDNA = (dna: string): boolean => {
  if (!dna) return false;
  console.log(regexNumberAndLetters.test(dna));
  if (regexNumberAndLetters.test(dna)) {
    return true;
  }
  return false;
};
