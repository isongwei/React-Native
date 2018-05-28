
import {
	AppRegistry
} from 'react-native';
import SimpleApp from './src/container/App';
import Root from  './src/Root'

console.disableYellowBox = true;

AppRegistry.registerComponent('test', () => Root);