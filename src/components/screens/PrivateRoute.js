import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, json, useLocation } from 'react-router-dom'
import styled from 'styled-components'


export default function PrivateRoute() {

    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const isLoggedIn = JSON.parse(localStorage.getItem("user_data"))

    useEffect(()=>{
        setLoading(false)
    },[])
  return loading ? (<Loading><LoadingTitle></LoadingTitle></Loading>) : (
    isLoggedIn?.access ?  <Outlet/>
    :<Navigate to={{ pathname : "/Login/",search :`?next=${location.pathname}`}} /> 
  
  )
}


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

