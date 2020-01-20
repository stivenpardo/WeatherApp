import React from 'react'
import { Text, View, StyleSheet, ImageBackground, } from 'react-native'
import Rain from '../../../assets/img/rain.jpg'
import Cloudy from '../../../assets/img/cloudy.jpg'
import Clear from '../../../assets/img/clear-day.jpg'
import Winter from '../../../assets/img/winter.jpg'
import Germany from '../../../assets/img/germany.jpg'
import Berlín from '../../../assets/img/berlín.jpg'
import Fog from '../../../assets/img/fog.jpg'
import Moto from '../../../assets/img/Moto-plane.jpg'
import Haze from '../../../assets/img/haze.jpg'



export default function ImageBack(props) {

    getImage = (weather) => {
        switch (weather) {
            case 'Rain':
                return Rain;
            case 'Clouds':
                return Cloudy;
            case 'Clear':
                return Clear;
            case 'snow':
                return Winter;
            case 'Fog':
                return Fog;
            case 'Haze':
                return Haze;
                default:
                return Moto
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
