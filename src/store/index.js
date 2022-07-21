
import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from "redux-saga";
import saga from "./sagaindex";
import user from './userredux';
import {
    persistStore,
    persistReducer,
  } from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist:['user']
  };
  const reducer = combineReducers({user})
const persistedReducer = persistReducer(persistConfig, reducer);
let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware({
      serializableCheck: false}),sagaMiddleware]
})
sagaMiddleware.run(saga);

const persistor = persistStore(store);

export { persistor, store };
