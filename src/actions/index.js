import { FETCH, DELETE, CREATE } from './types';

export function fetchItems() {
  return {
    type: FETCH
  }
}

export function createItem(item) {
  let itemtoAdd = {
    [Math.floor(Math.random() * 20)]: item
  };

  return {
    type: CREATE,
    payload: itemtoAdd
  }
}

export function deleteItem(key) {
  return {
    type: DELETE,
    payload: key
  }
}