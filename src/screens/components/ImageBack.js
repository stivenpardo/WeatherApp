import React from 'react'
import { Text, View, StyleSheet, ImageBackground, } from 'react-native'
import Rain from '../../../assets/img/rain.jpg'
import Cloudy from '../../../assets/img/cloudy.jpg'
import Clear from '../../../assets/img/clear-day.jpg'
import Winter from '../../../assets/img/winter.jpg'
import Germany from '../../../assets/img/germany.jpg'
import Berlín from '../../../assets/img/berlín.jpg'
import Fog from '../../../assets/img/fog.jpg'

export default function ImageBack(props) {

    getImage = (weather) => {
        switch (weather) {
            case 'Rain':
                return Rain;
                break;
            case 'Clouds':
                return Cloudy;
                break;
            case 'Clear':
                return Clear;
                break;
            case 'snow':
                return Winter;
                break;
            case 'Fog':
                return Fog;
                break;
            default:
                return Berlín
                break;
        }
    }
    return (

        <ImageBackground source={getImage(props.weather)} style={styles.container}>
            {props.children}
        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
