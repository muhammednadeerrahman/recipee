import React,{useContext, useEffect, useState} from 'react'
import Helmet from "react-helmet"
import { useNavigate,Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../includes/Header'
import axios from "axios"
import { userContext } from '../../App'


export default function Search() {
    const [username, setUsername] = useState("")
    const [isNav,setIsNav] = useState(false)
	const [dishes , setDishes] = useState([])
	const [loading, setLoading] = useState(true);
	const [selectedCategories, setSelectedCategories] = useState([]);
    const [category, setCategory] = useState([])

    const {q} = useParams()

	const {userdata,updateUserData} = useContext(userContext)

	const navigate = useNavigate()

    useEffect(()=>{

            if (userdata?.access) {
				const categoryFilter = selectedCategories.join(',');
				navigate(`?filter=${categoryFilter}`);
                axios.get(`http://127.0.0.1:8018/api/v1/dishes/`,
                {   params: { 
                    q: q ,
                    filter : categoryFilter
                },
                    headers : {
                    Authorization : `Bearer ${userdata?.access}`,
                },
                })
                .then(function(response){
                    console.log(response.data.data)
                    setDishes(response.data.data)
        
        
                })
                .catch(function(error){
                    console.log(error)
                })
        } else {
            const categoryFilter = selectedCategories.join(',');
            navigate(`?filter=${categoryFilter}`);
            axios.get(`http://127.0.0.1:8018/api/v1/dishes/`,
            {   params: { 
                    q: q ,
                    filter : categoryFilter
                },
        
            })
            .then(function(response){
                console.log(response.data.data)
                setDishes(response.data.data)
    
    
            })
            .catch(function(error){
                console.log(error)
            })
        }
		
	  
    axios.get("http://127.0.0.1:8018/api/v1/dishes/create/get_categories/",)
    .then(function(response){
        console.log(response.data)
        setCategory(response.data)

    })
    .catch(function(error){
        console.log(error)
    })
    setLoading(false);
	},[selectedCategories, userdata, q])

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
                                <TitleContainer>
									<FoodName>{item.dish_name}</FoodName>
								</TitleContainer>
								<FoodLike>
                                {(item.is_liked !== null) ? (
										 (item.is_liked == false) ?
											(
											   <LikeLink onClick={()=>handleLike(item.id)} ><LikeImage src={require("../images/heart1.png")} /></LikeLink>
											):
											(
											   <LikeLink onClick={()=>handleLike(item.id)} ><LikeImage src={require("../images/heart2.png")} /></LikeLink>
											)
									)
									:(<LikeLink  ><LikeImage src={require("../images/heart1.png")} /></LikeLink>)
								}
									<LikeCount>{item.like} likes</LikeCount>
								</FoodLike>
							</FoodNameContainer>
							<PostedBy>{item.user_name}</PostedBy>
							<PostedDate>{item.date}</PostedDate>
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
	}

	
  return loading?(<h1>loading...</h1>) : (
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
						<CategoryTitle>Filter</CategoryTitle>
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
					</SectionCategories>
				</RightSectionDishes>
			</SectionDishes>
		</MainContainer>
    </>
  )
}

const MainContainer = styled.div`
padding: 80px 0 0;
@media (max-width:640px) {
	padding: 60px 0 0;
}
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
@media (max-width:1280px) {
	height: 200px;
}
@media (max-width:980px) {
	height: 150px; 
}
@media (max-width:640px) {
	height: 115px;
	border-bottom: 2px solid #ffaa11;
}
@media (max-width:480px) {
	display: none;
}
`
const DisplayTitle = styled.h1`
color: #381a5a;
text-align: left;
padding-left: 100px;
padding-top: 50px;
display: inline-block;
height: 40px;
font-weight: 900;
@media (max-width:980px) {
	display: none;
}
`
const SectionDishes = styled.div`
flex-direction:row-reverse;
display: flex;
justify-content: space-between;
@media (max-width:640px) {
	flex-direction:column-reverse;
}
`
const LeftSectionDishes = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
width:75%;
padding: 20px 50px;
@media (max-width:768px) {
	padding: 15px 15px;
}
@media (max-width:640px) {
	width:100%;
	justify-content: center;
}
`
const DishItem = styled.div`
width: 30%;
margin-top: 30px;
padding: 20px;
@media (max-width:1080px) {
	width: 33%;
	margin-top: 20px;
}
@media (max-width:980px) {
	width: 48%;
	margin-top: 20px;
}
@media (max-width:640px) {
	width: 90%;
}
@media (max-width:360px) {
	margin-top: 10px;
}
`
const ImageContainer = styled.div`
width: 100%;
height: 170px;

