import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {
    // basename={process.env.PUBLIC_URL}
    return <HashRouter> 
        <Navigation />
        <Routes className='pt-24'>
            <Route path='/' element={<Home />} />
            <Route path='/destinations' element={<Destinations />} />
            <Route path='/crew' element={<Crew />} />
            <Route path='/tech' element={<Technology />} />
        </Routes>
    </HashRouter>
}

export default App;
