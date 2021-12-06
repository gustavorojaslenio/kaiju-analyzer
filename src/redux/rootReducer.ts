import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import { kaijuDNAReducer } from "./kaijuDNA";
import { AppReducer } from "./App";

export const rootReducer = () => combineReducers({ app: AppReducer, kaijuDNA: kaijuDNAReducer });

export type ApplicationState = StateType<ReturnType<typeof rootReducer>>;
