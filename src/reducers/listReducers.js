/* eslint-disable no-case-declarations */
import * as actionTypes from '../constants/actionTypes';
import uniqueId from 'lodash/uniqueId';

const initialState = {
  pros: [
    {
      id: uniqueId('pros_'),
      text: "It's really tasty",
    },
    {
      id: uniqueId('pros_'),
      text: "It's really fast",
    },
    {
      id: uniqueId('pros_'),
      text: "It's really fast",
    },
    {
      id: uniqueId('pros_'),
      text: "It's really fast",
    },
    {
      id: uniqueId('pros_'),
      text: "It's really fast",
    },
    {
      id: uniqueId('pros_'),
      text: '',
    },
  ],
  cons: [
    {
      id: uniqueId('cons_'),
      text: 'Makes me fat',
    },
    {
      id: uniqueId('cons_'),
      text: 'Too expensive',
    },
    {
      id: uniqueId('cons_'),
      text: '',
    },
  ],
};

export default () => {
  return (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD_LIST:
        const newStateAdd = [...state[action.listType]];

        newStateAdd.push({
          text: action.value,
          id: uniqueId(action.listType + '_'),
        });

        return {
          ...state,
          [action.listType]: newStateAdd,
        };
      case actionTypes.DELETE_LIST:
        const newStateDelete = [...state[action.listType]];
        const listDeleteIndex = newStateDelete.findIndex(
          (item) => item.id === action.id
        );
        if (listDeleteIndex > -1) {
          newStateDelete.splice(listDeleteIndex, 1);
        }
        return {
          ...state,
          [action.listType]: newStateDelete,
        };
      case actionTypes.EDIT_LIST:
        const newStateEdit = [...state[action.listType]];
        const listEditIndex = newStateEdit.findIndex(
          (el) => el.id === action.id
		);
        if (listEditIndex > -1) {
          newStateEdit[listEditIndex].text = action.value;
        }
        return {
          ...state,
          [action.listType]: newStateEdit,
        };
      default:
        return state;
    }
  };
};
