import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Animated,
	Easing
} from 'react-native';


export default class CusProgressBar extends Component {

	static defaultProps = {
		//进度条颜色
		progressColor: 'white',
		//buffer进度条颜色
		bufferColor: 'red',
		//进度条动画时长
		progressAniDuration: 100,
		//buffer动画时长
		bufferAniDuration: 100
	}


	constructor(props) {
		super(props);
		this._progressAni = new Animated.Value(0)
        this._bufferAni = new Animated.Value(0)
	}


    componentWillReceiveProps(nextProps) {

	    this._progress = nextProps.progress
        this._buffer = nextProps.buffer

    }

	render(){
        return(<View style={[styles.container,this.props.style]}
                     onLayout={this._onlayout.bind(this)}>
            <Animated.View
            ref = "progress"
            style={{
                position:'absolute',
                width:this._progressAni,
                backgroundColor:this.props.progressColor,
                borderRadius:10
            }}
            />
            <Animated.View
                ref = "buffer"
                style={{
                    position:'absolute',
                    width:this._bufferAni,
                    backgroundColor:this.props.bufferColor,
                    borderRadius:18
                }}
            />
        </View>)
    }

    _onlayout({nativeEvent:{layout:{width,height}}}){
	    //防止多次调用
        if(width > 0 && this.totalWidth !== width){
            //获取progress 控件
            let progress = this._getProgress()
            //获取
            let buffer =  this._getBuffer()
            //获取父布局宽度
            this.totalWidth = width;
            //给progress控件设置高度
            progress.setNativeProps({
                style:{
                    height:height
                }
            })
            //buffer 控件设置高度
            buffer.setNativeProps({
                style:{
                    height:height
                }
            })

            //开始执行进度条动画
            this._startAniProgress(this.progress)
            this._startAniBuffer(this.buffer)


        }


    }

    _startAniProgress(progress){
	    if(this.progress >= 0 && this.totalWidth !== 0){
	        Animated.timing(this._progressAni,{
	            toValue:buffer * this.totalWidth,
                duration:this.props.bufferAniDuration,
            }).start()
        }
    }

    _getProgress(){
        if(typeof  this.refs.progress.refs.node !== 'undefine'){
            return this.refs.progress.refs.node;
        }{
            return this.refs.progress._component;
        }
    }

    _getBuffer(){
        if(typeof  this.refs.buffer.refs.node !== 'undefine'){
            return this.refs.buffer.refs.node;
        }{
            return this.refs.buffer._component;
        }
    }




}

Object.defineProperty(CusProgress.prototype,'progress',{

    set(value){

        if(value >= 0&& this._progress !== value){
            this._progress = value
            this._startAniProgress(value)
        }
    },

    get(){
        return this._progress;
    },
    enumerable:true,
})

Object.defineProperties(CusProgress.prototype,'buffer',{

    set (value){
        if(value >= 0 && this._buffer!== value){
            this._buffer = value
            this._startAniBuffer(value)
        }
    },
    get(){
        return this._buffer;
    },
    enumerable:true,
})


const styles = StyleSheet.create({

	container: {
		height: 4,
		backgroundColor: 'blue'
	}


})