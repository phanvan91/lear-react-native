import React from 'react'
import {Text ,View} from 'react-native'


class Creating extends React.Component{
    render(){
        return(
            <Text> Hello {this.props.name} </Text>
        )
    }
}


class MutipleCreating extends React.Component {
    render(){
        return(
            <View
                style={ {alignItems: 'center'} }
            >
                <Creating name={'Nguyen Van Phan'}/>
            </View>
        )
    }
}

export default MutipleCreating