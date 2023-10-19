import React, { useContext, useEffect,useState } from 'react'
import styled from "styled-components"
import {Link, useNavigate} from "react-router-dom"
import { userContext } from '../../App'

export default function Header() {

    const [username, setUsername] = useState("")
    const [isNav,setIsNav] = useState(false)
    const [search, setSearch] = useState("")



    const {userdata,updateUserData} = useContext(userContext)
    const navigate = useNavigate()


    const handleLog = () =>{
        updateUserData({type : "LOGOUT"})
    }

    


  return (
    <>
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
// const SectionMiddle = styled.div`
// width: 55%;
// background-color: #ffbe4b;
// padding: 20px;
// border-radius:10px;

// `
// const SectionContainer = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;

// `
// const SectionSearchIcon = styled.div`
// width: 15px;
// margin-right: 15px;

// `
// const SearchImage = styled.img`
// display: block;
// width: 100%;
// `
// const SectionInput = styled.div`
// width: 80%;
// `
// const SearchInput = styled.input`
// display:block;
// width:100%;
// background-color: #ffbe4b;
// border: 0px;
// &:focus{
//     outline: none;
// }

// `
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



