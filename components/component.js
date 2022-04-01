import React from "react";
import { StyleSheet, Text } from "react-native";
import Tabuada from './tabuada'

export default function component(props) {
    return (
        <>
            <Text style={styles.title}>Testezinho de componentes, fé com fé!</Text>
        </>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        color: '#f24fcb',
        margin: '2%',
        textAlign: "center"
    },
    p: {
        fontSize: 15,
        color: '#2324ab',
    }
    
})