import { combineReducers } from 'redux';
import {sessionReducer} from "./routes/login/sessionReducer";

const appReducer = combineReducers({
    sessionReducer
});

export {appReducer};