


import React,{Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';

import SimpleApp from './container/App'


const store = configureStore()


export default class Root extends Component{

    render(){
        console.log(JSON.stringify(store))
        return(
            <Provider store = {store}>
                <SimpleApp/>
            </Provider>
        )
    }

}


