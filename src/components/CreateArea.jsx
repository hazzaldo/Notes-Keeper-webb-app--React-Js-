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

  return (
    <div>
      <form onSubmit={(event) => {
                props.onAdd(event, noteEntry);
            }}
        >
        <input onChange={handleChange} name='title' placeholder='Title' />
        <textarea onChange={handleChange} name='content' placeholder='Take a note...' rows='3' />
        <button type="submit">
            Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
