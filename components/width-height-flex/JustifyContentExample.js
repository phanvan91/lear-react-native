import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

class JustifyContentExample extends React.Component{
    render(){
        return (
            <View style={ style.container }>
                <Text style={ style.firstView }> ABC </Text>
                <Text style={ style.secondView }> </Text>
                <Text style={ style.thirdView }> </Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : 'steelblue',
        flexDirection : 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'

    },
    firstView : {
        // width : 50,
        height : 50,
        backgroundColor: 'skyblue'
    },
    secondView : {
        // width : 50,
        height : 50,
        backgroundColor: 'powderblue'
    },
    thirdView : {
        // width : 50,
        height : 50,
        backgroundColor : 'red'
    }
})
export default JustifyContentExample