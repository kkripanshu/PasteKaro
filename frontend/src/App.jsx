import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PastePage from './Pages/PastePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/Home" />}/>
        <Route path='/Home' element={<HomePage />} />
        <Route path='/paste/:uniqueLink' element={<PastePage />} />
      </Routes>
    </Router>
  )
}

export default App