import { createSlice } from '@reduxjs/toolkit';

const example = createSlice({
    name: 'example',
    initialState: {
        counter: 0,
    },
    reducers: {
        incrementCounterByOne: state => { state.counter = state.counter + 1 },
        decrementCounterByOne: state => { state.counter = state.counter - 1 }
    }
});

export const { 
    incrementCounterByOne, 
    decrementCounterByOne 
} = example.actions;

export default example.reducer;