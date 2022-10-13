import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';


function App() {
    return <BrowserRouter>
        <Navigation />
        <Routes className='pt-24'>
            <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
}

export default App;
