import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../includes/Header'
import axios from 'axios'
import { userContext } from '../../App'

export default function Dish() {
	const [recipee,setRecipee] =useState([])
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
					<CommentInput></CommentInput>
					<CommentButton>Post</CommentButton>
				</CommentSection>
				<CommentsList>
					<Comment>
						<CommentLeftContainer>
							<UserImage src={require("../images/profile_demo.png")} alt ="userImage" />
						</CommentLeftContainer>
						<CommentRightSection>
							<UserName>John</UserName>
							<UserComment>lorem idsf ewasfwa ewasfwaq er5sywey e5ysys ergd ersyesr sddr hrf jrdrtr trttur  ewasgf wegaseewqqf esdf efe eagwsrg reagjinib bbhub ugyg er uygg ygb guygg</UserComment>
						</CommentRightSection>
					</Comment>
					
				</CommentsList>
			</Comments>
        </SinglePageSection>
    </>
  )

}


const SinglePageSection = styled.div`
padding: 140px 40px;
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
`
const SinglePageCategory = styled.span`
font-size: 16px;
font-weight: 500;
padding: 12px 16px;
display: inline-block;
background-color: #ffaa11;
color: #fff;
text-align: left;
width: 15%;
margin-top: 20px;
border-radius: 12px;
&::before{
	content: "Category : ";
	color: #000;
}

`
const SinglePagecontentSection = styled.div`
display: flex;

`
const LeftContentSection = styled.div`
width: 60%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 0 20px;
`
const LeftImageContainer = styled.div`
width: 100%;
height: 500px;

`



const FoodImage = styled.img`
width: 100%;
display: block;
height: 100%;
`
const RightContentSection = styled.div`
width: 50%;

`
const FoodRecipeeTitle = styled.h2`
font-weight: 600;
font-size: 28px;
text-align: left;
`
const FoodRecipee = styled.p`
font-size: 20px;
line-height: 1.7em;
text-align: left;
margin: 20px 0;


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
&::before{
	content: "Posted by : ";
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
`
const LikeImage = styled.img`
display: block;
width: 100%;
`
const LikeCount = styled.h5`
font-size: 16px;

`
const DateSection = styled.div``
const Date = styled.h5`
text-align: left;
margin-top: 20px;
&::before{
	content: "Posted Date : ";
}
`
const Comments = styled.div`
margin-top: 35px;

`
const CommentTitle = styled.h2`
font-size: 28px;
font-weight: 600;
margin-bottom: 20px;
text-align: left;
`
const CommentSection = styled.div`
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
`
const CommentsList = styled.ul`
padding: 20px;
width:80%;

`
const Comment = styled.li`
display: flex;
justify-content: space-between;
`
const CommentLeftContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
`
const UserImage = styled.img`
display: block;
width: 80%;
height: 80%;

border-radius: 50%;
`
const CommentRightSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const UserName = styled.h4`
margin-right: 20px;
width: 10%;
&::after{
	content: " : ";
}
`
const UserComment = styled.p`
width: 90%;
text-align: left;
`


