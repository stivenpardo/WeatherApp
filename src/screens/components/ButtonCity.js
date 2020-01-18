import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function ButtonCity(props) {

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={{ fontSize: 15, fontStyle: "italic" }}>{props.city}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#096c82',
        borderRadius: 20,
        margin: 5,
        alignItems: "center",
        padding: 5
    }
})