import React from 'react'

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
                                <SectionLogo src="" alt ="" />
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
                    <LoginButton></LoginButton>
                </NavList>
            </SectionRight>
        </Main>
    </>
  )
}
