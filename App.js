import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomScreen from './screens/WelcomScreen'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './navigation/AppNavigation'

export default function App() {
  return (
    <>
      <AppNavigation />
    </>

  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    height: '100%'
  },
  text: {
    color: 'black'
  }
})