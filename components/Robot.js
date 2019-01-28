import React from 'react'
import { Image } from 'react-native'

class Robot extends React.Component{
    render(){
        let ImageSource  = {
            uri : `https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/200px-HONDA_ASIMO.jpg`
        }
        return (
            <Image
                source={ ImageSource }
                style={ {width : 200, height : 200} }
            />
        )
    }
}

export default Robot