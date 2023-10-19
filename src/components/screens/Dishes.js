import React,{useContext, useEffect, useState} from 'react'
import Helmet from "react-helmet"
import { useNavigate,Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../includes/Header'
import axios from "axios"
import { userContext } from '../../App'

export default function Dishes() {
	const [username, setUsername] = useState("")
    const [isNav,setIsNav] = useState(false)
	const [dishes , setDishes] = useState([])
	const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("")


	const {userdata,updateUserData} = useContext(userContext)
	const navigate = useNavigate()

	useEffect(()=>{
		axios.get("http://127.0.0.1:8018/api/v1/dishes/",
		{headers : {
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
		setLoading(false);

	},[])

	
	const HeartIcon = ({ isLiked }) => {
		return (
		  <div>
			{isLiked ? (
			  <img src={require("../images/heart2.png")} alt="Liked" />
			) : (
			  <img src={require("../images/heart1.png")} alt="Not Liked" />
			)}
		  </div>
		);
	  };

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
									{(item.is_liked == true )?
									(
										<LikeLink><LikeImage src={require("../images/heart2.png")} /></LikeLink>
									):
									(
										<LikeLink><LikeImage src={require("../images/heart1.png")} /></LikeLink>

									)}
									<LikeCount>{item.like} likes</LikeCount>
								</FoodLike>
							</FoodNameContainer>
							<PostedBy>posted By : {item.user_name}</PostedBy>
							<PostedDate>posted Date : {item.date}</PostedDate>
						</FoodDetails>
					</DishItem>
			
				
				
			))

		)
		
	}

	let handleSearch = ()=>{
		
		console.log(search)
	
		axios.get("http://127.0.0.1:8018/api/v1/dishes/",{params: {q: search },
		headers : {
			Authorization : `Bearer ${userdata?.access}`,
		},
		})
		.then(function(response){
			console.log(response.data.data)
			setDishes(response.data.data)

		})
	}

	let handleKeyPress = (e)=>{
		if (e.key == 'Enter'){
			handleSearch()

		}

	}
	const handleLog = () =>{
        updateUserData({type : "LOGOUT"})
    }

		
  return loading?(<h1>loading...</h1>) : (
    <>
    	<Helmet>
        	<title>Recipee</title>
      	</Helmet>
		  <Headermain>
            <Main>
                <SectionLeft >
                    <SectionNav >
                        <SectionNavLink  >
                            <NavImage onClick={()=>setIsNav(!isNav)} src={require("../images/nav_icon.png")}alt="nav slider" />
                        </SectionNavLink>
                        <SectionLogo>
                            <SectionHighlight>
                                <SectionLogoLink to='/'>
                                    <LogoImage src={require("../images/logo.png")} alt ="logo" />
                                </SectionLogoLink>
                            </SectionHighlight>
                        </SectionLogo>
                    </SectionNav>
                </SectionLeft>
                <SectionMiddle> 
                    <SectionContainer>
                        <SectionSearchIcon>
                            <SearchImage src={require("../images/search.png")} alt="search icon"  />
                        </SectionSearchIcon>
                        <SectionInput>
                                <SearchInput 
                                    placeholder='type here to search...' 
                                    name ="q"
                                    value={search}
                                    onChange={(e)=>setSearch(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                        </SectionInput>
                    </SectionContainer>
                </SectionMiddle>
                <SectionRight>
                {userdata ? 
                   ( <NavList>
                        <NavImageContainer to= "/createpost" title='createpost' ><NavImages src={require("../images/create.png")} /></NavImageContainer>
                        <NavImageContainer to= "/favourite" title='favourites' ><NavImages src={require("../images/favourite.png")} /></NavImageContainer>
                        <NavImageContainer to= "/mypost" title='favourites' ><NavImages src={require("../images/mypost.png")} /></NavImageContainer>
                    </NavList>):
                    (
                    <NavList>
                        <LoginButton to = "/login">Log in</LoginButton>
                        <SignupButton to = "/signup">Sign up</SignupButton>
                    </NavList>

                )}
                    
                </SectionRight>
            </Main>
            <SectionMainNav className={isNav ? 'visible' :'hidden'}>
                <SectionNavLeft>
                    <LogStatus>
                        { userdata ? (
                            <LogButton  onClick={()=>handleLog()}>Logout</LogButton>
                        ):
                        (
                            <LogButton  to="/login" >Log in</LogButton>
                        )}
                        
                    </LogStatus>
                    <SectionNavTop>
                        <ProfileImageContainer>
                            <ProfileImage src={require("../images/profile_demo.png") }alt="profileIMage"/>
                        </ProfileImageContainer>
                        <ProfileDetails>
                            <ProfileName>{username}</ProfileName>
                            <ProfileEmail>modnadeerrahman@gmail.com</ProfileEmail>
                            <SectionProfile>
                                <ProfileLink to ="/profile">view profile</ProfileLink>
                            </SectionProfile>
                        </ProfileDetails>  
                    </SectionNavTop>
                    <SectionNavBottom>
                        <SectionOrder>
                            <OrderLink to="/mypost">
                                <TitleSpan >My Posts</TitleSpan> <SliderImage src={require("../images/scroldown.png")} alt = "slider Image"/>
                            </OrderLink>
                        </SectionOrder>
                        <SectionOrder>
                            <OrderLink to="/createpost">
                            <TitleSpan >Create Post</TitleSpan> <SliderImage src={require("../images/scroldown.png")} alt = "slider Image"/>
                            </OrderLink>
                        </SectionOrder>
                       
                    </SectionNavBottom>
                </SectionNavLeft>
                <SectionNavRight onClick={()=>setIsNav(!isNav)}></SectionNavRight>
            </SectionMainNav>
        </Headermain>
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
		</MainContainer>
	

    </>
  )
}
const Headermain = styled.div`
position: fixed;
width: 100%;
`

const Main = styled.div`
position: relative;
background-color:#ffaa11;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 30px;
height:80px;
width: 100%;
`
const SectionLeft = styled.div`
width: 20%;
display: flex;
align-items: center;
`
const SectionNav = styled.div`
display: flex;
justify-content: center;;
align-items: center;


`
const SectionNavLink = styled(Link)`
display: block;
width: 30px;
`
const NavImage = styled.img`
display: block;
width: 100%;
`
const SectionLogo = styled.div`
width: 170px;
height: 90px;
display: flex;
align-items: center;
`
const SectionHighlight = styled.h1`
height: 100%;
width: 100%;


`
const SectionLogoLink = styled(Link)`
width: 100%;
height: 100%;
display: block;

`
const LogoImage = styled.img`
display: block;
height: 100%;
width: 100%;
`
const SectionMiddle = styled.div`
width: 55%;
background-color: #ffbe4b;
padding: 20px;
border-radius:10px;

`
const SectionContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
const SectionSearchIcon = styled.div`
width: 15px;
margin-right: 15px;

`
const SearchImage = styled.img`
display: block;
width: 100%;
`
const SectionInput = styled.div`
width: 80%;
`
const SearchInput = styled.input`
display:block;
width:100%;
background-color: #ffbe4b;
border: 0px;
&:focus{
    outline: none;
}

`
const SectionRight = styled.div`
width: 15%;
display: flex;
align-items: center;
margin-left: 20px;
`
const NavList = styled.div`
display: flex;
align-items: center;
`
const NavImageContainer = styled(Link)`
display: block;
width: 30px;
margin-left: 30px;
`
const NavImages = styled.img`
display: block;
width: 100%;
`
const LoginButton = styled(Link)`
margin-right: 20px;
font-size: 20px;
font-weight: 700;
display: block;
color: #381a5a;

`
const SignupButton = styled(Link)`
padding: 12px 16px;
background-color: #381a5a;
font-size: 20px;
font-weight: 600;
border-radius: 10px;
display: block;
color: #ffaa11 ;

`
const SectionMainNav = styled.div`
display: flex;
z-index:1;
position: absolute;
left: 0;
top: 0;
width: 100%;
height:700px;;

`
const SectionNavLeft = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 30%;
background-color: white;
`
const SectionNavRight = styled.div`
opacity:.2;
width: 70%;
background-color: #6d6969;
`
const LogStatus = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
margin-top: 10px;
width: 80%;
`
const LogButton = styled(Link)`
display: inline-block;
color:#ffaa11;
font-weight: 600;
font-size: 20px;
`

const SectionNavTop = styled.div`
margin-top: 60px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const ProfileImageContainer = styled.div`
width:150px;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
overflow: hidden;
border: 1px solid #ffaa11;
margin-bottom: 30px;
`
const ProfileImage = styled.img`
display: block;
width: 98%;
height: 98%;
border-radius: 50%;

`
const ProfileDetails = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 30px;
`
const ProfileName = styled.h1`
color: #686868;
font-weight: 600;
font-size: 20px;
text-align: center;
color: #ffaa11;
`
const ProfileEmail = styled.h2`
color: #686868;
font-weight: 600;
font-size: 20px;
text-align: center;
margin: 10px 0 20px;

`
const SectionProfile = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
const ProfileLink = styled(Link)`
    display: block;
    border-radius: 10px;
    background-color: #381a5a;
    color: #ffaa11;
    padding: 10px 16px;
    font-size: 20px;
    font-weight: 600;
`
const SectionNavBottom = styled.div`
width: 90%;
background-color: #eee;
`
const SectionOrder = styled.div`
&:first-child{
    border-bottom: 1px solid #381a5a;
}
`
const OrderLink = styled(Link)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
color: #ffaa11;


`
const TitleSpan = styled.span`
font-size: 16px;
font-weight: 600;
display: block;
`
const SliderImage = styled.img`
display: block;
width: 10px;
transform: rotate(270deg);

`

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
cursor: pointer;
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


