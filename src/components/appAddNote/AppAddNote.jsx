import React, { Component } from 'react';
import classes from './AppAddNote.module.css';

export default class AppAddNote extends Component {
  state = {
    newNote: {
      title: '',
      body: '',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onNewNote(this.state.newNote);
    this.setState({ newNote: { title: '', body: '' } });
  };

  syncInput = (e) => {
    // console.log(e.target.name);
    this.setState({ newNote: { ...this.state.newNote, [e.target.name]: e.target.value } });
  };

  render() {
    const { newNote } = this.state;
    return (
      <div className={`${classes['add-note']} ${classes['add-note-container']}`}>
        <div className={classes['inner-note']}>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <input
              value={newNote.title}
              onChange={this.syncInput}
              className={classes['input']}
              name="title"
              type="text"
              placeholder="Title"
            />
            <textarea
              value={newNote.body}
              onChange={this.syncInput}
              className={classes['input']}
              name="body"
              placeholder="Take a note..."
            ></textarea>
            <button className={classes['link-like']} type="submit">
              Close
            </button>
          </form>
        </div>
      </div>
    );
  }
}

  