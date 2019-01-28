import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class FlexExample extends React.Component{
    render() {
        return (
            <View style={ style.container }>
                <Text style={ style.firstView }> </Text>
                <Text style={ style.secondView }> </Text>
                <Text style={ style.thirdView }> </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection : 'row'
    },
    firstView : {
        //width : 50,
        flex : 20,
        height : 90,
        backgroundColor: 'skyblue'
    },
    secondView : {
        flex : 30,
        // width : 50,
        height : 50,
        backgroundColor: 'powderblue'
    },
    thirdView : {
        flex : 50,
        // width : 50,
        height : 50,
        backgroundColor : 'red'
    }
})


export default FlexExample


