import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

function App() {
    return (
        <div>
            <Header />
            <Note title="Fuck you" content="Tht's right"/>
            <Footer />
        </div>
    );
};

export default App;
