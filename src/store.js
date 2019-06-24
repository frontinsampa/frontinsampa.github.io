import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import timeline from './scenes/Home/Timeline/store';
import speakers from './scenes/Home/Speakers/store';

export default createStore(combineReducers({
  timeline,
  speakers,
}), applyMiddleware(thunk));
