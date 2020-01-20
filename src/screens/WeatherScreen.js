import React, { Component } from 'react'
import { Text, View, ScrollView} from 'react-native'
//my components
import ImageBack from './components/ImageBack'
import ButtonCity from './components/ButtonCity'
import Card from './components/Card'
import Form from './Form'
//key api weather
const key = "13962ff312e85111e6b8e750d1c66783"
export default class WeatherScreen extends Component {
    state = {
        city: '',
        cities: [],
        lat: "",
        lon: "",
    }
    getCities = (city) => {
        fetch(`http://autocomplete.wunderground.com/aq?query=${city}`) /// las ```  sirven para agregar variables en el texto   
            .then(data => data.json())
            .then(cities => {
                this.setState({ cities: cities.RESULTS })
                // console.log(this.state.cities)
            }).catch(error=> console.log(error))
    }
    getWeather = city => {
        const { lat, lon, name } = city
        this.setState({
            city: name,
            lat: lat,
            lon: lon
        })

        // console.log(this.state.city)
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
            .then(data => data.json())
            .then(weather => {
                console.log(weather)
                const { humidity, temp } = weather.main;
                this.setState({
                    humidity,
                    temp,
                    weather: weather.weather[0].main,
                    description:weather.weather[0].description,
                })
            }).catch(error=> console.log(error))
    };
    render() {
        return (
            <ScrollView>
            <ImageBack weather={this.state.weather} >
                <Form
                    onChangeText={(city) => {
                        this.getCities(city)
                    }}
                    data={this.state.cities}
                    renderItem={({ item }) => (
                        <ButtonCity
                            city={item.name}
                            onPress={() => this.getWeather(item)}
                        />
                    )}
                />
                <View >
                    <Card 
                    temp={this.state.temp} 
                    humidity={this.state.humidity} 
                    description={this.state.description}
                    city={this.state.city}
                    />
                </View>
            </ImageBack>
            </ScrollView>
        )
    }
}
