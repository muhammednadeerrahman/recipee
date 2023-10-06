import React,{useState} from 'react'
import Helmet from "react-helmet"
import styled from 'styled-components'

export default function Dishes() {
	const [dishes , setDishes] = useState( {name:"nadeer"})


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
      	<SectionDishes>
			<h1>{dishes}</h1>
    		<LeftSectionDishes>
				{renderDishes()}
			</LeftSectionDishes>
        	<RightSectionDishes>
        		<SectionCategories>
					<CategoryTitle>Categories</CategoryTitle>
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

			</RightSectionDishes>
        </SectionDishes>

    </>
  )
}


const SectionDishes = styled.div`
display: flex;
`
const LeftSectionDishes = styled.div`
width:70%;

`
const RightSectionDishes = styled.div`
width: 30%;
`

const SectionCategories = styled.div``
const CategoryTitle = styled.h1``
const CategoryLists = styled.ul``
const Category = styled.li``
const CategoryCheckBox = styled.input``
const CategoryLabel = styled.label``
const SectionFilter = styled.div``
const SectionButton = styled.button``


