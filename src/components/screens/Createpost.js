import { useEffect, useState} from 'react'
import Header from '../includes/Header'
import styled from 'styled-components'
import axios from 'axios'



export default function Createpost() {
    const [category, setCategory] = useState([])

    useEffect(()=>{
        axios.get("http://127.0.0.1:8018/api/v1/dishes/create/get_categories/")
        .then(function(response){
            console.log(response.data)
            setCategory(response.data)
        
        })
        .catch(function(error){
            console.log(error)
        })


    },[])

    let  categoryList = ()=>{
        return(
            category.map((categories)=>(
                <>
                    <CategoryLabel key={categories.id}>{categories.name}</CategoryLabel>
                    <CategoryInput
                        type="checkbox"
                        id={categories.id}
                        value={categories.id}
                    />
                </>

            
    
    
            ))

        )
        

    }
    

    let formsubmit = (e)=>{
        e.preventDefault()
        

    }


  return (
    <>
        <Header/>
        <CreatePage>
            <CreatePostForm onSubmit={formsubmit} encType='multipart/form-data'>
                <TitleContainer>
                    <DishTitle>Title</DishTitle>
                    <DishTitleInput/>
                </TitleContainer>
                <TitleContainer>
                    <CategoryTitle>Category</CategoryTitle>

                        {categoryList()}

                </TitleContainer>
                <TitleContainer>
                    <ImageTitle>Image</ImageTitle>
                    <ImageInput type='file'/>
                </TitleContainer>
                <TitleContainer>
                    <IngredientTitle>Ingredients</IngredientTitle>
                    <IngredientInput/>
                </TitleContainer>
                <TitleContainer>
                    <PreparationTitle>Preparations</PreparationTitle>
                    <PreparationInput/>
                </TitleContainer>
                <SubmitContainer>
                    <SubmitButton>Submit</SubmitButton>
                </SubmitContainer>

            </CreatePostForm>
        </CreatePage>
    </>
  )
}

const CreatePage = styled.div`
padding: 130px 100px;
background-color: #381a5a;
`
const CreatePostForm = styled.form`
background-color: #ffaa11;
padding: 50px;
border-radius: 12px;
`
const TitleContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;

`
const DishTitle = styled.label`
margin-bottom: 20px;
text-align: left;
font-weight: 700;
font-size: 28px;

`
const DishTitleInput = styled.input`
padding: 10px;
display: block;
background-color: #ffbe4b;
border-radius: 10px;
border: none;
outline: none;
`


const CategoryTitle = styled(DishTitle)``
const CategoryLabel = styled.label`
color:black;
`
const CategoryInput = styled.input``

const ImageTitle = styled(DishTitle)``
const ImageInput = styled(DishTitleInput)``

const IngredientTitle = styled(DishTitle)``
const IngredientInput = styled(DishTitleInput)``


const PreparationTitle = styled(DishTitle)``
const PreparationInput = styled(DishTitleInput)``

const SubmitContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const SubmitButton = styled.button`
display: inline-block;
border-radius: 10px;
background-color: #381a5a;
color: #ffaa11;
padding: 14px 28px;
font-size: 20px;
font-weight: 600;
border: none;
`

