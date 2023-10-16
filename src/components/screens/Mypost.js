import React, { useState, useEffect, useContext } from 'react'
import Header from '../includes/Header'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../../App'

export default function Mypost() {
	const [myposts, setMyposts] = useState([])
	const {userdata} = useContext(userContext)
	const navigate = useNavigate()

	useEffect(()=>{
		axios.get("http://127.0.0.1:8018/api/v1/dishes/mypost/",
			{headers : {
				Authorization : `Bearer ${userdata?.access}`,
			},
		})
		.then(function(response){
			console.log(response.data.data)
			setMyposts(response.data.data)
		})
		.catch(function(error){
			console.log(error)
		})
	},[])
	let myPost = () =>{
		return(
			myposts.map((post)=>(
				<DishItem  key = {post.id}   >
					<ImageContainer>
						<DishImage src={post.featured_image} alt="food" />
					</ImageContainer>
					<FoodDetails>
						<FoodNameContainer>
							<FoodName>{post.dish_name}</FoodName>
							<FoodLike>
								<LikeImage src={require("../images/likebutton.png")}  />
								<LikeCount> 22 likes</LikeCount>
							</FoodLike>
						</FoodNameContainer>
						<PostedDate>{post.date}</PostedDate>
						<PostChange>
							<EditPost to = {`/edit/${post.id}/`} >
								<EditImageContanier>
									<EditImage src={require("../images/edit.svg").default} alt="EditImage" />
								</EditImageContanier>
								<EditTitle>edit</EditTitle>
							</EditPost>
							<DeletePost onClick = {()=>deletePost(post.id)}>
								<DeleteImageContanier>
									<DeleteImage src={require("../images/delete.svg").default} alt="DeleteImage" />
								</DeleteImageContanier>
								<DeleteTitle >delete</DeleteTitle>
							</DeletePost>
						</PostChange>
					</FoodDetails>
            	</DishItem>
				))
		)
	}

	let deletePost = (id) => {
		const formField = new FormData();
		formField.append("is_deleted", true);
	
		axios({
			method: "post",
			url: `http://127.0.0.1:8018/api/v1/dishes/mypost/delete/${id}/`,
			data: formField,
			headers: {
				Authorization: `Bearer ${userdata?.access}`,
			},
		})
		.then(function(response){
			console.log(response.data);
			navigate("/")
			// Handle success, such as removing the post from your state
		})
		.catch(function(error){
			console.log(error);
			// Handle errors
		});
	}
		

  return (
    <>
      	<Header/>
      	<SectionMyPost>
          	<SectionTop>
            	<PostNumber>
            		<PostNoTitle>No. of Posts : </PostNoTitle>
              		<PostNo> 10 Post Available </PostNo>
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
width: 100%;
`
const DishImage = styled.img`
width: 100%;
display: inline-block;
border-radius: 8px;
`
const FoodDetails = styled.div``
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
const PostChange = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;
`
const EditPost = styled(Link)`
display: flex;
align-items: flex-end;
background-color: #ffaa11;
padding: 0 10px;
border-radius: 8px;


`
const EditImageContanier = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20px;
	padding: 5px;

`
const EditImage = styled.img`
width: 15px;
display: block;
`
const EditTitle = styled.h5`
color:#fff;
font-weight: 300;
font-size: 10px;
`

const DeletePost = styled(EditPost)`
background-color: red;
`
const DeleteImageContanier = styled(EditImageContanier)``
const DeleteImage = styled(EditImage)``
const DeleteTitle = styled(EditTitle)``

