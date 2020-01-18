import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {Entypo, FontAwesome} from '@expo/vector-icons'

export default function Card(props) {
    return (
        <View style={styles.container}>
            <View style={[styles.setection]}>
                <View style={[styles.setection, { justifyContent: "space-between", alignItems: "center" }]}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:15, marginLeft:20,marginRight:60}}>{props.humidity}</Text>
                        <Text style={{fontSize:15}}>{props.temp}</Text>
                    </View>
                    <Text style={{fontSize:15}} > {props.description}</Text>
                </View>
            </View>
            <View style={[styles.setection, {  justifyContent: "space-between", alignItems: "flex-end" }]}>
                <View> 
                    <Entypo name="icloud"size={70} color="white"/>
                    <Text style={{color:"white"}}>Humidity</Text>
                </View>
                <View style={{alignItems:"center"}}> 
                    <FontAwesome name="thermometer-2"size={70} color="white"/>
                    <Text style={{color:"white"}}>Temperatura</Text>
                </View>
                <View> 
                    <Entypo name="water"size={70} color="white"/>
                    <Text style={{color:"white"}}>Descripción</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
        backgroundColor:'#666666aa',
        padding: 20,
        borderRadius: 20,
        justifyContent: "center",
        marginLeft: 10
    },
    setection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

})