
import React,{Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    Image
} from 'react-native';
export default class ModalView extends Component {


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            show:this.props.isShow
        };
      }


    onRequestClose() {
        this.setState({

        });
    }

    componentWillReceiveProps(nextProps) {

          this.setState({
              show:true
          })


    }

    render() {
        return (
            <Modal
                animationType='fade'           // 从底部滑入
                transparent={true}             // 不透明
                visible={this.state.show}    // 根据isModal决定是否显示
                onRequestClose={() => {this.onRequestClose()}}  // android必须实现
            >
                <View style={styles.container}>
                    {/* 关闭页面 */}
                    <View style={{flex:1,margin:30,backgroundColor:'red'}}>
                        <View style={styles.imageView}>
                            <Image
                            style={styles.image}
                            source={require('../res/update.png')}
                            resizeMode = 'stretch'/>
                        </View>

                        <Text style={{backgroundColor:'#0000'}}>das</Text>

                        <TouchableOpacity
                            style={{flex:1,backgroundColor:'#ddd'}}
                            onPress={()=>{
                            this.setState({
                                show:false
                            })
                        }}>

                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0003',
    },
    imageView:{

        position:'absolute',
        width:140,
        height:80,

    },
    image:{

        flex:1,
        width:null,
        height:null,
        // justifyContent:'center',
        // alignItems:'center',

        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        //resizeMode:Image.resizeMode.contain,
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)',
    }
});