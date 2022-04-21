import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './reducers/categoriesSlice';
import productsReducer from './reducers/productsSlice';
import stockReducer from './reducers/stockSlice';


const rootReducer = combineReducers({
    categoriesReducer,
    productsReducer,
    stockReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']