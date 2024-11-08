import { configureStore } from '@reduxjs/toolkit';
import projectReducer from "./Reducer/projectSlice"


const store = configureStore({
    reducer: {
        projects: projectReducer,
    },
});

export default store;