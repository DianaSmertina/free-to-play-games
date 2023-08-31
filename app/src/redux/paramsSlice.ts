import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IParamsGamesList } from "../types/types";

type SliceState = {
    activeParams: IParamsGamesList;
};
const initialState: SliceState = { activeParams: {} };

export const paramsSlice = createSlice({
    name: "Params",
    initialState,
    reducers: {
        setParams(state, action: PayloadAction<IParamsGamesList>) {
            state.activeParams = action.payload;
        },
    },
});

export const { setParams: setParams } = paramsSlice.actions;
export default paramsSlice.reducer;
