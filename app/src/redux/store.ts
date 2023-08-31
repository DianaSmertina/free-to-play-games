import {
    combineReducers,
    configureStore,
    PreloadedState,
} from "@reduxjs/toolkit";
import { freeToPlayApi } from "./freeToPlayApi";
import paramsReducer from './paramsSlice';
import pageReducer from './pageSlice';

const rootReducer = combineReducers({
    activeParams: paramsReducer,
    page: pageReducer,
    [freeToPlayApi.reducerPath]: freeToPlayApi.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(freeToPlayApi.middleware),
        preloadedState,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];