import React, { useState } from 'react';

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
        <button onClick={submitNote}>
            Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
