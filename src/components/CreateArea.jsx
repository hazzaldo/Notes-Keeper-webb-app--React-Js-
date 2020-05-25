import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [noteEntry, setNoteEntry] = useState({
        title: "",
        content: ""
    });

    const [isExpandedTextArea, setIsExpandedTextArea] = useState(false)

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

    function expandTextArea() {
      setIsExpandedTextArea(true)
    }


  return (
    <div>
      <form className="create-note">
        {isExpandedTextArea && <input onChange={handleChange} name='title' placeholder='Title' value={noteEntry.title}/>}
        <textarea onClick={expandTextArea} onChange={handleChange} name='content' placeholder='Take a note...' rows={isExpandedTextArea? 3 : 1} value={noteEntry.content}/>
        <Zoom in={isExpandedTextArea}>
          <Fab onClick={submitNote}>
              <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
