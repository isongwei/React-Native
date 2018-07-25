import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NativeModules
} from 'react-native';

export default class MainVC extends Component {



    constructor(props){
        super(props)
    }

    static navigationOptions = {

        headerTitle: '首页',//对页面的配置
        tabBarLabel: '首页',
        tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>
    };



     _fun (value) {
         value("zzz");
         return (value2) => next=> acton=>  {
             console.log(value2 );
             console.log(next(acton));

        }
    }

    _fun2(value){
         console.log(value);
         return "finish";
    }


    //回调测试
    subscribe(type, alias) {

        this.types = []
        let index = this.types.findIndex((item) => {
            return item.k === type;
        });

        return function (call) {
            if (index === -1) {
                this.types.push({
                    k: type, n: alias, call: call
                });
            } else {
                this.types[index] = {k: type, n: alias, call: call}
            }

            return function (err) {
                if (index === -1) {
                    this.types.push({
                        k: type, n: alias, call: call, err: err
                    });
                } else {
                    this.types[index] = {k: type, n: alias, call: call, err: err}
                }
            }

        }
    }







    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
                                  onPress={() =>{

                                      this.subscribe("WWW", 'loginInfo')((res) => {
                                          if (res ) {
                                              console.log(res)
                                          }
                                      });

                                      return;

                                      this._fun(this._fun2)("sss")(this._fun2)("www")

                                      // navigate('DetailVC', { title: '详情',des:'我是返回点击我' })
                                      const  ss = NativeModules.RNMainViewController;
                                      ss.name("点击按钮")
                                  }



                                  }>
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
