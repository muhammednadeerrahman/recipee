import React,{useContext, useEffect, useState} from 'react'
import Helmet from "react-helmet"
import { useNavigate,Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../includes/Header'
import axios from "axios"
import { userContext } from '../../App'


export default function Dishes() {

	const [dishes , setDishes] = useState([])
    const [category, setCategory] = useState([])
	const [selectedCategories, setSelectedCategories] = useState([]);

	const {userdata,updateUserData} = useContext(userContext)

	const navigate = useNavigate()

	useEffect(()=>{

		const categoryFilter = selectedCategories.join(',');

		axios.get("http://127.0.0.1:8018/api/v1/dishes/",
		{headers : {
			Authorization : `Bearer ${userdata?.access}`,
		},
		params: {
			filter: categoryFilter, 
		  },
	})
		.then(function(response){
			console.log(response.data.data)
			setDishes(response.data.data)

		})
		.catch(function(error){
			console.log(error)
		})


		axios.get("http://127.0.0.1:8018/api/v1/dishes/create/get_categories/",
		{headers : {
			Authorization : `Bearer ${userdata?.access}`,
		},
	})
		.then(function(response){
			console.log(response.data)
			setCategory(response.data)

		})
		.catch(function(error){
			console.log(error)
		})


	},[selectedCategories])




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
				setDishes(response.data.data)
			})
		})
		.catch(function(error) {
			console.log(error)
		  });
	}

	let renderDishes=()=>{
		return(
			dishes.map((item)=>(
				
				<DishItem key = {item.id}    >
						<ImageContainer>
							<DishImage onClick={()=>navigate(`/dish/${item.id}`)} src={item.featured_image} alt="food" />
						</ImageContainer>
						<FoodDetails>
							<FoodNameContainer>
								<FoodName>{item.dish_name}</FoodName>
								<FoodLike>
								{ (item.is_liked == false) ?
								 (
									<LikeLink onClick={()=>handleLike(item.id)} ><LikeImage src={require("../images/heart1.png")} /></LikeLink>
								 ):
								 (
									<LikeLink onClick={()=>handleLike(item.id)} ><LikeImage src={require("../images/heart2.png")} /></LikeLink>
								 )}
								<LikeCount >{item.like} Likes</LikeCount>
								</FoodLike>
							</FoodNameContainer>
							<PostedBy>posted By : {item.user_name}</PostedBy>
							<PostedDate>posted Date : {item.date}</PostedDate>
						</FoodDetails>
					</DishItem>
			
				
				
			))

		)
		
	}
	const handleCategoryChange = (categoryId,checked)=>{

		if (checked){
			setSelectedCategories([...selectedCategories,categoryId])
		}
		else{
			setSelectedCategories(selectedCategories.filter((id)=>id !== categoryId))
		}
		const categoryFilter = selectedCategories.join(',');

  		navigate(`?categories=${categoryFilter}`);

	}


  return (
    <>
    	<Helmet>
        	<title>Recipee</title>
      	</Helmet>
		<Header/>
		<MainContainer>
			<DisplaySection>
				<DisplayTitle>RECIPEE</DisplayTitle>
				<DisplayTitle>Its Fun..!</DisplayTitle>
				<DisplayTitle>Share, Try, Cook, Eat</DisplayTitle>

			</DisplaySection>
			<SectionDishes>
				<LeftSectionDishes>
					{renderDishes()}
					

				</LeftSectionDishes>
				<RightSectionDishes>
					<SectionCategories>
						<CategoryTitle>Categories</CategoryTitle>
						<CategoryLists>
							{category.map((categories)=>(
								<Category  key={categories.id}>											
									<CategoryCheckBox 
										id={categories.id} 
										type='checkbox'
										checked = {selectedCategories.includes(categories.id)}
										onChange={(e)=> handleCategoryChange(categories.id, e.target.checked)}
										
									/>
									<CategoryLabel for={categories.id}> {categories.name}</CategoryLabel>
								</Category>
							))}
						</CategoryLists>
						<SectionFilter>
							<SectionButton>Filter</SectionButton>
						</SectionFilter>
					</SectionCategories>
				</RightSectionDishes>
			</SectionDishes>
		</MainContainer>
	

    </>
  )
}


const MainContainer = styled.div`
padding: 80px 0 0;
`
const DisplaySection = styled.div`
border-bottom: 4px solid #ffaa11;
width: 100%;
height: 300px;
background-image: url(${require("../images/food9.webp")});
background-repeat:no-repeat;
background-size:contain;
background-position:right 0 top 0;
display: flex;
background-color: #eef0f4;
`
const DisplayTitle = styled.h1`
color: #381a5a;
text-align: left;
padding-left: 100px;
padding-top: 50px;
display: inline-block;
height: 40px;
font-weight: 900;
`
const SectionDishes = styled.div`
flex-direction:row-reverse;
display: flex;
justify-content: space-between;
`
const LeftSectionDishes = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
width:80%;
padding: 20px 50px;

`

const DishItem = styled.div`
width: 30%;
margin-top: 30px;
padding: 20px;

`
const ImageContainer = styled.div`
width: 100%;
height: 170px;
`
const DishImage = styled.img`
width: 100%;
height: 170px;
display: inline-block;
border-radius: 8px;
cursor:pointer;
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
const LikeLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
width: 20px;
margin-right: 10px;
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
const RightSectionDishes = styled.div`
background-color: #381a5a;
width: 20%;
padding: 35px 30px;
border-right: 4px solid #ffaa11;
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
font-size: 20px;
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


