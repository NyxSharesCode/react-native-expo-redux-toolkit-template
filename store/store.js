import { configureStore } from '@reduxjs/toolkit';    

import example from './example';     

/* 
   TODO: replace example reducer ABOVE with your own reducer files,

   TODO: replace reducer BELOW with reducers imported above
   * multiple reducers can be listed within the reducer object below, but they MUST be seperated by a comma
*/

const store = configureStore({
    reducer: {
        example: example,                   
    }
});

export default store;