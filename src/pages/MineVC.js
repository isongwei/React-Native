import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
export default class MineVC extends Component {

    static navigationOptions = {
        headerTitle: '我的',
        tabBarLabel: '我的',
        tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
