import {redux} from 'redux'

//action method in redux which perform on state

const buy_cake = 'Buy_cake'

function buyCake(){
    return{
        type : buy_cake,
        info :'first redux action'
    }
}

//reducer - it is accepts state and action  as argument and returns next state
//Reducer(prevState, action) => newState

const initialState = {
    numOfCakes : 15
}

const reducer =  (state=initialState, action)=>{
    switch(action.type){
        case buy_cake : return{
            ...state,
            numOfCakes :state.numOfCakes - 1
        }
        default: return state;
    }
}

const store = createStore(reducer)
console.log('initial state ', store.getState())
const unsubscribe = store.subscribe(()=>console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()