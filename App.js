import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>HomegdeScreen</Text>

    </View>
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