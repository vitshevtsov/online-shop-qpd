import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './reducers/categoriesSlice';
import productsReducer from './reducers/productsSlice';
import stockReducer from './reducers/stockSlice';
import cartReducer from './reducers/cartSlice';



const rootReducer = combineReducers({
    categoriesReducer,
    productsReducer,
    stockReducer,
    cartReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
