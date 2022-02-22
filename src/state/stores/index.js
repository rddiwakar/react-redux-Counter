import {createStore} from 'redux';
import counter from '../reducers/index';

// creating store

let store = createStore(counter)

export default store;