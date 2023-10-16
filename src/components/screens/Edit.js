import axios from 'axios'
import React,{useState, useEffect, useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { userContext } from '../../App'
import styled from 'styled-components'
import Header from '../includes/Header'

export default function Edit() {
    const [recipee, setRecipee] = useState("")
    const [image, setImage] = useState(null)
    const [ingredients, setIngredients] = useState("")
    const [category, setCategory] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [data, setData]= useState([])
    const [name, setName] = useState("")


    
    const {userdata} = useContext(userContext)
    const navigate = useNavigate()

    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8018/api/v1/dishes/editRecipee/${id}/`)
        .then(function(response){
            console.log(response.data.data)
            setData(response.data.data)
            setName(response.data.data.dish_name)
            setIngredients(response.data.data.ingredients)
            setRecipee(response.data.data.recipee)
            setImage(response.data.data.featured_image)
            setSelectedCategories(response.data.data.category.map((cat) => cat))
            
        })


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
                <li key={categories.id}>
                    <CategoryLabel >{categories.name}</CategoryLabel>
                        <CategoryInput
                            type="checkbox"
                            id={categories.id}
                            value={categories.id}
                            checked={selectedCategories.includes(categories.id)}
                            onChange={handleCheckboxChange}
                        />
                </li>
                </>
            ))
        )
    }


    const handleCheckboxChange = (event) => {
        const categoryId = Number(event.target.value); 
        const isChecked = event.target.checked;
    
        console.log(selectedCategories)
        if (isChecked) {
       
          setSelectedCategories((prevSelectedCategories) => [
            ...prevSelectedCategories,
            categoryId,
          ]);
        } else {

          setSelectedCategories((prevSelectedCategories) =>
            prevSelectedCategories.filter((id) => id !== categoryId)
          );
        }
      };

    let  handleSubmit = (e)=>{
        e.preventDefault()

        const formField = new FormData()

        formField.append('dish_name',name)
        formField.append('recipee',recipee)
        formField.append('ingredients',ingredients)
        formField.append('category',selectedCategories)
        // formField.append('category',selectedCategories.map((item) => item))
        if(image == null){
            formField.append('featured_image',image)
        }




        axios({
            method : "post",
            url : `http://127.0.0.1:8018/api/v1/dishes/mypost/edit/${id}/`,
            data : formField,
            headers: {
                Authorization: `Bearer ${userdata?.access}`,
              },
        },)
        .then(function(response){
            console.log(response.data)
            navigate("/mypost")
    
        })
        .catch(function(error){
            console.log(error)
        })
      }

  return (

    <>
          <Header/>
        <CreatePage>
            <CreatePostForm onSubmit={handleSubmit} >
                <TitleContainer>
                    <DishTitle>Recipee Title</DishTitle>
                    <DishTitleInput name= "dish_name" value={name} onChange={(e)=>setName(e.target.value)} />
                </TitleContainer>
                <TitleContainer>
                    <CategoryTitle>Category</CategoryTitle>
                    <ul>
                        {categoryList()}

                    </ul>

                </TitleContainer>
                <TitleContainer>
                    <ImageTitle>Image</ImageTitle>
                    <img src={data.featured_image} />
                    <ImageInput 
                        type='file' 
                        name= "featured_image"
                        onChange={(e)=>setImage(e.target.files[0])} />
                </TitleContainer>
                <TitleContainer>
                    <IngredientTitle>Ingredients</IngredientTitle>
                    <IngredientInput name= "ingredients"   value={ingredients} onChange={(e)=>setIngredients(e.target.value)} />
                </TitleContainer>
                <TitleContainer>
                    <PreparationTitle>Preparations</PreparationTitle>
                    <PreparationInput name= "recipee"  value={recipee} onChange={(e)=>setRecipee(e.target.value)} />
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
