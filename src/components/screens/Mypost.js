import React from 'react'
import Header from '../includes/Header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Mypost() {
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
              	<DishItem   >
					<ImageContainer>
						<DishImage src={require("../images/firedrice.jpg")} alt="food" />
					</ImageContainer>
					<FoodDetails>
						<FoodNameContainer>
							<FoodName>Biriyani</FoodName>
							<FoodLike>
								<LikeImage src={require("../images/love.jpg")}  />
								<LikeCount> 22 likes</LikeCount>
							</FoodLike>
						</FoodNameContainer>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
						<PostChange>
							<EditPost>
								<EditImageContanier>
									<EditImage src={require("../images/edit.svg").default} alt="EditImage" />
								</EditImageContanier>
								<EditTitle>edit</EditTitle>
							</EditPost>
							<DeletePost>
								<DeleteImageContanier>
									<DeleteImage src={require("../images/delete.svg").default} alt="DeleteImage" />
								</DeleteImageContanier>
								<DeleteTitle>delete</DeleteTitle>
							</DeletePost>
						</PostChange>
					</FoodDetails>
            	</DishItem>

				<DishItem   >
					<ImageContainer>
						<DishImage src={require("../images/firedrice.jpg")} alt="food" />
					</ImageContainer>
					<FoodDetails>
						<FoodNameContainer>
							<FoodName>Biriyani</FoodName>
							<FoodLike>
								<LikeImage src={require("../images/love.jpg")}  />
								<LikeCount> 22 likes</LikeCount>
							</FoodLike>
						</FoodNameContainer>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
						<PostChange>
							<EditPost>
								<EditImageContanier>
									<EditImage src={require("../images/edit.svg").default} alt="EditImage" />
								</EditImageContanier>
								<EditTitle>edit</EditTitle>
							</EditPost>
							<DeletePost>
								<DeleteImageContanier>
									<DeleteImage src={require("../images/delete.svg").default} alt="DeleteImage" />
								</DeleteImageContanier>
								<DeleteTitle>delete</DeleteTitle>
							</DeletePost>
						</PostChange>
					</FoodDetails>
            	</DishItem>

				<DishItem   >
					<ImageContainer>
						<DishImage src={require("../images/firedrice.jpg")} alt="food" />
					</ImageContainer>
					<FoodDetails>
						<FoodNameContainer>
							<FoodName>Biriyani</FoodName>
							<FoodLike>
								<LikeImage src={require("../images/love.jpg")}  />
								<LikeCount> 22 likes</LikeCount>
							</FoodLike>
						</FoodNameContainer>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
						<PostChange>
							<EditPost>
								<EditImageContanier>
									<EditImage src={require("../images/edit.svg").default} alt="EditImage" />
								</EditImageContanier>
								<EditTitle>edit</EditTitle>
							</EditPost>
							<DeletePost>
								<DeleteImageContanier>
									<DeleteImage src={require("../images/delete.svg").default} alt="DeleteImage" />
								</DeleteImageContanier>
								<DeleteTitle>delete</DeleteTitle>
							</DeletePost>
						</PostChange>
					</FoodDetails>
            	</DishItem>
				<DishItem   >
					<ImageContainer>
						<DishImage src={require("../images/firedrice.jpg")} alt="food" />
					</ImageContainer>
					<FoodDetails>
						<FoodNameContainer>
							<FoodName>Biriyani</FoodName>
							<FoodLike>
								<LikeImage src={require("../images/love.jpg")}  />
								<LikeCount> 22 likes</LikeCount>
							</FoodLike>
						</FoodNameContainer>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
						<PostChange>
							<EditPost>
								<EditImageContanier>
									<EditImage src={require("../images/edit.svg").default} alt="EditImage" />
								</EditImageContanier>
								<EditTitle>edit</EditTitle>
							</EditPost>
							<DeletePost>
								<DeleteImageContanier>
									<DeleteImage src={require("../images/delete.svg").default} alt="DeleteImage" />
								</DeleteImageContanier>
								<DeleteTitle>delete</DeleteTitle>
							</DeletePost>
						</PostChange>
					</FoodDetails>
            	</DishItem>

				<DishItem   >
					<ImageContainer>
						<DishImage src={require("../images/firedrice.jpg")} alt="food" />
					</ImageContainer>
					<FoodDetails>
						<FoodNameContainer>
							<FoodName>Biriyani</FoodName>
							<FoodLike>
								<LikeImage src={require("../images/love.jpg")}  />
								<LikeCount> 22 likes</LikeCount>
							</FoodLike>
						</FoodNameContainer>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
						<PostChange>
							<EditPost>
								<EditImageContanier>
									<EditImage src={require("../images/edit.svg").default} alt="EditImage" />
								</EditImageContanier>
								<EditTitle>edit</EditTitle>
							</EditPost>
							<DeletePost>
								<DeleteImageContanier>
									<DeleteImage src={require("../images/delete.svg").default} alt="DeleteImage" />
								</DeleteImageContanier>
								<DeleteTitle>delete</DeleteTitle>
							</DeletePost>
						</PostChange>
					</FoodDetails>
            	</DishItem>

				<DishItem   >
					<ImageContainer>
						<DishImage src={require("../images/firedrice.jpg")} alt="food" />
					</ImageContainer>
					<FoodDetails>
						<FoodNameContainer>
							<FoodName>Biriyani</FoodName>
							<FoodLike>
								<LikeImage src={require("../images/love.jpg")}  />
								<LikeCount> 22 likes</LikeCount>
							</FoodLike>
						</FoodNameContainer>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
					
						<PostChange>
							<EditPost>
								<EditImageContanier>
									<EditImage src={require("../images/edit.svg").default} alt="EditImage" />
								</EditImageContanier>
								<EditTitle>edit</EditTitle>
							</EditPost>
							<DeletePost>
								<DeleteImageContanier>
									<DeleteImage src={require("../images/delete.svg").default} alt="DeleteImage" />
								</DeleteImageContanier>
								<DeleteTitle>delete</DeleteTitle>
							</DeletePost>
						</PostChange>
					</FoodDetails>
            	</DishItem>
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

