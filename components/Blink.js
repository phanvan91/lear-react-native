import React from 'react'
import {Text , View} from 'react-native'

class TextBlink extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showText : true
        }

        var taskToDo = () => {
            this.setState(previousState => {
                return{
                    showText: !previousState.showText
                }
            })
        }

        var TimeToBlink = 1000;

        setInterval(taskToDo,TimeToBlink);
    }

    render(){
        let textToDisplay = this.state.showText ? this.props.inputText : 'tat roi'
        return(
            <Text> {textToDisplay} </Text>
        )
    }
}

class Blink extends React.Component{
    render(){
        return(
            <View>
                <TextBlink
                    inputText={'bat len'}
                />
            </View>
        )
    }
}

export default Blink