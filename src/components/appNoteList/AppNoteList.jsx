import React, { Component, Fragment } from 'react';
import classes from './AppNoteList.module.css';
import AppNoteListEl from '../appNoteListEl/AppNoteListEl'
// import AppNoteElSingle from '../appNoteElSingle/AppNoteElSingle';

export default class AppNoteList extends Component {
  

  
  render() {
    const { notes } = this.props
    console.log(notes);
    return (
      <Fragment>
        <ul className={classes['note-list-container']}>
          {notes.map((note) => (
          
            <AppNoteListEl
              onEditNote={this.props.onEditNote}
              onSingleElModalHandler={this.singleElModalHandler}
              key={Math.random()}
              note={note}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}