import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { 
    Entypo, 
    FontAwesome,
    MaterialIcons 
} from '@expo/vector-icons'

export default function Card(props) {
    return (
       
        <View style={styles.container}>
            <View style={[styles.setection]}>
                <View style={{ flexDirection: "row"}}>
                    <View style={{alignItems:"center"}}>
                        <MaterialIcons name="location-city" size={70} color="white" />
                        <Text style={{ color: "white" }}>Ciudad</Text>
                    </View>
                    <View style={{ justifyContent:"center", marginLeft:40}}>
                        <Text style={styles.textPrediction}>{props.city}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.setection]}>
                <View style={{ flexDirection: "row"}}>
                    <View style={{alignItems:"center"}}>
                        <Entypo name="icloud" size={70} color="white" />
                        <Text style={{ color: "white" }}>Humidity</Text>
                    </View>
                    <View style={{ justifyContent:"center", marginLeft:40}}>
                        <Text style={styles.textPrediction}>{props.humidity}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.setection]}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{alignItems:"center"}}>
                        <FontAwesome name="thermometer-2" size={70} color="white" />
                        <Text style={{ color: "white" }}>Temperatura</Text>
                    </View>
                    <View style={{ justifyContent:"center", marginLeft:40}}>
                        <Text style={styles.textPrediction} >{props.temp}</Text>
                    </View>
                </View>
            </View >
            <View style={[styles.setection]}>
                <View style={{ flexDirection: "row" }} >
                    <View style={{alignItems:"center"}}>
                        <Entypo name="water" size={70} color="white" />
                        <Text style={{ color: "white" }}>Descripción</Text>
                    </View>
                    <View style={{ justifyContent:"center", marginLeft:40}}>
                        <Text style={styles.textPrediction } > {props.description}</Text>
                    </View>
                </View>
            </View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 450,
        backgroundColor: '#666666aa',
        padding: 20,
        borderRadius: 20,
        justifyContent: "center",
        marginLeft: 10
    },
    setection: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    textPrediction: {
        alignItems:"flex-end",
        fontSize: 18,    
    }

})