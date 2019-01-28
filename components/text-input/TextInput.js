import React from 'react'

import {Text , View, TextInput as InputText, StyleSheet} from 'react-native'

class TextInput extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            text :'',
            password :''
        }
    }

    onChangeText = (e) => {
        this.setState({
             text : e
        })
    }

    onChangePassword = (e) => {
        this.setState({
            password : e
        })
    }

    render(){
        return(
            <View>
                <InputText
                   style={ style.styleInput }
                   keyboardType={'email-address'}
                   placeholder={'this is email'}
                   placeholderTextColor={'red'}
                   onChangeText={this.onChangeText}
                   value={this.state.text}
                />

                <InputText
                    style={ style.styleInput }
                    keyboardType={'default'}
                    secureTextEntry={true}
                    placeholder={'this is password'}
                    placeholderTextColor={'red'}
                    onChangeText={this.onChangePassword}
                    value={this.state.password}
                />

                <InputText
                    style={style.styleMulti}
                    multiline={true}
                    borderBottomColor='green'
                    borderBottomWith={3}
                    numberOfLines = {4}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    styleInput : {
        height : 40,
        borderColor : 'gray',
        borderWidth: 1,
        margin : 20
    },
    styleMulti : {
        height : 100,
        margin : 20,
        borderWidth: 1,
        borderColor : 'gray',
        padding:10
    }
})

export default TextInput
