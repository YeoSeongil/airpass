import { ActionTypes } from "./_actions";
import { ADD_ITEM, DEL_ITEM, initItemState } from "./_types";

const initState:initItemState= [];

//리듀서
const cartReducer = (state=initState,action:ActionTypes):initItemState => {
    switch(action.type){
        case ADD_ITEM:
            return [...state, action.payload.item]
        case DEL_ITEM:
            return state.filter(item=>item.id !== action.payload.id)
        default:
            return state;
    }
}

export default cartReducer;