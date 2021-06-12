import { createStore, combineReducers} from 'redux';
import rootReducer from './Reducer/rootReducer';
// import signinReducer from './Reducer/signinReducer';
import { composeWithDevTools } from 'redux-devtools-extension';



// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default () => {
    // return createStore(rootReducer);
    return createStore(rootReducer, composeWithDevTools());
}