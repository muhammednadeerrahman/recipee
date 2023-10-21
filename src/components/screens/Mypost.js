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
								<LikeCount> {post.like} likes</LikeCount>
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

	let handleLike = (id) => {

		console.log(id)
		axios.post(`http://127.0.0.1:8018/api/v1/dishes/likes/${id}/`,{},
		{headers : {
			Authorization : `Bearer ${userdata?.access}`,
		},
	})
		.then(function(response){
			console.log(response.data)
			axios.get("http://127.0.0.1:8018/api/v1/dishes/mypost/",
			{headers : {
				Authorization : `Bearer ${userdata?.access}`,
			},
		})
			.then(function(response){
				console.log(response.data.data)
                setMyposts(response.data.data)
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
              		<PostNo> {myposts.length} Post Available </PostNo>
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
@media (max-width:640px){
	padding: 80px 30px;

}
`
const SectionTop = styled.div``
const PostNumber = styled.div`
display: flex;
`
const PostNoTitle = styled.h3`
margin-right: 10px;
@media (max-width:640px){
	font-size: 16px;
}
`
const PostNo = styled.h3`
@media (max-width:640px){
	font-size: 16px;
}
`
const SectionBottom = styled.div`
display: flex;
flex-wrap: wrap;
@media (max-width:1080px){
	justify-content: space-between;

}
`
const DishItem = styled.div`
width: 30%;
margin: 30px 30px 0 0;
padding: 20px;
cursor: pointer;
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
@media (max-width:1080px){
	margin: 20px 20px 0 0;

}
@media (max-width:980px){
	width: 50%;
	margin: 20px 0;

}
@media (max-width:640px){
	width: 90%;
	margin: 30px 0 15px;
	padding: 5px;
}
@media (max-width:360px){
	width: 100%;
	margin: 30px 0 15px;
	padding: 5px;
}
`
const ImageContainer = styled.div`
width: 90%;
height: 200px;
@media (max-width:1280px){
height: 170px;

}
@media (max-width:640px){
	width: 100%;
	height: 220px;


}
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
flex-direction: column-reverse;
`
const FoodName = styled.h3`
width: 100%;
font-size: 16px;
@media (max-width:1280px){
	font-size: 14px;

}
@media (max-width:640px){
	font-size: 16px;

}
`


const FoodLike = styled.div`
display: flex;
margin: 10px 0 ;
width: 100%;
justify-content: flex-end;

`
const LikeLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
width: 20px;
margin-right: 10px;
cursor: pointer;
@media (max-width:1080px){
	width: 15px;
}
`
const LikeImage = styled.img`
display: block;
width: 100%;
cursor: pointer;
`
const LikeCount = styled.h6`
font-size: 12px;
@media (max-width:1080px){
	font-size: 10px;
	font-weight: 500;
}

`
const PostedDate = styled.h4`
font-size: 16px;
text-align: left;
@media (max-width:1280px){
	font-size: 12px;

}
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
@media (max-width:1280px){
	width: 15px;

}

`
const EditImage = styled.img`
width: 15px;
display: block;
@media (max-width:1280px){
	width: 12px;

}
`
const EditTitle = styled.h5`
color:#fff;
font-weight: 300;
font-size: 10px;
@media (max-width:1280px){
	font-size: 8px;

}
`

const DeletePost = styled(EditPost)`
background-color: red;
`
const DeleteImageContanier = styled(EditImageContanier)``
const DeleteImage = styled(EditImage)``
const DeleteTitle = styled(EditTitle)``

