import { configureStore } from '@reduxjs/toolkit';    

import example from './example';     

/* 
   ! REPLACE example reducer ABOVE with your own reducer files,

   ! REPLACE reducer BELOW with reducers imported above
   * multiple reducers can be listed within the reducer object below, but they MUST be seperated by a comma
*/

const store = configureStore({
    reducer: {
        example: example,                   
    }
});

export default store;