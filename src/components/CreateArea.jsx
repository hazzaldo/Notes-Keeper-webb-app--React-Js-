import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [noteEntry, setNoteEntry] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNoteEntry(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(noteEntry);
        setNoteEntry({
            title: "",
            content: ""
        });
        event.preventDefault();
    }


  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} name='title' placeholder='Title' value={noteEntry.title}/>
        <textarea onChange={handleChange} name='content' placeholder='Take a note...' rows='3' value={noteEntry.content}/>
        <Zoom in={true}>
          <Fab onClick={submitNote}>
              <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
