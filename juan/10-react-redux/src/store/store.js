import { createStore, combineReducers} from 'redux';
import { balanceReducer } from '../reducers/balanceReducer';

const reducers=combineReducers({
    balance: balanceReducer
    //aquí se agregan todos los reducers
});

export const store=createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
