import { Reducer } from "redux";
import {
  SET_KAIJU_DNA,
  SET_KAIJU_DNA_ERROR,
  CREATE_KAIJU_ERROR,
  GET_KAIJUS_SUCCESS
} from "./kaijuDNATypes";
import { ActionType } from "typesafe-actions";
import * as kaijuActions from "./kaijuDNAActions";
import { KaijuData } from "../../Api/KaijuCRUDService";

const initialState = {
  dna: "",
  hasError: false,
  kaijus: [],
  getKaijusError: false,
  createKaijuError: false
};

type KaijuAction = ActionType<typeof kaijuActions>;

export type KaijuState = {
  dna: string;
  hasError: boolean;
  kaijus: KaijuData[];
  getKaijusError: boolean;
  createKaijuError: boolean;
};

export const kaijuDNAReducer: Reducer<KaijuState, KaijuAction> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_KAIJU_DNA:
      return { ...state, dna: payload };
    case SET_KAIJU_DNA_ERROR:
      return { ...state, hasError: payload };
    case GET_KAIJUS_SUCCESS:
      return { ...state, kaijus: payload };
    case CREATE_KAIJU_ERROR:
      return { ...state, createKaijuError: payload };
    default:
      return state;
  }
};
