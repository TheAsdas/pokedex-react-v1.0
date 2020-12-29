import { IAction } from "../../interfaces/IAction";
import { types } from "../types/types";

export interface IFilterState {
  filter: string;
}

const initialState = {
  filter: ""
} as IFilterState;

export const filterReducer = (
  state = initialState,
  action: IAction
): IFilterState => {
  switch (action.type) {
    case types.filterDefine:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};
