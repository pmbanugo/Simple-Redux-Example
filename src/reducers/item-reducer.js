import _ from 'lodash';
import { FETCH, DELETE, CREATE } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH:
      return state;
    case CREATE:
      return { ...state, ...action.payload };
    case DELETE:
      return _.omit(state, action.payload);
  }

  return state;
}
