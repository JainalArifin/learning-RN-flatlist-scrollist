import React from 'react'
import { createStackNavigator } from 'react-navigation'

// screen
import HomeScreen from './screens/Home'
import PlanetScreen from './screens/Planet'

const routers = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Planet: {
    screen: PlanetScreen
  }
},{
  initialRouteName: 'Home'
})

export default routers