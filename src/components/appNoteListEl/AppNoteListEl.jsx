import React, { Component } from 'react';
import classes from './AppNoteListEl.module.css';

export default class AppNoteListEl extends Component {
  state = {
    pinActive: false,
  };

  pinOnHandler = () => {
    this.setState({ pinActive: true });
  };
  pinOffHandler = () => {
    this.setState({ pinActive: false });
  };

  render() {
    return (
      <li onMouseEnter={this.pinOnHandler} onMouseLeave={this.pinOffHandler} className={classes['note-el-container']}>
        <h3>{this.props.note.title}</h3>
        {this.state.pinActive && <i class="fa fa-thumb-tack" aria-hidden="true"></i>}
        <p>{this.props.note.body}</p>
      </li>
    );
  }
}