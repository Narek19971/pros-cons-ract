import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    hadleInputSubmit: PropTypes.func.isRequired,
    addNewList: PropTypes.func.isRequired,
    removeList: PropTypes.func.isRequired,
  };
  state = {
    addedList: !!this.props.text,
  };
  onChangeHandler = (event) => {
    if (event.target.value.length === 1 && !this.state.addedList) {
      this.props.addNewList();
      this.setState({ addedList: true });
    }

    if (!event.target.value.length) {
      this.props.removeList(this.props.id);
    }

    this.props.hadleInputSubmit(event.target.value, this.props.id);
  };

  render() {
    const { index } = this.props;
    return (
      <div className="list">
        <strong>{index + 1}.</strong>
        <input
          type="text"
          defaultValue={this.props.text}
          onChange={this.onChangeHandler}
        />
      </div>
    );
  }
}
