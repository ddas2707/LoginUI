import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            <Image source={require('../assets/nerd.png')} style={{ height: 50, width: 50 }} />
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 16 }}>Welcome,</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>UserName</Text>
                </View>
                <Image source={require('../assets/notification.png')} style={{ height: 30, width: 30, tintColor: 'white' }} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})