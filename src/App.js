import React,{useState,useEffect} from "react";

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
import Delete from "./components/screens/Delete";
import Edit from "./components/screens/Edit";
import Favourite from "./components/screens/Favourite";
import Search from "./components/screens/Search";

export const userContext = React.createContext()


function App() {

	const [userdata, setUserdata] = useState({});
	const [loading, setLoading] = useState(true);

	const updateUserData = (action) =>{
	  switch(action.type){
		case "LOGOUT":
		  setUserdata(null);
		  localStorage.clear();
		  break;
		case "LOGIN" :
		  setUserdata(action.payload);
		  break;
		default :
		  break;
  
	  }
  
	};
	useEffect(() =>{
	  setUserdata(JSON.parse(localStorage.getItem("user_data")));
	  setLoading(false);
  
	},[]);

  return loading?(<h1>loading...</h1>) : (
    <>
      <userContext.Provider value={{userdata , updateUserData}}>
        <Router>
          
            <Routes>
              <Route path="/" element={<Dishes/>} />
              <Route path="/dish/:id/" element={<Dish/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/Signup" element={<Signup/>} />
              <Route path="/mypost" element={<Mypost/>} />
              <Route path="/createpost" element={<Createpost/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/edit/:id/" element={<Edit/>} />
              <Route path="/delete/:id/"  element={<Delete/>} />
              <Route path="/favourite"  element={<Favourite/>} />
              <Route path="/search/:q/"  element={<Search/>} />

            </Routes>
        </Router>
      </userContext.Provider>


    </>
  );
}

export default App;
