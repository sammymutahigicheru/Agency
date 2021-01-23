import {createStore} from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'; //make api calls and dispatch result


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

export default () =>{
    let store = createStore(persistReducer,applyMiddleware(thunk));
    let persistor = persistStore(store);
    return {
        store,
        persistor
    }
}