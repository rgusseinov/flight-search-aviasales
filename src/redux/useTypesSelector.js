import { useSelector, TypedUseSelectorHook } from "react-redux";
import { rootState } from "./reducers/index";

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector;
