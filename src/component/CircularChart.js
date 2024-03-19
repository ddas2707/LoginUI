import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PieChart from 'react-native-pie-chart';

const CircularChart = () => {
    const widthAndHeight = 150;
    const [values, setValues] = useState([1, 2, 3])
    const [sliceColor, setSliceColor] = useState(['#FF5733', '#33FF57', '#3366FF'])
    return (
        <View>
            <Text>CircularChart</Text>
            <PieChart
                widthAndHeight={widthAndHeight}
                series={values}
                sliceColor={sliceColor}
                coverRadius={0.45}
                coverFill={'#FFF'}
            />
        </View>
    )
}

export default CircularChart

const styles = StyleSheet.create({})