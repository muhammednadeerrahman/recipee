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
				<DishItem  key = {post.id}   >
					<ImageContainer>
						<DishImage onClick={()=> navigate(`/dish/${post.id}`) } src={post.featured_image} alt="food" />
					</ImageContainer>
					<FoodDetails>
						<FoodNameContainer>
							<FoodName>{post.dish_name}</FoodName>
							<FoodLike>
							{ (post.is_liked == false) ?
								 (
									<LikeLink onClick={()=>handleLike(post.id)} ><LikeImage src={require("../images/heart1.png")} /></LikeLink>
								 ):
								 (
									<LikeLink onClick={()=>handleLike(post.id)} ><LikeImage src={require("../images/heart2.png")} /></LikeLink>
								 )}
								<LikeCount >{post.like} Likes</LikeCount>
							</FoodLike>
						</FoodNameContainer>
                        <PostedBy>posted By : {post.user_name}</PostedBy>
						<PostedDate>{post.date}</PostedDate>
					</FoodDetails>
            	</DishItem>
				))
		)
	}

    let handleLike = (id) => {

		console.log(id)
		axios.post(`http://127.0.0.1:8018/api/v1/dishes/likes/${id}/`,{},
		{headers : {
			Authorization : `Bearer ${userdata?.access}`,
		},
	})
		.then(function(response){
			console.log(response.data)
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
		})
		.catch(function(error) {
			console.log(error)
		  });
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
`
const ImageContainer = styled.div`
width: 90%;
height: 200px;
`
const DishImage = styled.img`
width: 100%;
height: 100%;
display: inline-block;
cursor: pointer;
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
const LikeLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
width: 20px;
margin-right: 10px;
cursor: pointer;
`
const LikeImage = styled.img`
display: block;
width: 100%;
cursor: pointer;
`
const LikeCount = styled.div`
font-size: 12px;
`
const PostedBy = styled.h3`
font-size: 16px;
text-align: left;
`
const PostedDate = styled.h4`
font-size: 16px;
text-align: left;
`

