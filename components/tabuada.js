import React from "react";
import { StyleSheet, Text } from "react-native";

export default function component(props) {
    let texto = [];
    for(let x = 0; x <= 10; x++){
        texto.push(
            <Text>{props.num} * {x} = {props.num*x}</Text>
        );
    }
    return (
        <>
        <Text style={styles.numero}>{texto}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    numero: {
        fontSize: 25
    }
})