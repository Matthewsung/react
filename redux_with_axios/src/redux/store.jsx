import { createStore, applyMiddleware } from 'redux';
import logger from'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from ' redux-thunk'

import { getDataReducer } from './beerlist/reducer';

const middleware = [logger, thunk]
const store = createStore(getDataReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;