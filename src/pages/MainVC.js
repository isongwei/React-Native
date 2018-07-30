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
// const key = 'yBuw1HwYaRFTDCrCc_roHRTfg5UW64db34c3-9931-4b86-8104-001a2ebb4b64';
const key = 'q8ODH3dKbywnzVkS8mCvineZ9XJs64db34c3-9931-4b86-8104-001a2ebb4b64';


export default class MainVC extends Component {

  constructor(props) {
    super(props)

    this.state = {
      des: ''
    }

  }

  static navigationOptions = {

    headerTitle: '首页', //对页面的配置
    tabBarLabel: '首页',
    tabBarIcon: <View style={{height:30,width:30,backgroundColor:'red'}}></View>
  };


  componentWillMount() {
    CodePush.disallowRestart(); //禁止重启

  }
  componentDidMount() {
    CodePush.allowRestart(); //在加载完了，允许重启
  }
  syncImmediate1() {
    this.setState({
      des: '~~~~~~'
    })

    CodePush.checkForUpdate(key).then((update) => {
      console.log('-------' + JSON.stringify(update))
      if (!update) {
        console.log('已是最新版本！')
        this.setState({
          des: '已是最新版本！'
        })
      } else {
        this.setState({
          des: JSON.stringify(update)

        })
        alert('有更新')
      }
    })
  }
  syncImmediate() {
    CodePush.sync({
      //安装模式
      //ON_NEXT_RESUME 下次恢复到前台时
      //ON_NEXT_RESTART 下一次重启时
      //IMMEDIATE 马上更新
      installMode: CodePush.InstallMode.IMMEDIATE,
      deploymentKey: key,
      //对话框
      updateDialog: {
        //是否显示更新描述
        appendReleaseDescription: true,
        //更新描述的前缀。 默认为"Description"
        descriptionPrefix: "更新内容：",
        //强制更新按钮文字，默认为continue
        mandatoryContinueButtonLabel: "立即更新",
        //强制更新时的信息. 默认为"An update is available that must be installed."
        mandatoryUpdateMessage: "必须更新后才能使用",
        //非强制更新时，按钮文字,默认为"ignore"
        optionalIgnoreButtonLabel: '稍后',
        //非强制更新时，确认按钮文字. 默认为"Install"
        optionalInstallButtonLabel: '后台更新',
        //非强制更新时，检查到更新的消息文本
        optionalUpdateMessage: '有新版本了，是否更新？',
        //Alert窗口的标题
        title: '更新提示'
      }
    });
  }



  render() {
    const {
      navigate
    } = this.props.navigation;
    return (
      <View style={styles.container}>
                <TouchableOpacity style={{height:40,backgroundColor:'orange',justifyContent: 'center',}}
                                  onPress={() =>{

                                      navigate('DetailVC', { title: '详情',des:'我是返回点击我' })
                                  }

                                  }>
                    <Text>点击进详情页</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:40,backgroundColor:'orange',justifyContent: 'center',marginTop:20}}
                                  onPress={() =>{
                      this.syncImmediate1();

                                  }}>
                    <Text>检查更新</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{height:40,backgroundColor:'orange',justifyContent: 'center',marginTop:20}}
                                  onPress={() =>{
                  this.syncImmediate(); //开始检查更新

                                  }}>
                    <Text>弹窗更新</Text>
                </TouchableOpacity>     
              <Text>
                des:{this.state.des}
              </Text>
   
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