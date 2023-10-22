import React,{useState,useEffect} from "react";

// import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route, useNavigate, Navigate} from "react-router-dom"
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
import EditProfile from "./components/screens/EditProfile";
import NoPage from "./components/screens/NoPage";
import PrivateRoute from "./components/screens/PrivateRoute";
import styled from "styled-components";

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

  return loading?(<Loading><LoadingTitle></LoadingTitle></Loading>) : (
    <>
      <userContext.Provider value={{userdata , updateUserData}}>
        <Router>
          
            <Routes>
              <Route element={<PrivateRoute/>}>
                <Route path="/dish/:id/" element={<Dish/>} />
                <Route path="/mypost" element={<Mypost/>} />
                <Route path="/createpost" element={<Createpost/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/profile/edit" element={<EditProfile/>} />
                <Route path="/edit/:id/" element={<Edit/>} />
                <Route path="/delete/:id/"  element={<Delete/>} />
                <Route path="/favourite"  element={<Favourite/>} />
              </Route>
              <Route path="/" element={<Dishes/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/Signup" element={<Signup/>} />
              <Route path="/:q/"  element={<Search/>} />
              <Route path="*"  element={<NoPage/>} />
            </Routes>
        </Router>
      </userContext.Provider>
    </>
  );
}

export default App;


const Loading = styled.div`
width: 100%;
height: 100vh;
background-color: #ffaa11;
display: flex;
align-items: center;
justify-content: center;
`
const LoadingTitle = styled.h1`
font-size: 700px;
color: #381a5a;
`

