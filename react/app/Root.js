import React, {
	Component
} from 'react';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
} from 'react-native';

export default class Root extends Component {
	render() {
		return (
			<View style={{
				backgroundColor: '#FFF',
				flex:1, 
				alignItems:'center', 
				justifyContent:'center'
			}}>
        <Text style = {{color: 'red'}}> test  </Text>
      </View>
		);
	}
}