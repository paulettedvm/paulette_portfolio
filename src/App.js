import React from 'react';
import './App.css';
import NavBar from './components/home-navbar'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutMe from './pages/about-me';
 
function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about-me' element={<AboutMe />} />
            </Routes>
        </Router>
    );
}
 
export default App;