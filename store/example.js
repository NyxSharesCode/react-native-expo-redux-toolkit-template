import { createSlice } from '@reduxjs/toolkit';

/* 
? To update state properties, 
   ? add an action creator as a property inside the reducers object [specifies what will be updated],
   ? then add a reducer function as the property's value [specifies how it will be updated]
! state can be directly mutated inside the reducer function, but it will give an error UNLESS the state is explicitly returned  
*/

const example = createSlice({
    name: 'example',
    initialState: {
        counter: 0,
    },
    reducers: {
        incrementCounterByOne: state => { state.counter += 1 },
        decrementCounterByOne: state => { state.counter -= 1 }
    }
});

/* 
* It is custom to export ...
   * actions either as an actions object or using object destructuring,
   * the reducer as a default export
*/

export const { 
    incrementCounterByOne, 
    decrementCounterByOne 
} = example.actions;

export default example.reducer;