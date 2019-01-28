import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


class FlexDimension extends React.Component{
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
        flex: 1,
        backgroundColor: 'steelblue'
    },
    firstView : {
        flex: 30,
        backgroundColor: 'skyblue'
    },
    secondView : {
        flex : 70,
        backgroundColor: 'powderblue'
    },
    thirdView : {
        height : 200,
        backgroundColor : 'red'
    }

})

export default FlexDimension