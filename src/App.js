import React from 'react';
import Example from './components/Example';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import PostDetails from './pages/PostDetails';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        app
        {/* <Example /> */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/user/:id/:token" element={<PostDetails />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

export default App;
