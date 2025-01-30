import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import BasicCalculator from './Components/BasicCalculator';
import AdvancedCalculator from './Components/AdvancedCalculator';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<BasicCalculator/>}/>
        <Route path='/advanced' element={<AdvancedCalculator/>}/>
      </Routes>
    </Router>
  )
}

export default App