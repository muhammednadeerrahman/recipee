import React, { useEffect } from 'react'
import { Navigate, Outlet, json, useLocation } from 'react-router-dom'

export default function PrivateRoute() {

    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const isLoggedIn = JSON.parse(localStorage.getItem("user_data"))

    useEffect(()=>{
        setLoading(false)
    },[])
  return loading ? (<h1>Loading</h1>) : (
    isLoggedIn?.access ?  <Outlet/>
    :<Navigate to={{ pathname : "/Login/",search :`?next=${location.pathname}`}} /> 
  
  )
}
