import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,

} from 'react-native';

import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';



import MainVC from '../pages/MainVC';
import FindVC from '../pages/FindVC';
import ReleaseVC from '../pages/ReleaseVC';
import NewsVC from '../pages/NewsVC';
import MineVC from '../pages/MineVC';

import DetailVC from '../pages/DetailVC';



// 通过TabNavigator做路由映射
const MainScreentNavigator=TabNavigator({
    MainVC:{screen:MainVC},
    FindVC:{screen:FindVC},
    ReleaseVC:{screen:ReleaseVC},
    NewsVC:{screen:NewsVC},
    MineVC:{screen:MineVC},
});




//引入要用到的跳转页面
const  SimpleApp = StackNavigator({
    Main:{screen:MainScreentNavigator},
    DetailVC:{screen:DetailVC},
});






const  SimpleApp2 = StackNavigator({
    FindVC:{
        screen:FindVC,
    },
});

const  SimpleApp1 = TabNavigator({

    Main:SimpleApp2,
    MineVC:{screen:MineVC},

});



export default SimpleApp;