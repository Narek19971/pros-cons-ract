/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import List from './List';

export default class ListContainer extends Component {
  addNewList = () => {
    this.props.addList(this.props.type, '');
  };
  hadleInputSubmit = (value, id) => {
    const listIndex = this.props.lists.findIndex((el) => el.id === id);

    if (listIndex > -1) {
      this.props.updateList(this.props.type, id, value);

      return;
    }

    this.props.addList(this.props.type, value);
  };
  removeList = (id) => {
    this.props.deleteList(this.props.type, id);
  };
  render() {
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <div className="list_container">
        <p className="title">{this.props.type.toUpperCase()}</p>
        <hr />
        {(this.props.lists || []).map((item, i) => {
          return (
            <div className={this.props.type + '_container'}>
              <List
                key={item.id}
                index={i}
                id={item.id}
                text={item.text}
                addNewList={this.addNewList}
                hadleInputSubmit={this.hadleInputSubmit}
                removeList={this.removeList}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
