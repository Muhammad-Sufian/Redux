import {createStore, combineReducers} from 'redux'
import countReducer from './reducer';

const rootReducer = combineReducers({
    counting: countReducer
})

const configureStore=()=>{
    return createStore(rootReducer);
}

export default configureStore;