import React from 'react'
import { Text, View, StyleSheet, ImageBackground, } from 'react-native'
import Rain from '../../../assets/img/rain.jpg'
import Cloudy from '../../../assets/img/cloudy.jpg'
import Clear from '../../../assets/img/clear-day.jpg'
import Winter from '../../../assets/img/winter.jpg'


export default function ImageBack(props) {
    
    getImage = (weather) =>{
        switch (weather) {
            case 'Rain':
                return Rain;
                break;
            case 'Cloudy':
                return Cloudy;
                break;
                case 'Clear':
                    return Clear;
                    break;             
            case 'Winter':
                return Winter;
                break;
            default:
                break;
        }
    }
    return (

        <ImageBackground source={getImage(props.weather)} style={styles.container}  >
            <Text>sdfas jghfuhgf</Text>
            {props.children}
        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})
