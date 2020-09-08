import * as actionTypes from '../constants/actionTypes';

export const addList = (listType, value) => ({
  type: actionTypes.ADD_LIST,
  listType,
  value,
});

export const deleteList = (listType, id) => ({
  type: actionTypes.DELETE_LIST,
  listType,
  id,
});

export const editList = (listType, id, value) => ({
  type: actionTypes.EDIT_LIST,
  listType,
  id,
  value,
});
