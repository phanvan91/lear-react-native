import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


class FixedDimension extends React.Component{
    render () {
        return (
            <View style={ style.container }>
                <View style={ style.firstView }/>
                <View style={style.secondView}/>
                <View style={style.thirdView}/>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {

    },
    firstView : {
        width : 50,
        height : 50,
        backgroundColor : 'blue'
    },
    secondView : {
        width : 100,
        height : 100,
        backgroundColor : 'green'
    },
    thirdView : {
        width : 200,
        height : 200,
        backgroundColor : 'red'
    }

})

export default FixedDimension