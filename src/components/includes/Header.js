import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <>
        <HeaderContainer>
            <Main>
                <SectionLeft>
                    <SectionNav>
                        <SectionNavLink>
                            <NavImage  src={require("../images/nav_icon.png")}alt="nav slider" />
                        </SectionNavLink>
                        <SectionLogo>
                            <SectionHighlight>
                                <SectionLogoLink>
                                    <LogoImage src={require("../images/logo.png")} alt ="logo" />
                                </SectionLogoLink>
                            </SectionHighlight>
                        </SectionLogo>
                    </SectionNav>
                </SectionLeft>
                <SectionMiddle> 
                    <SectionContainer>
                        <SectionSearchIcon>
                            <SearchImage src={require("../images/search.png")} alt="search icon" />
                        </SectionSearchIcon>
                        <SectionInput>
                            <SearchInput placeholder='type here to search...' />
                        </SectionInput>
                    </SectionContainer>
                </SectionMiddle>
                <SectionRight>
                    <NavList>
                        <LoginButton>Log in</LoginButton>
                        <SignupButton>SignUp</SignupButton>
                    </NavList>
                </SectionRight>
            </Main>
            <SectionMainNav>
                <SectionNavTop>
                    <ProfileImageContainer>
                        <ProfileImage src={require("../images/profile_demo.png") }alt="profileIMage"/>
                    </ProfileImageContainer>
                    <ProfileDetails>
                        <ProfileName>Nadeer</ProfileName>
                        <ProfileEmail>Modnadeerrahman@gmail.com</ProfileEmail>
                    </ProfileDetails>
                    <SectionProfile>
                        <ProfileLink></ProfileLink>
                    </SectionProfile>
                    <SectionOrder>
                        <OrderLink></OrderLink>
                    </SectionOrder>
                </SectionNavTop>
                <SectionNavBottom>
                    <SectionCategories>
                        <CategoryTitle></CategoryTitle>
                        <CategoryLists>
                            <Category>
                                <CategoryCheckBox/><CategoryLabel> Dessert</CategoryLabel>
                            </Category>
                            <Category>
                                <CategoryCheckBox/><CategoryLabel> Chinese</CategoryLabel>
                            </Category>
                            <Category>
                                <CategoryCheckBox/><CategoryLabel> Indian</CategoryLabel>
                            </Category>
                            <Category>
                                <CategoryCheckBox/><CategoryLabel> Arabian</CategoryLabel>
                            </Category>
                        </CategoryLists>
                        <SectionFilter>
                            <SectionButton>Filter</SectionButton>
                        </SectionFilter>
                    </SectionCategories>
                </SectionNavBottom>
            </SectionMainNav>
        </HeaderContainer>
    </>
  )
}
const HeaderContainer = styled.div`

`

const Main = styled.div`
background-color:#ffaa11;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 30px;
height:80px;
`
const SectionLeft = styled.div`
width: 30%;
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
background-color: #ffaf20;
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
background-color: #ffaf20;
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
const LoginButton = styled(Link)`
margin-right: 20px;
font-size: 20px;
font-weight: 600;
display: block;

`
const SignupButton = styled(Link)`
padding: 12px 16px;
background-color: #d39127;
font-size: 20px;
font-weight: 600;
border-radius: 30px;
display: block;
color:#fff ;

`
const SectionMainNav = styled.div`
width: 30%;
`
const SectionNavTop = styled.div``
const ProfileImageContainer = styled.div``
const ProfileImage = styled.img``
const ProfileDetails = styled.div``
const ProfileName = styled.h1``
const ProfileEmail = styled.h2``
const SectionProfile = styled.div``
const ProfileLink = styled(Link)``
const SectionOrder = styled.div``
const OrderLink = styled(Link)``
const SectionNavBottom = styled.div``
const SectionCategories = styled.div``
const CategoryTitle = styled.h1``
const CategoryLists = styled.ul``
const Category = styled.li``
const CategoryCheckBox = styled.input``
const CategoryLabel = styled.label``
const SectionFilter = styled.div``
const SectionButton = styled.button``