@media (max-width:1280px) {
	height: 150px;
}
@media (max-width:1080px) {
	height: 140px;
}
@media (max-width:640px) {
	height: 250px;
	margin-bottom: 20px;
}
@media (max-width:480px) {
	height: 200px;
}
@media (max-width:360px) {
	margin-bottom: 10px;
}
`
const DishImage = styled.img`
width: 100%;
height: 100%;
display: inline-block;
border-radius: 8px;
cursor:pointer;
`
const FoodDetails = styled.div`
`
const FoodNameContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column-reverse;
@media (max-width:1280px) {
	height: 45px}

`
const TitleContainer = styled.div`
align-items: left;
width: 100%;
@media (max-width:1080px) {

}
`
const FoodName = styled.h3`
font-size: 18px;
text-align: left;
@media (max-width:1280px) {
	font-size: 14px;
}
@media (max-width:1080px) {
	font-size: 12px;
}
@media (max-width:640px) {
	font-size: 16px;

}
`
const FoodLike = styled.div`
display: flex;
align-items: end;
margin: 10px 25px ;
width: 100%;
justify-content: flex-end;

@media (max-width:360px) {
	margin: 5px 5px ;
}
`
const LikeLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
width: 20px;
margin-right: 10px;
@media (max-width:1280px) {
	width: 15px;
}
`
const LikeImage = styled.img`
display: block;
width: 100%;
cursor: pointer;
`
const LikeCount = styled.div`
font-size: 12px;
@media (max-width:1280px) {
	font-size: 8px;

}
`
const PostedBy = styled.h3`
font-size: 14px;
text-align: left;
@media (max-width:1280px) {
	font-size: 12px;
	margin-bottom: 10px;
}
@media (max-width:1080px) {
	font-size: 10px;
	margin-bottom: 5px;
}
@media (max-width:640px) {
	font-size: 14px;
}
@media (max-width:360px) {
	font-size: 12px;
}
`
const PostedDate = styled.h3`
font-size: 14px;
text-align: left;
@media (max-width:1280px) {
	font-size: 12px;
}
@media (max-width:1280px) {
	font-size: 10px;
}
@media (max-width:640px) {
	font-size: 14px;
}
@media (max-width:360px) {
	font-size: 12px;
}
`
const RightSectionDishes = styled.div`
background-color: #381a5a;
width: 25%;
padding: 35px 30px;
border-right: 4px solid #ffaa11;
min-height: 100vh;
@media (max-width:768px){
	padding: 20px 10px;
}
@media (max-width:640px) {
	width:100%;
	min-height: 0;
	border: 2px solid #ffaa11;
	border-top: 0;
	padding: 10px;
}
`
const SectionCategories = styled.div`
`
const CategoryTitle = styled.h1`
margin-bottom: 30px;
text-align: left;
color: #fff;
font-style: italic;
@media (max-width:1280px){
    font-size: 23px;
}
@media (max-width:768px){
    font-size: 19px;
}
@media (max-width:640px){
	margin-bottom: 10px;
}
`
const CategoryLists = styled.ul`
display: flex;
align-items: start;
justify-content: start;
flex-direction: column;
@media (max-width:640px) {
	flex-direction: row;
	flex-wrap: wrap;
}
`
const Category = styled.li`
margin-bottom: 20px;
@media (max-width:640px) {
	width: 30%;
	margin-bottom: 10px;
}
`
const CategoryCheckBox = styled.input`
@media (max-width:640px){
	width: 10px;
	height: 10px;
}
`
const CategoryLabel = styled.label`
color: #fff;
font-size: 20px;
font-style:italic;
margin-left:15px;
@media (max-width:1280px){
    font-size: 15px;
}
@media (max-width:640px){
    font-size: 12px;
}
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


