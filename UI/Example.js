import React from 'react';
import { View, Text, Button } from 'react-native';

/*
? To access - or SELECT - Redux state properties, react-redux' useSelector hook is used
? To dispatch Redux actions, react-redux' useDispatch hook is used 
*/

import { useSelector, useDispatch } from 'react-redux';         

/*
* import ABOVE can be copy/pasted as is (unless only one the hooks is required for your component)
! import BELOW only demonstrates how to import actions, so copy/paste with caution
*/

import { incrementCounterByOne, decrementCounterByOne } from '../store/example';

const Example = () => {

    const dispatch = useDispatch();

    /*
    * variable declaration ABOVE can and should be copy/pasted as is
    ! variable declaration BELOW only demonstrates how to select the correct state, so copy/paste with caution
    */

    const { counter } = useSelector(state => state.example);

    //? To dispatch a Redux action, CALL the action function inside the dispatch function (wrap inside fat arrow function to only call action on specific trigger)

    return (
        <View style={{alignItems: 'center', justifyContent: 'space-around', height: 250}} >
            <Text>Example Redux Toolkit Flow</Text>
            <Button onPress={() => dispatch(incrementCounterByOne())} title="+" />
            <Text>{counter}</Text>
            <Button onPress={() => dispatch(decrementCounterByOne())} title="-" />
        </View>
    )
};

export default Example;