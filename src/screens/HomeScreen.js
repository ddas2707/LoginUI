import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../config/Firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import PieChart from 'react-native-pie-chart'
import * as Progress from 'react-native-progress';



const HomeScreen = () => {

    const [task, setTask] = useState([1, 3, 3])
    const [sliceColor, setSliceColor] = useState(['#FF5733', '#33FF57', '#3366FF'])

    const handleLogout = async () => {
        await signOut(auth)
    }
    const widthAndHeight = 140;
    return (
        <>
            <TouchableOpacity onPress={handleLogout}>
                <Text>log</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
                <View style={{ flex: 0.3, backgroundColor: '#387ADF', borderRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 30 }}>
                    <Image source={require('../assets/notification.png')} style={{ height: 25, width: 25, tintColor: 'white' }} />
                    <Text style={{ fontWeight: '900', padding: 16, fontSize: 18, color: '#fff' }}>Weekly Progress</Text>
                    <Text style={{ textAlign: 'center', paddingHorizontal: 40, lineHeight: 25, color: '#fff', paddingBottom: 10 }}>It looks like you are on track ,Please continue to follow your Daily Plan</Text>
                </View>
                <View style={{ flex: 0.7, backgroundColor: '#EEEEEE', borderTopLeftRadius: 40, borderTopRightRadius: 40, padding: 30, }}>
                    <View style={styles.header}>
                        <Text style={{ color: '#35374B', fontSize: 22, fontWeight: 'bold' }}>Daily Report</Text>
                        <Image source={require('../assets/notification.png')} style={{ height: 25, width: 25 }} />
                    </View>
                    <View style={styles.chart}>
                        <View style={{ flex: 1, padding: 20 }}>
                            {/* PieChart vala part */}

                            <PieChart
                                widthAndHeight={widthAndHeight}
                                series={task}
                                sliceColor={sliceColor}
                                coverRadius={0.5}
                                coverFill={'#FFF'}
                            />

                        </View>
                        {/* this is the daily tasks list */}
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: 'black', paddingVertical: 30, fontSize: 18, fontWeight: '700' }}>Daily Tasks</Text>
                            {task.map((taskItem, index) => (
                                <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ height: 10, width: 10, backgroundColor: sliceColor[index], marginRight: 5 }} />
                                    <Text style={{ color: 'black' }}>Task {index}</Text>
                                </View>
                            ))}

                        </View>
                    </View>
                    <View style={styles.line}>
                        <Text style={{ color: 'black' }}>30/100</Text>
                        <Progress.Bar progress={0.3} width={200} />
                    </View>
                </View>
            </View>


        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chart: {
        backgroundColor: '#ffffff',
        height: 200,
        marginTop: 20,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row'
    },
    line: {
        backgroundColor: '#ffffff',
        height: 80,
        marginTop: 20,
        borderRadius: 15,
        padding: 20
    }
})