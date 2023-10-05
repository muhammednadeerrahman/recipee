// import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Dishes from "./components/screens/Dishes";
import Dish from "./components/screens/Dish";
import Orders from "./components/screens/Orders";
import Header from "./components/includes/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Dishes/>} />
          <Route path="/dish" element={<Dish/>} />
          <Route path="/orders" element={<Orders/>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
