import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import timeline from './scenes/Home/Timeline/store';
import partners from './scenes/Home/Partners/store';

export default createStore(combineReducers({
  timeline,
  partners,
}), applyMiddleware(thunk));
