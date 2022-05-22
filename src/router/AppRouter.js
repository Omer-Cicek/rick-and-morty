import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Locations from '../pages/Locations';
import Residents from '../pages/Residents';
import Main from '../pages/Main';
import NavBar from '../components/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/rick-and-morty" element={<Main />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/residents/:id" element={<Residents />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
