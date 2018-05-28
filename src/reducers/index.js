'use strict'
import {
	combineReducers
} from 'redux';
import loginIn from './loginReducer';


const rootReducer = combineReducers({

	loginIn: loginIn,
});


export default rootReducer; //导出作为唯一入口