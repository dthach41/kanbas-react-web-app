import { createSlice } from "@reduxjs/toolkit";
// import { modules } from "../../Database";


const initialState = {
    modules: [] as { _id: string, courseId: string, name: string, course: string, lessons: [] }[],
    module: { name: "New Module", description: "New Description"},
};




const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        
        addModule: (state, action) => {
            state.modules = [action.payload, ...state.modules];
        },

        deleteModule: (state, action) => {
            state.modules = state.modules.filter(
                (module) => module._id !== action.payload
            );
        },
        updateModule: (state, action) => {
            state.modules = state.modules.map((module) => {
                if (module._id === action.payload._id) {
                    return action.payload;
                } else {
                    return module;
                }
            });
        },
        setModule: (state, action) => {
            state.module = action.payload;
        },

        setModules: (state, action) => {
            state.modules = action.payload;
        },
    },
});


export const { addModule, deleteModule,
    updateModule, setModule, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;