import { combineReducers, createStore } from 'redux';

//action method in redux which perform on state

// Action
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAMS = 'BUY_ICECREAMS';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    };
}

function buyIcream() {
    return {
        type: BUY_ICECREAMS,
        info: 'second redux action'
    };
}


// Reducer
// const initialState = {
//     numOfCakes: 15,
//     numOfIcecreams : 20
// };
const initialCakeState = {
    numOfCakes: 15,
};
const initialIcecreamState = {
    numOfIcecreams : 20
};

//reducer - it is accepts state and action  as argument and returns next state
//Reducer(prevState, action) => newState

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             };
//         case BUY_ICECREAMS:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             };    
//         default:
//             return state;
//     }
// };

//reducer for the cake 


const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
            
        default:
            return state;
    }
};
const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        
        case BUY_ICECREAMS:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1
            };    
        default:
            return state;
    }
};
// Store
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream : icecreamReducer
})
const store = createStore(rootReducer);
console.log('Initial state ', store.getState());

const unsubscribe = store.subscribe(() =>
    console.log('Updated state', store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcream());
store.dispatch(buyIcream());

unsubscribe();
