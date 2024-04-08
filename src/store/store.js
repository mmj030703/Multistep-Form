import { configureStore } from "@reduxjs/toolkit";
import multiStepForm from "./slices/multiStepForm";

const store = configureStore({
    reducer: {
        'multiStepForm': multiStepForm
    }
});

export default store;