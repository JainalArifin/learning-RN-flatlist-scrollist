import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Planet extends Component{
    static navigationOptions = {
        title: 'Planet'
    }
    render (){
        return (
            <View>
                <Text>
                    Planet
                </Text>
            </View>
        )
    }
}