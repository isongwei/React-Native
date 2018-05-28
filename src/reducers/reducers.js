import {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, VisibilityFilters} from '../actions/actions'
import  * as types from '../actions/actions';
import {combineReducers} from 'redux' ;




const initialState = {
    visibilityFilter:VisibilityFilters.SHOW_ALL,
    todo:[]
}


function todoApp(state = initialState,action) {


    switch (action.type){
        case types.SET_VISIBILITY_FILTER:
            return Object.assign({},state,{visibilityFilter:action.filter})
        case types.ADD_TODO:
            return Object.assign({},state,{todos:todos(state.todos,action)})
        case types.TOGGLE_TODO:
            return Object.assign({},state,{todos:todos(state.todos,action)})
        default:
            return state
    }

}

function todos(state = [],action) {
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text:action.text,
                    completed:false
                }

            ]
        case TOGGLE_TODO:
            return state.map((todo,index) =>{
                if(index === action.index){
                 return Object.assign({},todo,{
                     completed:!todo.completed
                 })
                }
                return todo
            })
        default :
            return state

    }

}




/**************************************************/

const {SHOW_ALL} =VisibilityFilters

function visibilityFilter(state = SHOW_ALL,action) {
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state

    }
}


function todoApp1(state={}, action) {
    return {
        visibilityFilter:visibilityFilter((state.visibilityFilter,action)),
        todos:todos(state.todos,action)
    }
}


//同todoApp1
const todoApp2 = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp2






