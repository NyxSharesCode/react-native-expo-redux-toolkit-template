import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NativeTemplate = () => {
    return (
        <View style={styles.component}>
            <Text>This is a template for a React Native component.</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    component: { }
});

export default NativeTemplate;