import { Reducer } from "redux";
import { SET_CURRENT_TAB } from "./appTypes";
import { ActionType } from "typesafe-actions";
import * as appActions from "./appActions";

const initialState = {
	tab: 0,
};

type AppAction = ActionType<typeof appActions>;

export type AppState = {
	tab: number;
};

export const AppReducer: Reducer<AppState, AppAction> = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_CURRENT_TAB:
			return { ...state, tab: payload };
		default:
			return state;
	}
};
