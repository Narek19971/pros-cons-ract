/* eslint-disable react/react-in-jsx-scope */
import Lists from '../components/List/index';
import { connect } from 'react-redux';
import actions from '../actions';

const mapStateToProps = ({ lists }, { type }) => ({
  lists: lists[type],
});

const mapDispatchToProps = (dispatch) => {
  return {
    addList: (listType, value) =>
      dispatch(actions.prosCons.addList(listType, value)),
    deleteList: (listType, id) =>
      dispatch(actions.prosCons.deleteList(listType, id)),
    updateList: (listType, id, value) =>
      dispatch(actions.prosCons.editList(listType, id, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
