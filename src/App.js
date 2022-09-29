import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcomepage from './Pages/Welcomepage';
import Home from './Pages/Home';
import Bollywood from './Pages/Bollywood';
import Fitness from './Pages/Fitness';
import Food from './Pages/Food';
import Hollywood from './Pages/Hollywood';
import Technology from './Pages/Technology';
import Navbar from './Components/Navbar';
import IndividualCardPage from './Pages/IndividualCardPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='content-below-nav'>
          <Routes>
            <Route path='/' element={<Welcomepage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/bollywood' element={<Bollywood />} />
            <Route path='/hollywood' element={<Hollywood />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='/fitness' element={<Fitness />} />
            <Route path='/food' element={<Food />} />
            <Route path=":category/:id" element = {<IndividualCardPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
