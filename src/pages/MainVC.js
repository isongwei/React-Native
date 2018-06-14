import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
export default class MainVC extends Component {
    static navigationOptions = {

        headerTitle: '首页',//对页面的配置
        tabBarLabel: '首页',
        tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
                                  onPress={() => navigate('DetailVC', { title: '详情',des:'我是返回点击我' })} >
                    <Text>点击进详情页</Text>
                </TouchableOpacity>
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
