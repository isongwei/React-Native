/**
 * desc：
 * author：zhangsongwei
 * date：
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';


import {createStore} from 'redux'



//官网demo
import *as types from '../actions/actions'
import store from '../store/index'


export default class MainPage  extends Component {

    constructor(props) {
        super(props)//继承属性




        this.store = createStore(this.count1);
        this.store.subscribe(this.listener1)




        store.subscribe(
            ()=>{
                console.log(store.getState())
            }
        )


        console.log('mainpage.state===='+this.state)

    }

    count1(state = 0,action){
        switch(action.type){
            case'add':
                return state+1
            case 'reducer':
                return state-1
            default:
                return state
        }
    }

    listener1 = () => {
        currentValue = this.store.getState();
        console.log('当前值:', currentValue)
        console.log(JSON.stringify(this.props.store))
    }



    /**************************/


    static navigationOptions={
        title: '主页',//设置标题内容
        header:{
            backTitle: 'sss ',
        }
    }


    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <Text style={{padding:10}}>Hello, Navigation!</Text>



                <Button
                    style={{backgroundColor:'green'}}
                onPress={() => {
                    navigate('LoginPage')
                }}
                title="点击跳转"/>
                <Button
                    onPress={() => {
                        currentValue = this.store.getState();
                        console.log('上一个值:', currentValue)
                        this.store.dispatch({type:"add"});
                        console.log('=================')
                    }}
                    title="+++++"/>
                <Button
                    onPress={() => {
                        currentValue = this.store.getState();
                        console.log('上一个值:', currentValue)
                        this.store.dispatch({type:"reducer"});
                        console.log('=================')
                    }}
                    title="-----"/>



                <View>

                    <Button
                        onPress={() => {
                            store.dispatch(types.addTodo('Learn about actions'))

                        }}
                        title="addTodo"/>
                    <Button
                        onPress={() => {
                            store.dispatch(types.toggleTodo(2))

                        }}
                        title="toggleTodo"/>
                    <Button
                        onPress={() => {
                            store.dispatch(types.setVisibilityFilter(types.VisibilityFilters.SHOW_COMPLETED))

                        }}
                        title="setVisibilityFilter"/>




                </View>

            </View>
        );
    }
}




const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#666',
        alignItems:'center',
        justifyContent:'center',
    }
})