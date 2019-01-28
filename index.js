/** @format */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
//import HelloWord from './components/HelloWorld'
// import Robot from './components/Robot'
// import MutipleCreating from './components/MutipleCreating'
// import Blink from './components/Blink'

// import StyleSheet from './components/StyleSheet'
// import FixedDimension from './components/width-height-flex/FixedDimension'
// import FlexDimension from './components/width-height-flex/FlexDimension'

// import FlexExample from './components/width-height-flex/FlexExample'

//import JustyfyContentExample from './components/width-height-flex/JustifyContentExample'

// import TextInput from './components/text-input/TextInput'


import App from './components/touchs-and-gestures/App'
AppRegistry.registerComponent(appName, () => App);
