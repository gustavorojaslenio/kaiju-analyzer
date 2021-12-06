import { Dispatch } from "redux";
import KaijuCRUDService, { GetKaijuTypeApi } from "../../Api/KaijuCRUDService";
import {
  SET_KAIJU_DNA,
  SET_KAIJU_DNA_ERROR,
  GET_KAIJUS_REQUESTED,
  GET_KAIJUS_SUCCESS,
  GET_KAIJUS_ERROR,
  CREATE_KAIJU_ERROR
} from "./kaijuDNATypes";

export const setKaijuDNAValue = (kaiju: string) => ({
  type: SET_KAIJU_DNA,
  payload: kaiju
});

export const setKaijuDNAError = (kaiju: boolean) => ({
  type: SET_KAIJU_DNA_ERROR,
  payload: kaiju
});

export const createKaijuDNA = (dna: string) => async (dispatch: Dispatch) => {
  try {
    await KaijuCRUDService.post({
      dna
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: CREATE_KAIJU_ERROR,
      payload: true
    });
  }
};

export const getKaijus = (type?: GetKaijuTypeApi) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: GET_KAIJUS_REQUESTED });
    const res = await KaijuCRUDService.get(type);
    dispatch({
      type: GET_KAIJUS_SUCCESS,
      payload: res.data.kaijuTypePercentages
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: GET_KAIJUS_ERROR,
      payload: true
    });
  }
};
