import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from '../notes';

function createNote(noteEntry) {
    return (
        <Note 
            key={noteEntry.key}
            title={noteEntry.title}
            content={noteEntry.content}
        />    
    );
}

function App() {
    return (
        <div>
            <Header />
            {notes.map(createNote)}
            <Footer />
        </div>
    );
}

export default App;