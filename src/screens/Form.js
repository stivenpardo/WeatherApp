import React from 'react'
import { Text, View, StyleSheet, TextInput, FlatList } from 'react-native'
import ButtonCity from './components/ButtonCity'

export default function Form(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontStyle: "italic" }}>¿Comó esta el clima en?</Text>
            <TextInput
                placeholder='Digite la ciudad'
                style={styles.input}
                onChangeText={props.onChangeText}
                // value={props.nameCity}
            />
            <FlatList
                horizontal
                keyExtractor={(item, index) => index.toString()}
                data={props.data}
                renderItem={props.renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#666666aa'

    },
    input: {
        backgroundColor: '#33333344',
        borderRadius: 20,
        width: '100%',
        marginVertical: 15,
        padding: 10,
        color: 'white',
        fontSize: 15,
        fontStyle: "italic"
    }
})