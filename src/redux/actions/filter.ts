import { IAction } from "../../interfaces/IAction";
import { types } from "../types/types";

export const setFilter = (value = ""): IAction => ({
  type: types.filterDefine,
  payload: value
});
