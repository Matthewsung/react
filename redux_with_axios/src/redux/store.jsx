import { createStore,  } from 'redux';

import { getDataReducer } from './beerlist/reducer';

const store = createStore(getDataReducer);

export default store;