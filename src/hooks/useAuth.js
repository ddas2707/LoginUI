import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/Firebase'

const useAuth = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            console.log('user got', user)
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
        return unsub;
    }, [])
    return { user }
}

export default useAuth

const styles = StyleSheet.create({})