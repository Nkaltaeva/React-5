import { configureStore } from "@reduxjs/toolkit";
import {applyMiddleware, createStore, compose, combineReducers} from "redux"
import { toggleReducer } from "./reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(toggleReducer,composeEnhancers(applyMiddleware()))