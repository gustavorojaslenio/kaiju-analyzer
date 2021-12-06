import { SET_KAIJU_DNA, SET_KAIJU_DNA_ERROR } from "./kaijuDNATypes";

export const setKaijuDNAValue = (kaiju: string) => ({
  type: SET_KAIJU_DNA,
  payload: kaiju
});

export const setKaijuDNAError = (kaiju: boolean) => ({
  type: SET_KAIJU_DNA_ERROR,
  payload: kaiju
});
