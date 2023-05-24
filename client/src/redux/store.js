import { applyMiddleware, combineReducers, configureStore} from "@reduxjs/toolkit";
import loginStatusReducer from "./loginSlice";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//configuration for redux persist
const persistConfig={
    key: 'main-root',
    storage,
}

//create root reducer
const rootReducer = combineReducers({
    loginStatus: loginStatusReducer
})

//convert simple reducer (loginStatusReducer) into persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//create a store based off of the reducer
const store = configureStore({reducer: persistedReducer});

//export persistor 
const Persistor = persistStore(store);

export {Persistor};

export default store;



// export default configureStore({
//     reducer: {
//         loginStatus: loginStatusReducer
//     }
// })


