import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { userContext } from '../../App'

export default function Delete() {
    const {id} = useParams()
    const {userdata} = useContext(userContext)
    const navigate = useNavigate()

    useEffect(({id})=>{
        const formField = new FormData()
		formField.append("is_deleted",true)

		console.log(id)
		axios({
			method : "post",
			url :`http://127.0.0.1:8018/api/v1/dishes/mypost/${id}/`,
			data : formField,

			headers : {
					Authorization : `Bearer ${userdata?.access}`,
				}
		},)
		.then(function(response){
			console.log(response.data)
            navigate("/")
	
		})
		.catch(function(error){
			console.log(error)

		})
		
	},[])


  return (
    

    <div>Delete</div>
  )
}
