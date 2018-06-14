import React,{Component,PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,

} from 'react-native';




export default class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            con:{name:'li',age:13},
            name2:'sss'

        }
    }

    shouldComponentUpdate(nextProps,nextState) {

        console.log('State' + JSON.stringify(this.state))
        console.log('nextState' + JSON.stringify(nextState))


        if(nextState.name2 == 'zzz'){
            return false
        }
        return true
    }


    render() {
        return (
            <View style={{flex:1,alignItems: 'center',justifyContent: 'center',}}>

                <Button
                    onPress={() => {
                        this.setState({
                            name2:'zzz',
                        })
                    }}
                    title="zzz"
                />
                <Button
                    onPress={() => {
                        this.setState({
                            name2:'sss',
                        })
                    }}
                    title="sss"
                />
                <Button
                    onPress={() => {
                        this.setState({
                            name2:'www',
                        })
                    }}
                    title="www"
                />
                <PureCom info={this.state.name2}/>
            </View>
        )
    }
}




class Com extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{flex:1,alignItems: 'center',justifyContent: 'center',}}>
                <Text>
                    name:{this.props.info.name}
                    age:{this.props.info.age}
                </Text>
                <Text>
                    name2:{this.props.info2}
                </Text>

            </View>
        )
    }
}


class PureCom extends  Component{



    render(){
        return(
            <View style={{flex:1,alignItems: 'center',justifyContent: 'center',}}>
                <Text>
                    namesss:{this.props.info}
                </Text>
            </View>

        )
    }
}











