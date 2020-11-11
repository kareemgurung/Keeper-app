import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreatNote from './CreateNote';

function App() {
    return (
        <div>
            <Header />
            <CreatNote />
            <Note />
            <Footer />
        </div>
    )
}

export default App;