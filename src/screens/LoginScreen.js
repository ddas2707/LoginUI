import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Firebase'



const LoginScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [name, setName] = useState('')

    const handleSubmit = async () => {
        if (email && password) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (err) {
                console.log('got error', err.message)
            }
        }
    }
    return (
        <SafeAreaView style={{ flex: 3, backgroundColor: '#836FFF' }}>
            <View style={{ flex: 1.4, display: 'flex', flexDirection: 'column' }}>
                <View style={styles.icons}>
                    <LottieView style={{ height: 350 }} source={require('../assets/Login.json')} autoPlay loop />
                </View>
                <View style={styles.back}>
                    <TouchableOpacity style={styles.back2} onPress={() => navigation.navigate('Welcome')}>
                        <AntDesign name="arrowleft" color="black" size={30} />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flex: 2, backgroundColor: '#fff', borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                <Text style={{ paddingHorizontal: 70, paddingTop: 30, color: 'black', fontSize: 16 }}>Email Address</Text>
                <TextInput
                    style={styles.email}
                    placeholder='Eg.John@gmail.com'
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
                <Text style={{ paddingHorizontal: 70, paddingTop: 30, color: 'black', fontSize: 16 }}>Password</Text>
                <TextInput
                    style={styles.password}
                    placeholder='Eg.123456'
                    value={password}
                    onChangeText={value => setPassword(value)}
                />
                <TouchableOpacity><Text style={{ color: 'black', marginTop: 10, paddingRight: 60, alignSelf: 'flex-end', margin: 24 }}>Forgot Password ?</Text></TouchableOpacity>
                <View>
                    <TouchableOpacity style={styles.login} onPress={handleSubmit}>
                        <Text style={{ color: 'black', fontSize: 17, fontWeight: 700 }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.or}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 700 }}>OR</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: 15 }}>
                    <TouchableOpacity style={{ backgroundColor: '#F5F5F5', padding: 10, display: 'flex', alignSelf: 'center', borderRadius: 12 }}>
                        <Image source={require('../assets/google.png')} style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#F5F5F5', padding: 10, display: 'flex', alignSelf: 'center', borderRadius: 12 }}>
                        <Image source={require('../assets/facebook.png')} style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#F5F5F5', padding: 10, display: 'flex', alignSelf: 'center', borderRadius: 12 }}>
                        <Image source={require('../assets/apple-logo.png')} style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 18, fontWeight: '600' }}>Dont have an Account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: '#FFD700', textAlign: 'center', fontSize: 18, fontWeight: '600' }} > SignUp</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    back: {
        display: 'flex',
        flexDirection: 'row',
        //backgroundColor: 'yellow',
    },
    back2: {
        marginVertical: 30,
        marginHorizontal: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#FFD700',
        padding: 5,

    },
    icons: {
        background: 'red',
        height: 400,
        aspectRatio: 1,
        position: 'absolute',

    },
    email: {
        backgroundColor: '#F5F5F5',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 15,
        color: 'black',


    },
    password: {
        backgroundColor: '#F5F5F5',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 15,
        color: 'black',
    },
    login: {
        backgroundColor: '#FFD700',
        width: '75%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 40,
        borderRadius: 15
    },
    or: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }


})