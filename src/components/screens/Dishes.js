import React,{useState} from 'react'
import Helmet from "react-helmet"
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../includes/Header'

export default function Dishes() {
	const [dishes , setDishes] = useState( {name:"nadeer"})
	const navigate = useNavigate()


	let renderDishes=()=>{
		return(
		<ul>
			<li>{dishes.name}</li>
		</ul>

		)


	}
  return (
    <>
    	<Helmet>
        	<title>Recipee</title>
      	</Helmet>
		<Header/>
      	<SectionDishes>
    		<LeftSectionDishes>
				<DishItem  onClick={()=>navigate("/dish")}  >
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
						<PostedBy>posted By : Nadeer</PostedBy>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
					</FoodDetails>
				</DishItem>

				<DishItem onClick={()=>navigate("/dish")} >
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
						<PostedBy>posted By : Nadeer</PostedBy>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
					</FoodDetails>
				</DishItem>

				<DishItem onClick={()=>navigate("/dish")} >
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
						<PostedBy>posted By : Nadeer</PostedBy>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
					</FoodDetails>
				</DishItem>

				<DishItem onClick={()=>navigate("/dish")} >
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
						<PostedBy>posted By : Nadeer</PostedBy>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
					</FoodDetails>
				</DishItem>

				<DishItem onClick={()=>navigate("/dish")} >
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
						<PostedBy>posted By : Nadeer</PostedBy>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
					</FoodDetails>
				</DishItem>

				<DishItem onClick={()=>navigate("/dish")} >
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
						<PostedBy>posted By : Nadeer</PostedBy>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
					</FoodDetails>
				</DishItem>

				<DishItem onClick={()=>navigate("/dish")} >
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
						<PostedBy>posted By : Nadeer</PostedBy>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
					</FoodDetails>
				</DishItem>

				<DishItem onClick={()=>navigate("/dish")} >
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
						<PostedBy>posted By : Nadeer</PostedBy>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
					</FoodDetails>
				</DishItem>

				<DishItem onClick={()=>navigate("/dish")} >
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
						<PostedBy>posted By : Nadeer</PostedBy>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
					</FoodDetails>
				</DishItem>

				<DishItem onClick={()=>navigate("/dish")} >
					<ImageContainer>
						<DishImage src={require("../images/firedrice.jpg")} alt="food" />
					</ImageContainer>
					<FoodDetails>
						<FoodNameContainer>
							<FoodName>Biriyani</FoodName>
							<FoodLike>
								<LikeImage src={require("../images/love.jpg")} alt="likebutton" />
								<LikeCount> 22 likes</LikeCount>
							</FoodLike>
						</FoodNameContainer>
						<PostedBy>posted By : Nadeer</PostedBy>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
					</FoodDetails>
				</DishItem>

				<DishItem onClick={()=>navigate("/dish")} >
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
						<PostedBy>posted By : Nadeer</PostedBy>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
					</FoodDetails>
				</DishItem>

				<DishItem onClick={()=>navigate("/dish")} >
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
						<PostedBy>posted By : Nadeer</PostedBy>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
					</FoodDetails>
				</DishItem>

				<DishItem onClick={()=>navigate("/dish")} >
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
						<PostedBy>posted By : Nadeer</PostedBy>
						<PostedDate>posted Date : sep 3, 2022</PostedDate>
					</FoodDetails>
				</DishItem>

			</LeftSectionDishes>
        	<RightSectionDishes>
        		<SectionCategories>
					<CategoryTitle>Categories</CategoryTitle>
					<CategoryLists>
						<Category>
							<CategoryCheckBox id='1' type='checkbox'/><CategoryLabel for='1'> Dessert</CategoryLabel>
						</Category>
						<Category>
							<CategoryCheckBox id='2'  type='checkbox'/><CategoryLabel for='2'> Chinese</CategoryLabel>
						</Category>
						<Category>
							<CategoryCheckBox id='3' type='checkbox'/><CategoryLabel for='3'> Indian</CategoryLabel>
						</Category>
						<Category>
							<CategoryCheckBox id='4' type='checkbox'/><CategoryLabel for='4'> Arabian</CategoryLabel>
						</Category>
					</CategoryLists>
					<SectionFilter>
						<SectionButton>Filter</SectionButton>
					</SectionFilter>
				</SectionCategories>

			</RightSectionDishes>
        </SectionDishes>

    </>
  )
}


const SectionDishes = styled.div`
display: flex;
justify-content: space-between;
`
const LeftSectionDishes = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
width:80%;
padding: 100px 50px;

`
const DishItem = styled.div`
width: 30%;
margin-top: 30px;
padding: 20px;
cursor: pointer;
`
const ImageContainer = styled.div`
width: 100%;
`
const DishImage = styled.img`
width: 100%;
display: inline-block;
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
const PostedBy = styled.h3`
font-size: 16px;
text-align: left;
`
const PostedDate = styled.h4`
font-size: 16px;
text-align: left;


`
const RightSectionDishes = styled.div`
background-color: #381a5a;
width: 20%;
padding: 35px 30px;
`

const SectionCategories = styled.div`

`
const CategoryTitle = styled.h1`
margin-bottom: 30px;
text-align: left;
color: #fff;
`
const CategoryLists = styled.ul`
display: flex;
align-items: start;
justify-content: start;
flex-direction: column;
`
const Category = styled.li`
margin-bottom: 20px;
`
const CategoryCheckBox = styled.input`

`
const CategoryLabel = styled.label`
color: #fff;
`
const SectionFilter = styled.div`


`
const SectionButton = styled.button`
padding: 12px 16px;
border-radius: 12px;
border: 0px;
width: 80%;
color: #381a5a;
font-size: 22px;
font-weight: 600;
background-color: #ffa90e;
`


