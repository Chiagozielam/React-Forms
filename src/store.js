import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createsagaMiddleware from "redux-saga"
import rootReducers from "./reducers";
import thunk from "redux-thunk"
import AppSagas from './sagas/userSagas'


const initialState = {};
const saga = createsagaMiddleware();
const store = createStore(rootReducers, initialState, composeWithDevTools(applyMiddleware(saga)));
saga.run(AppSagas);

export default store;
