import { MainReducer } from "./Reducers/MainReducer";
import {combineReducers,createStore} from "redux"
let root_reducer = combineReducers({
    main:MainReducer
})
export const store = createStore(root_reducer)