import React, { useState, useEffect, useContext } from 'react'
import Header from '../includes/Header'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../../App'

export default function Favourite() {
    const [mylikes, setMylikes] = useState([])
	const {userdata} = useContext(userContext)
	const navigate = useNavigate()

	useEffect(()=>{
		axios.get("http://127.0.0.1:8018/api/v1/dishes/",
			{headers : {
				Authorization : `Bearer ${userdata?.access}`,
			},
		})
		.then(function(response){
			console.log(response.data.data)
            const likedPost= response.data.data.filter((post)=> post.is_liked == true)
			setMylikes(likedPost)
		})
		.catch(function(error){
			console.log(error)
		})
	},[])
	let myPost = () =>{
		return(
			mylikes.map((post)=>(
				<DishItem  key = {post.id} onClick={()=> navigate(`/dish/${post.id}`) }  >
					<ImageContainer>
						<DishImage src={post.featured_image} alt="food" />
					</ImageContainer>
					<FoodDetails>
						<FoodNameContainer>
							<FoodName>{post.dish_name}</FoodName>
							<FoodLike>
								<LikeImage src={require("../images/likebutton.png")}  />
								<LikeCount> {post.like} likes</LikeCount>
							</FoodLike>
						</FoodNameContainer>
						<PostedDate>{post.date}</PostedDate>
					</FoodDetails>
            	</DishItem>
				))
		)
	}

  return (
    <>
      	<Header/>
      	<SectionMyPost>
          	<SectionTop>
            	<PostNumber>
            		<PostNoTitle>No. of Posts : </PostNoTitle>
              		<PostNo> {mylikes.length} Post Available </PostNo>
            	</PostNumber>
          	</SectionTop>
         	<SectionBottom>
				{myPost()}
            
          	</SectionBottom>
      	</SectionMyPost>
    </>
  )
}

const SectionMyPost = styled.div`
padding: 130px 60px;
`
const SectionTop = styled.div``
const PostNumber = styled.div`
display: flex;
`
const PostNoTitle = styled.h3`
margin-right: 10px;
`
const PostNo = styled.h3``
const SectionBottom = styled.div`
display: flex;
flex-wrap: wrap;
`
const DishItem = styled.div`
width: 30%;
margin: 30px 30px 0 0;
padding: 20px;
cursor: pointer;
`
const ImageContainer = styled.div`
width: 90%;
height: 200px;
`
const DishImage = styled.img`
width: 100%;
height: 100%;
display: inline-block;
border-radius: 8px;
`
const FoodDetails = styled.div`
width: 90%;
`
const FoodNameContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const FoodName = styled.h3``


const FoodLike = styled.div`
display: flex;
margin: 25px 0 ;
`
const LikeImage = styled.img`
width: 20px;
display: block;
margin-right: 10px;
`
const LikeCount = styled.div`
font-size: 12px;
`
const PostedDate = styled.h4`
font-size: 16px;
text-align: left;
`

