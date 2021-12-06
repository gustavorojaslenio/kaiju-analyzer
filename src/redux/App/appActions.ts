import { SET_CURRENT_TAB } from "./appTypes";

export const setCurrentTab = (tab: number) => ({
	type: SET_CURRENT_TAB,
	payload: tab,
});
