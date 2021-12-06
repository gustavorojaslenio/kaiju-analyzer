import { Reducer } from "redux";
import { SET_KAIJU_DNA, SET_KAIJU_DNA_ERROR } from "./kaijuDNATypes";
import { ActionType } from "typesafe-actions";
import * as kaijuActions from "./kaijuDNAActions";

const initialState = {
	dna: "",
	hasError: false,
};

type KaijuAction = ActionType<typeof kaijuActions>;

export type KaijuState = {
	dna: string;
	hasError: boolean;
};

export const kaijuDNAReducer: Reducer<KaijuState, KaijuAction> = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_KAIJU_DNA:
			return { ...state, dna: payload };
		case SET_KAIJU_DNA_ERROR:
			return { ...state, hasError: payload };
		default:
			return state;
	}
};
