import React, {
	Component
} from 'react';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';



export default class Root extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};

		this.num = 1

		this.data = {
			name: 'asda',
			age: 4
		}
	}


	render() {
		return (
			<View style={{
				backgroundColor: '#FFF',
				flex:1, 
				alignItems:'center', 
				justifyContent:'center',
			}}>
			<TouchableOpacity 
			style={{
				height: 33,
				width: 33,
				backgroundColor: 'yellow'

			}}
			onPress = {
				()=>{
					this.num +=1
					// this.setState({
					// 	num2:this.state.num2+1
					// })
				}
			}>
			<Text style = {{color: 'red'}}> {this.num}  </Text>
			<Text style = {{color: 'red'}}> {this.state.num2}  </Text>
			<Text>{this.data.name}</Text>
				
			</TouchableOpacity>
		

        
      </View>
		);
	}
}


class Part extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<View style = {{
				backgroundColor: 'red',
				height: 30,
				width: 30
		}}>
				

			</View>
		)
	}
}