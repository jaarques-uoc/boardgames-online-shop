import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from "./appReducer";


const configureStore = () => {
    return createStore(
        appReducer,
        applyMiddleware(thunk)
    );
};

export {configureStore};