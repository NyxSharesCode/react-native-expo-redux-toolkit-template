import React from 'react';
import { View, Text, Button } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { incrementCounterByOne, decrementCounterByOne } from '../store/example';

const Example = () => {

    const dispatch = useDispatch();
    const { counter } = useSelector(state => state.example);

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