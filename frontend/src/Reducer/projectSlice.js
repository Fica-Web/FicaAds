import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects : [],  // store all the project details
    selectedProject: null,  // store the currently selected project to view
};

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers:{
        setProjects:(state, action) => {
            state.projects = action.payload;  //set the list of projects
        },
        selectedProject: (state, action) =>{
            state.selectedProject = state.projects.find(
                (project) => project.id === action.payload
            ); // finds and selects a projects based on its ID
        },
    },
});

export const {setProjects, selectedProject} = projectSlice.actions;
export default projectSlice.reducer;