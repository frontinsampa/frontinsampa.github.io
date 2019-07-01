import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import timeline from './scenes/Home/Timeline/store';
import speakers from './scenes/Home/Speakers/store';
import sponsors from './scenes/Home/Sponsors/store';
import partners from './scenes/Home/Partners/store';

export default createStore(combineReducers({
  timeline,
  speakers,
  sponsors,
  partners,
}), applyMiddleware(thunk));
