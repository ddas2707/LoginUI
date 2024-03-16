import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';


const WelcomScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <SafeAreaView style={styles.container}>

                <View style={styles.heading}>
                    <Text style={styles.text}>Let's Get Started!</Text>
                </View >
                <View style={styles.animation}>
                    <LottieView style={{ height: 415, paddingTop: 0 }} source={require('../assets/Animation - 1710432076745.json')} autoPlay loop />
                    <View style={styles.sbutton}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.Sign}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontWeight: '700', fontSize: 16 }}>Already Have an Account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={{ color: 'yellow', fontWeight: '700', fontSize: 16 }}> Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>



            </SafeAreaView>

        </>
    )
}

export default WelcomScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#836FFF',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    heading: {
        display: 'flex',
        flex: 0.3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        //backgroundColor: 'blue',
    },
    text: {
        fontSize: 35,
        fontWeight: '700'
    },
    animation: {
        height: 400,
        aspectRatio: 0.65,
        flex: 1,
        justifyContent: 'center'
        //backgroundColor: 'yellow'
    },
    sbutton: {
        //backgroundColor: 'red',
        flex: 0.3,
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'yellow',
        width: '75%',
        height: '70%',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    Sign: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700'
    }
})