import React from 'react'
import styled from "styled-components"

export default function Header() {
  return (
    <>
        <Main>
            <SectionLeft>
                <SectionNav>
                    <SectionNavLink>
                        <NavImage src="" alt ="" />
                    </SectionNavLink>
                    <SectionLogo>
                        <SectionHighlight>
                            <SectionLogoLink>
                                <LogoImage src="" alt ="" />
                            </SectionLogoLink>
                        </SectionHighlight>
                    </SectionLogo>
                </SectionNav>
            </SectionLeft>
            <SectionMiddle> 
                <SectionContainer>
                    <SectionSearchIcon>
                        <SearchImage src="" alt="" />
                    </SectionSearchIcon>
                    <SectionInput>
                        <SearchInput />
                    </SectionInput>
                </SectionContainer>
            </SectionMiddle>
            <SectionRight>
                <NavList>
                    <LoginButton></LoginButton>
                    <SignupButton></SignupButton>
                </NavList>
            </SectionRight>
        </Main>
    </>
  )
}

const Main = styled.div``
const SectionLeft = styled.div``
const SectionNav = styled.div``
const SectionNavLink = styled.a``
const NavImage = styled.img``
const SectionLogo = styled.div``
const SectionHighlight = styled.h1``
const SectionLogoLink = styled.a``
const LogoImage = styled.img``
const SectionMiddle = styled.div``
const SectionContainer = styled.div``
const SectionSearchIcon = styled.div``
const SearchImage = styled.img``
const SectionInput = styled.div``
const SearchInput = styled.input``
const SectionRight = styled.div``
const NavList = styled.div``
const LoginButton = styled.div``
const SignupButton = styled.div``



