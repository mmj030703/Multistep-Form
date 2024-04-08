import { createSlice } from "@reduxjs/toolkit";

const multistepFormSlice = createSlice({
    name: 'multistepFormSlice',
    initialState: {
        formData: {},
        optionSelected: false
    },
    reducers: {
        updateFormData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload }
        },
        updateOptionSelected: (state, action) => {
            state.optionSelected = action.payload;
        }
    }
});

export const { updateFormData, updateOptionSelected } = multistepFormSlice.actions;

export default multistepFormSlice.reducer;