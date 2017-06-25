import { combineReducers } from 'redux';
import ItemReducer from './item-reducer';

const rootReducer = combineReducers({
  items: ItemReducer
});

export default rootReducer;
