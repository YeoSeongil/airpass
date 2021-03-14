import { combineReducers } from "redux";
import cartReducer from "./_cartReducer"

const rootReducer = combineReducers({
    cartReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>