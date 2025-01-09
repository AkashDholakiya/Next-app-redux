import { configureStore, createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name : 'counter',
    initialState : { counter : 0 },
    reducers : {
        increment(state, action ){
            state.counter += 1;
        },
        decrement(state, action ){
            state.counter -= 1;
        },
        addBy(state, action){
            state.counter += action.payload;
        }
    },
})

export const actions = counter.actions

const store = configureStore({
    reducer : counter.reducer
})

export default store;