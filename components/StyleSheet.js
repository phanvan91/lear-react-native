import React from 'react'

import {View,Text,StyleSheet as Style} from 'react-native'

class StyleSheet extends React.Component{
    render(){
        return(
            <View style={ style.container }>
                <Text style={style.textFirst}>
                    First Line
                </Text>
            </View>
        )
    }
}

const style = Style.create({
    container : {
        marginTop: 20,
        backgroundColor : 'green'
    },
    textFirst : {
        color : 'red',
        margin : 5,
        fontWeight: '800'
    }
})

export default StyleSheet