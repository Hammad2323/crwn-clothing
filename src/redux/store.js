import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import rootReucer from './root-reducer';

const middlewares=[logger];

export const store=createStore(rootReucer,applyMiddleware(...middlewares));

export const persistor=persistStore(store);

    