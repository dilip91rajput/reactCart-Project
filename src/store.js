import { configureStore } from '@reduxjs/toolkit'
import countReducer from './store/reducers/countReducer';
import modalReducer from './store/reducers/modalReducer';
import couponReducer from './store/reducers/couponReducer';

export const store = configureStore({
    reducer: { 
        counter: countReducer,
        modal: modalReducer,
        coupon: couponReducer
    },
});