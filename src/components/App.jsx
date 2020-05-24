import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea';

function App() {
    const [notesArray, setNotesArray] = useState([]);

    function addNewNote(event, noteEntry) {
        setNotesArray(prevValue => {
                return [...prevValue, noteEntry];
            }
        );
        event.preventDefault();
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNewNote}/>
            <Note key={1} title="Note title" content="Note content"/>
            <Footer />
        </div>
    );
}

export default App;