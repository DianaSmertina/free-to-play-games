import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "Page",
    initialState: {
        page: 1,
    },
    reducers: {
        setPage(state, action: { payload: number; type: string }) {
            state.page = action.payload;
        },
    },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
