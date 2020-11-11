import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreatNote from './CreateNote';

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevValue => {
            return [...prevValue, newNote];
        });
    }

    return (
      <div>
        <Header />
        <CreatNote addNote={addNote} />
        {notes.map((note, index) => {
          return (
            <Note
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