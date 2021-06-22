import React, { Component } from 'react';
import classes from './AppNoteListEl.module.css';

export default class AppNoteListEl extends Component {
  state = {
    newNote: {
      title: '',
      body: '',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newNoteVal = { ...this.state.newNote };
    this.props.onEditNote(this.props.note._id, newNoteVal);
    this.props.onToggleModal();
  };

  syncInput = (e) => {
    // console.log(e.target.name);
    this.setState({ newNote: { ...this.state.newNote, [e.target.name]: e.target.value } });
  };

  handleModal = (e) => {
    e.stopPropagation();
    
  }

  

  render() {
   
    return (
      <div
        onClick={this.props.onToggleModal}
        className={`${classes['add-note']} ${classes['add-note-container']} ${classes['modal-background']}`}
      >
        <div onClick={this.handleModal} className={classes['inner-note']}>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <input
              defaultValue={this.props.note.title}
              onChange={this.syncInput}
              className={classes['input']}
              name="title"
              type="text"
              placeholder="Title"
            />
            <textarea
              defaultValue={this.props.note.body}
              onChange={this.syncInput}
              className={classes['text-area']}
              name="body"
              placeholder="Take a note..."
              rows="10"
              cols="70"
            ></textarea>
            <div className={classes['note-el-toolbar-container']}>
              <div className={classes['note-el-toolbar']}> </div>
              <button
                className={classes['link-like']}
                type="submit"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// import React, { Component } from 'react';
// import classes from './AppNoteListEl.module.css';

// export default class AppNoteElSingle extends Component {
//   state = {
//     pinActive: false,
//   };

//   pinOnHandler = () => {
//     this.setState({ pinActive: true });
//   };
//   pinOffHandler = () => {
//     this.setState({ pinActive: false });
//   };

//   render() {
//     return (
//       <div className={classes['modal-background']}>
//         <li onMouseEnter={this.pinOnHandler} onMouseLeave={this.pinOffHandler} className={classes['note-el-container']}>
//           <input defaultValue={this.props.note.title}></input>
//           {this.state.pinActive && (
//             <i className="fa fa-thumb-tack" style={{ cursor: 'pointer' }} aria-hidden="true"></i>
//           )}
//           <input defaultValue={this.props.note.body}></input>
//           <div className="note-el-toolbar"></div>
//         </li>
//       </div>
//     );
//   }
// }
