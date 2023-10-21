import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../includes/Header'
import axios from 'axios'
import { userContext } from '../../App'

export default function Dish() {
	const [recipee,setRecipee] =useState([])
	const [comment,setComment] =useState("")
	const [listComment,setListComment] =useState([])
	const [likes , setLikes] = useState(0)
	const [isLiked , setIsLiked] = useState(false)

	const {id} = useParams()
	const {userdata} = useContext(userContext)
	const navigate = useNavigate()




	useEffect(()=>{
		axios.get(`http://127.0.0.1:8018/api/v1/dishes/view/${id}/`,
		{headers : {
			Authorization : `Bearer ${userdata?.access}`,
		},
	})
		.then(function(response){
			console.log(response)
			setRecipee(response.data.data)
			setLikes(response.data.data.like);
			setIsLiked(response.data.data.is_liked);

		})
		.catch(function(error){
			console.log(error)
		})

		axios.get(`http://127.0.0.1:8018/api/v1/dishes/list/comments/${id}/`,
		{headers : {
			Authorization : `Bearer ${userdata?.access}`,
		},
		})
		.then(function(response){
			console.log(response.data.data)
			setListComment(response.data.data)


		})
		.catch(function(error){
			console.log(error)
		})

	},[])

	let handleLike = (e) => {
		e.preventDefault()

		axios.post(`http://127.0.0.1:8018/api/v1/dishes/likes/${id}/`,{},
		{headers : {
			Authorization : `Bearer ${userdata?.access}`,
		},
	})
		.then(function(response){
			console.log(response.data)
			axios
			.get(`http://127.0.0.1:8018/api/v1/dishes/view/${id}/`, {
			   headers: {
					Authorization: `Bearer ${userdata?.access}`,
			   },
			})
			.then(function (response) {
				setLikes(response.data.data.like);
			  	setIsLiked(response.data.data.is_liked);

			})
			.catch(function (error) {
			   	console.log(error);
			});
		})
		.catch(function(error) {
			console.log(error)
		  });
	}
	let handleCommentSubmit = (e)=>{
		e.preventDefault()

		axios.post(`http://127.0.0.1:8018/api/v1/dishes/comment/${id}/`,{comment : comment},
		{headers : {
			Authorization : `Bearer ${userdata?.access}`,
		},
		
		})
		.then(function (response) {
			axios.get(`http://127.0.0.1:8018/api/v1/dishes/list/comments/${id}/`,
			{headers : {
				Authorization : `Bearer ${userdata?.access}`,
			},
			})
			.then(function(response){
				console.log(response.data.data)
				setListComment(response.data.data)
			})
			.catch(function(error){
				console.log(error)
			})

		})
		.catch(function (error) {
			   console.log(error);
		});
		setComment("")
	}



	

  return (
    <>
		<Header/>
        <SinglePageSection>
        	<SinglePageTop>
				<SinglePageTitle>{recipee.dish_name}</SinglePageTitle>
				<SinglePageCategory>{recipee.category ? recipee.category.join(', ') : ""}</SinglePageCategory>
        	</SinglePageTop>
			<SinglePagecontentSection>
				<LeftContentSection>
					<LeftImageContainer>
						<FoodImage src={recipee.featured_image} alt="foodImage"/>
					</LeftImageContainer>
					<SinglePageBottom>
						<DetailSection>
							<PostedBy>{recipee.user_name}</PostedBy>
							<PostLike>
								{ (isLiked == false) ?
								 (
									<LikeLink onClick={handleLike} ><LikeImage src={require("../images/heart1.png")} /></LikeLink>
								 ):
								 (
									<LikeLink onClick={handleLike} ><LikeImage src={require("../images/heart2.png")} /></LikeLink>
								 )}
								<LikeCount >{likes} Likes</LikeCount>
							</PostLike>
						</DetailSection>
						<DateSection>
							<Date>{recipee.date}</Date>
						</DateSection>
					</SinglePageBottom>
				</LeftContentSection>
				<RightContentSection>
					<FoodRecipeeTitle>Ingredients</FoodRecipeeTitle>
					<FoodRecipee>{recipee.ingredients}</FoodRecipee>

					<FoodRecipeeTitle>Preparation</FoodRecipeeTitle>
					<FoodRecipee>
						{recipee.recipee}
					</FoodRecipee>
					
				</RightContentSection>
			</SinglePagecontentSection>
			<Comments>
				<CommentTitle>Comments</CommentTitle>
				<CommentSection>
					<CommentForm onSubmit={handleCommentSubmit}>
						<CommentInput placeholder='comment..' value={comment} onChange={(e)=>setComment(e.target.value)} />
						<CommentButton>Post</CommentButton>
					</CommentForm>

				</CommentSection>
				<CommentsList>
					{listComment.map((comments)=>(
						<Comment>
							<CommentLeftContainer>
								<UserImage src={require("../images/profile_demo.png")} alt ="userImage" />
							</CommentLeftContainer>
							<CommentRightSection>
								<UserName>{comments.username} :</UserName>
								<UserComment>{comments.comment}</UserComment>
							</CommentRightSection>
						</Comment>

					))}
					
					
				</CommentsList>
			</Comments>
        </SinglePageSection>
    </>
  )

}


