import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../config/Firebase'

const HomeScreen = () => {
    const handleLogout = async () => {
        await signOut(auth)
    }
    return (
        <View>
            <Text style={{ color: 'black' }}>HomeScreen</Text>
            <TouchableOpacity onPress={handleLogout}>
                <Text style={{ color: 'black' }}>LogOut</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})