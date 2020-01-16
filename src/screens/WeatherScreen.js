import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import ImageBack from './components/ImageBack'

export default class WeatherScreen extends Component {
    state = {

    }
    render() {
        return (
            <ImageBack weather="Clear" >
                <View style={styles.formContainer}>
                    <Text>¿Comó esta el clima en?</Text>
                    <TextInput
                        placeholder='Dijite la ciudad'
                        style={styles.input}
                    />
                </View>
            </ImageBack>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: '#33333344',
        borderRadius: 20,
        width: '100%',
        marginVertical: 10,
        padding:10,
    }
})
