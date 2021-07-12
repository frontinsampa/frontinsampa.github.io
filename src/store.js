import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import partners from './scenes/Home/Partners/store';

export default createStore(combineReducers({
  partners,
}), applyMiddleware(thunk));
