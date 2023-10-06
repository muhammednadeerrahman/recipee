import React from 'react'
import Helmet from "react-helmet"
import styled from 'styled-components'

export default function Dishes() {
  return (
    <>
      <Helmet>
        <title>Recipee</title>
      </Helmet>
      <h1>helloworld</h1>
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
    </>
  )
}


const SectionCategories = styled.div``
const CategoryTitle = styled.h1``
const CategoryLists = styled.ul``
const Category = styled.li``
const CategoryCheckBox = styled.input``
const CategoryLabel = styled.label``
const SectionFilter = styled.div``
const SectionButton = styled.button``


