import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules
} from 'react-native';
import CodePush from 'react-native-code-push';




export default class MainVC extends Component {

  constructor(props) {
    super(props)
  }

  static navigationOptions = {

    headerTitle: '首页', //对页面的配置
    tabBarLabel: '首页',
    tabBarIcon: <View style={{height:30,width:30,backgroundColor:'red'}}></View>
  };


    componentWillMount() {
        // CodePush.disallowRestart();//禁止重启
        // this.syncImmediate(); //开始检查更新
    }
    componentDidMount() {
        // CodePush.allowRestart();//在加载完了，允许重启
    }

    // syncImmediate() {
    //     CodePush.sync( {
    //             //安装模式
    //             //ON_NEXT_RESUME 下次恢复到前台时
    //             //ON_NEXT_RESTART 下一次重启时
    //             //IMMEDIATE 马上更新
    //             installMode : CodePush.InstallMode.IMMEDIATE ,
    //             //对话框
    //             updateDialog : {
    //                 //是否显示更新描述
    //                 appendReleaseDescription : true ,
    //                 //更新描述的前缀。 默认为"Description"
    //                 descriptionPrefix : "更新内容：" ,
    //                 //强制更新按钮文字，默认为continue
    //                 mandatoryContinueButtonLabel : "立即更新" ,
    //                 //强制更新时的信息. 默认为"An update is available that must be installed."
    //                 mandatoryUpdateMessage : "必须更新后才能使用" ,
    //                 //非强制更新时，按钮文字,默认为"ignore"
    //                 optionalIgnoreButtonLabel : '稍后' ,
    //                 //非强制更新时，确认按钮文字. 默认为"Install"
    //                 optionalInstallButtonLabel : '后台更新' ,
    //                 //非强制更新时，检查到更新的消息文本
    //                 optionalUpdateMessage : '有新版本了，是否更新？' ,
    //                 //Alert窗口的标题
    //                 title : '更新提示'
    //             }
    //         }
    //     );
    // }



  render() {
    const {
      navigate
    } = this.props.navigation;
    return (
      <View style={styles.container}>
                <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
                                  onPress={() =>{

                                      navigate('DetailVC', { title: '详情',des:'我是返回点击我' })
                                  }

                                  }>
                    <Text>点击进详情页</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
                                  onPress={() =>{


                                  }}>
                    <Text>点击进详情页</Text>
                </TouchableOpacity>
            </View>
    );
  }
}
// let codePushOptions = {
//     //设置检查更新的频率
//     //ON_APP_RESUME APP恢复到前台的时候
//     //ON_APP_START APP开启的时候
//     //MANUAL 手动检查
//     checkFrequency : CodePush.CheckFrequency.ON_APP_START
// };

// MainVC = CodePush(codePushOptions)(MainVC)
// export default  MainVC;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});