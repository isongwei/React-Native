'use strict'
import {createStore} from 'redux'
import todoApp2 from  '../reducers/reducers'


let store = createStore(todoApp2)
export default store