const SinglePageSection = styled.div`
padding: 140px 40px;
@media (max-width:768px){
	padding: 100px 25px 60px;

}
@media (max-width:640px){
	padding: 70px 25px 20px;

}
`
const SinglePageTop = styled.div`
display: flex;
align-items: left;
justify-content: start;
flex-direction: column;
margin-bottom: 30px;
`
const SinglePageTitle = styled.h1`
font-weight: 700;
font-size: 28px;
text-align: left;
@media (max-width:768px){
	font-size: 25px;

}
`
const SinglePageCategory = styled.span`
font-size: 16px;
font-weight: 500;
padding: 12px 16px;
display: inline-block;
background-color: #ffaa11;
color: #fff;
text-align: left;
width: 30%;
margin-top: 20px;
border-radius: 12px;
&::before{
	content: "Category : ";
	color: #000;
}
@media (max-width:768px){
	width: 50%;
	font-size: 12px;
}

`
const SinglePagecontentSection = styled.div`
display: flex;
@media (max-width:980px) {
	flex-direction: column;
	justify-content: center;
	align-items: center;

}

`
const LeftContentSection = styled.div`
width: 60%;
display: flex;

align-items: center;
flex-direction: column;
padding-right:20px ;
@media (max-width:980px) {
	margin-bottom: 20px;
	width: 80%;

}
@media (max-width:768px){
	width: 90%;
}


`
const LeftImageContainer = styled.div`
width: 100%;
height: 500px;
@media (max-width:1280px){
	height: 400px;

}
@media (max-width:1080px) {
	height: 350px;

}
@media (max-width:980px) {
	height: 300px;

}
@media (max-width:768px){
	height: 350px;

}
@media (max-width:640px){
	height: 280px;


}
`



const FoodImage = styled.img`
width: 100%;
display: block;
height: 100%;
`
const RightContentSection = styled.div`
width: 50%;
@media (max-width:980px) {
	width: 100%;
}

`
const FoodRecipeeTitle = styled.h2`
font-weight: 600;
font-size: 28px;
text-align: left;
@media (max-width:980px) {
	font-size: 24px;
}
@media (max-width:640px) {
	font-size: 20px;
}
`
const FoodRecipee = styled.p`
font-size: 20px;
line-height: 1.7em;
text-align: left;
margin: 20px 0;
min-height: 200px;
@media (max-width:980px) {
	min-height: 0;
	font-size: 17px;
}
@media (max-width:640px) {
	font-size: 15px;
}


`
const SinglePageBottom = styled.div`
width:100%;
margin-top: 20px;

`
const DetailSection = styled.div`
display: flex;
justify-content: space-between;
`
const PostedBy = styled.h3`
font-size: 20px;
font-weight: 600;
@media (max-width:640px) {
	font-size: 18px;
}

`
const PostLike = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const LikeLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
width: 25px;
margin-right: 20px;
@media (max-width:768px) {
	margin-right: 10px;

}
@media (max-width:640px) {
	width: 20px;
}

`
const LikeImage = styled.img`
display: block;
width: 100%;
`
const LikeCount = styled.h5`
font-size: 16px;
@media (max-width:640px) {
	font-size: 12px;
}


`
const DateSection = styled.div``
const Date = styled.h5`
text-align: left;
margin-top: 20px;

`
const Comments = styled.div`
margin-top: 35px;
background-color: #eee;
padding: 20px;

`
const CommentTitle = styled.h2`
font-size: 28px;
font-weight: 600;
margin-bottom: 20px;
text-align: left;
@media (max-width:980px) {
	font-size: 24px;
}
@media (max-width:640px) {
	font-size: 20px;
}
`
const CommentSection = styled.div`
display: flex;

`
const CommentForm = styled.form`
width: 100%;
display: flex;
`

const CommentInput = styled.input`
width: 80%;
padding:15px;
font-size: 18px;
display: block;
border-radius: 8px;
border: 2px solid #ffaa11;
&:focus{
	outline: #381a5a;
	border: 2px solid #381a5a;

}
@media (max-width:640px) {
	font-size: 14px;
	padding: 8px;
	width: 90%;
	border: 1px solid #ffaa11;
}

`
const CommentButton = styled.button`
display: block;
padding: 12px 16px;
color: #ffaa11;
border-radius: 10px;
background-color: #381a5a;
font-size: 20px;
font-weight: 600;
margin-left: 20px;
border: 0px;
cursor: pointer;
&:hover{
	opacity: .7;
}
@media (max-width:640px) {
	font-size: 14px;
	padding: 8px 12px;
	border: 1px solid #ffaa11;
	margin-left: 5px;

}
`
const CommentsList = styled.ul`
padding: 20px;
width:80%;
@media (max-width:640px) {
	width:100%;
	padding: 10px 0 5px;
}

`
const Comment = styled.li`
display: flex;
margin-bottom: 20px;
@media (max-width:980px) {
	margin-bottom: 10px;
}

`
const CommentLeftContainer = styled.div`

width: 5%;
@media (max-width:1280px) {
	width: 9%;

}
@media (max-width:640px) {
	width: 12%;

}

`
const UserImage = styled.img`
display: block;
width: 35px;
height: 35px;

border-radius: 50%;
@media (max-width:640px) {
	width: 25px;
	height: 25px;

}
`
const CommentRightSection = styled.div`
display: flex;
align-items: center;
width: 95%;
@media (max-width:1280px) {
	width: 91%;

}
@media (max-width:640px) {
	width: 88%;

}
`
const UserName = styled.h4`
margin-right: 10px;

`
const UserComment = styled.p`

text-align: left;
`


