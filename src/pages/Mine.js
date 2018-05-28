/**
 * desc：
 * author：zhangsongwei
 * date：
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button
} from 'react-native';

import store from '../store/index'

import {connect} from 'react-redux'

@connect((state,ss)=>{
    console.log(JSON.stringify(ss))
    return {ssss:state.loginIn}
})

export default class Mine extends Component {

    static navigationOptions={
        title: '我的',//设置标题内容
    }



    constructor(props){
        super(props)

        this.ssss = this.props.ssss


    }





    render() {
        return (
            <View>


                <Button
                    onPress={() => {

                        console.log('store.getState====='+JSON.stringify(store.getState()))
                        console.log('ssss====='+JSON.stringify(this.props))

                    }}
                    title="打印store"/>

                <Button
                    onPress={() => {
                        console.log('this.props.ssss==='+JSON.stringify(this.props.ssss))
                        console.log('this.ssss==='+JSON.stringify(this.ssss))
                        console.log('===============')
                        this.ssss = "sss"
                        console.log('this.props.ssss==='+JSON.stringify(this.props.ssss))
                        console.log('this.ssss==='+JSON.stringify(this.ssss))
                    }}
                    title="修改props"/>
            </View>
        );
    }
}