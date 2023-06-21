import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    discount: '',
};

const couponReducer = createSlice({
    name: 'coupon',
    initialState,
})
export const { setModalState } = couponReducer.actions;
export default couponReducer.reducer;