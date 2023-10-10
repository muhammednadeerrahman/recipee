import React from "react";

// import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Dishes from "./components/screens/Dishes";
import Dish from "./components/screens/Dish";
import Mypost from "./components/screens/Mypost";
import Header from "./components/includes/Header";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Createpost from "./components/screens/Createpost";
import Profile from "./components/screens/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dishes/>} />
          <Route path="/dish/:id" element={<Dish/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/mypost" element={<Mypost/>} />
          <Route path="/createpost" element={<Createpost/>} />
          <Route path="/profile" element={<Profile/>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
