import React, { Component} from 'react'
import { Switch, } from 'react-router';
import classes from './App.module.css';
import AppNavBar from './components/appNav/AppNabBar'
import AppAside from './components/appAside/AppAside'
import AppAddNote from './components/appAddNote/AppAddNote';
import AppNoteList from './components/appNoteList/AppNoteList'

class App extends Component {
  state = {
    notes: [],
    id: 1,
    isPined: false,
    selectedNote: {}
  };

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem('notes', JSON.stringify(this.state.notes))
    localStorage.setItem('lastId', this.state.id)
  }

  componentDidMount() {
    const notesFromStorage = localStorage.getItem('notes')
    const lastIdFromStorage = +localStorage.getItem('lastId')
    
    if (notesFromStorage) {
      this.setState({ notes: JSON.parse(notesFromStorage), id: lastIdFromStorage });
    }
    
  }

  handleNewNote = (newNote) => {
    let newNoteObj = { ...newNote, _id: this.state.id, isPined: this.state.isPined };

    const stateNotesCopy = [...this.state.notes];
    stateNotesCopy.push(newNoteObj);

    this.setState({ stateNotesCopy, notes: stateNotesCopy, id: this.state.id + 1 });
  };

  editNote = (id, newNoteVal) => {
    let foundNote = this.state.notes.find((note) => note._id === id);
    foundNote = { ...foundNote, ...newNoteVal };
    this.setState({ selectedNote: foundNote });
  };

  render() {
    return (
      <div className={classes.App}>
        <AppNavBar className={classes['nav-bar']} />
        <AppAside className={classes['aside']} />
        <AppNoteList onEditNote={this.editNote} notes={this.state.notes} className={classes['note-list']} />
        <AppAddNote onNewNote={this.handleNewNote} className={classes['add-note']} />

        <Switch>{/* <Route path="/" Component={}></Route> */}</Switch>
      </div>
    );
  }
}

export default App;
