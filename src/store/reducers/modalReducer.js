import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
};

const modalReducer = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalState : (state = initialState, action) => {
            state.isOpen = !state.isOpen;
        }
    },
});

export const { setModalState } = modalReducer.actions;
export default modalReducer.reducer;