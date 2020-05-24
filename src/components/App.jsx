import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea';

function App() {
    const [notesArray, setNotesArray] = useState([]);

    function addNewNote(noteEntry) {
        setNotesArray(prevValue => {
                return [...prevValue, noteEntry];
            }
        );
    }

    function deleteNote(id) {
        setNotesArray(prevValue => {
            return (notesArray.filter((note, index) => {
                    return index !== id
                })
            )
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNewNote}/>
            {notesArray.map((note, index) => {
                return (
                    <Note
                        onDelete={deleteNote} 
                        key={index} 
                        id={index} 
                        title={note.title} 
                        content={note.content} 
                    />
                );   
            })}
            <Footer />
        </div>
    );
}

export default App;