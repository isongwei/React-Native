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
    render() {
        return (
            <View style={{flex:1,alignItems: 'center',justifyContent: 'center',}}>

                <Com info={this.state.con}
                     info2={this.state.name2}
                />
                <Button
                    onPress={() => {
                        let aa = {}//this.state.con
                        aa.name = 'zhang'
                        aa.age = 26
                        this.setState({
                            con:aa,
                            name2:'www',
                        })
                    }}
                    title="+++++"

                />

                <Button
                    onPress={() => {
                        let aa = this.state.con

                        aa.name = 'li'
                        aa.age = 22
                        this.setState({
                            con:aa,
                            name2:'zzz',
                        })
                    }}
                    title="---"
                />
                <Button
                    onPress={() => {
                        let cc = {}

                        cc.name = "li"
                        cc.age = 22
                        cc.sex = 1
                        this.setState({
                            con:cc,
                            name2:'www',
                        })
                    }}
                    title="+++++"
                />
                <PureCom info={this.state.con}
                         info2={this.state.name2}
                />

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


class PureCom extends PureComponent{
    constructor(props){
        super(props)
        console.log(JSON.stringify(this.props))
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











