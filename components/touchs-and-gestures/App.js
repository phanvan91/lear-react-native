import React from 'react'

import {
    View,
    StyleSheet,
    Button,
    TouchableHighlight,
    // TouchableNativeFeedBack,
    // TouchableWithoutFeedback,
    // TouchableOpacity,
    Text
} from 'react-native'

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    onTouchButton = (e) => {
        console.log(e)
    }

    onPress = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    render(){
        return (
            <View style={ style.container }>
                {/*<Button*/}
                    {/*onPress={this.onTouchButton}*/}
                    {/*title={'This is a button'}*/}
                {/*/>*/}

                <TouchableHighlight
                    style={style.button}
                    onPress={this.onPress}
                >
                    <Text> Touch Here </Text>
                </TouchableHighlight>
                <View>
                    <Text> {this.state.count ? this.state.count : 0 } </Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10
    },
})


export default App