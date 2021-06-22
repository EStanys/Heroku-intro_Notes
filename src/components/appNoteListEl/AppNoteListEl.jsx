import React, { Component, Fragment } from 'react';
import classes from './AppNoteListEl.module.css';
import AppNoteElSingle from '../appNoteElSingle/AppNoteElSingle';

export default class AppNoteListEl extends Component {
  state = {
    pinActive: false,
    singleElModalActive: false,
  };

  pinOnHandler = () => {
    this.setState({ pinActive: true });
  };
  pinOffHandler = () => {
    this.setState({ pinActive: false });
  };

  singleElModalHandler = () => {
    this.setState({ singleElModalActive: !this.state.singleElModalActive });
  };


  render() {
    return (
      <Fragment>
        <li
          onClick={this.singleElModalHandler}
          onMouseEnter={this.pinOnHandler}
          onMouseLeave={this.pinOffHandler}
          className={classes['note-el-container']}
        >
          <h3>{this.props.note.title}</h3>
          {this.state.pinActive && (
            <i className="fa fa-thumb-tack" style={{ cursor: 'pointer' }} aria-hidden="true"></i>
          )}
          <p>{this.props.note.body}</p>
        </li>
        {this.state.singleElModalActive && (
          <AppNoteElSingle
            onEditNote={this.props.onEditNote}
            onToggleModal={this.singleElModalHandler}
            note={this.props.note}
          />
        )}
      </Fragment>
    );
  }
}