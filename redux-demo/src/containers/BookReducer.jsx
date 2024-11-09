import { buy_book } from "./bookTypecontainer"

const initialState ={
    NumberofBooks : 20

}

const BookReducer = (state = initialState, action)=>{
    switch(action.type){
        case buy_book: return{
            ...state,
             NumberofBooks : initialState - 1
        }
        default: return state
    }

}
export default BookReducer;



