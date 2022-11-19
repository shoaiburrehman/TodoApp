import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from '../reducers/rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const persistedConfig = {
    key: 'root',
    storage: AsyncStorage,
    // blacklist: ['generalReducer'],
};

const persistedReducer = persistReducer(persistedConfig, rootReducer);
const store = createStore(persistedReducer, middleware);
const persister = persistStore(store);

export { store, persister };