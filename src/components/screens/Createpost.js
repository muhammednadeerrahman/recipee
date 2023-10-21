import { useEffect, useState,useContext} from 'react'
import Header from '../includes/Header'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../../App'



export default function Createpost() {
    const [name, setName] = useState("")
    const [recipee, setRecipee] = useState("")
    const [image, setImage] = useState(null)
    const [ingredients, setIngredients] = useState("")
    const [category, setCategory] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([]);
    

    const {userdata} = useContext(userContext)
    const navigate = useNavigate()


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
                <CategoryContainer key={categories.id}>
                    <CategoryLabel for={categories.id}>{categories.name}</CategoryLabel>
                        <CategoryInput
                            type="checkbox"
                            id={categories.id}
                            value={categories.id}
                            checked={selectedCategories.includes(categories.id)}
                            onChange={handleCheckboxChange}
                        />

                </CategoryContainer>
                   
                </>
            ))
        )
    }
    
    let formsubmit = (e)=>{
        e.preventDefault()

        const formField = new FormData()

        formField.append('dish_name',name)
        formField.append('recipee',recipee)
        formField.append('ingredients',ingredients)
        formField.append('category',selectedCategories)
        if(image !== null){
            formField.append('featured_image',image)
        }
        
        axios({
            method : "post",
            url : "http://127.0.0.1:8018/api/v1/dishes/create/",
            data : formField,
            headers: {
                Authorization: `Bearer ${userdata?.access}`,
              },
        },)
        // .post("http://127.0.0.1:8018/api/v1/dishes/create/", formData, {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   })
        .then(function(response){
            console.log(response.data)
            navigate("/")
        })
        .catch(function(error){
            
            console.log(error)
        })
        

    }


    const handleCheckboxChange = (event) => {
        const categoryId = Number(event.target.value); 
        const isChecked = event.target.checked; // Check if the checkbox is checked


    
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


  return (
    <>
        <Header/>
        <CreatePage>
            <CreatePostForm onSubmit={formsubmit} >
                <TitleContainer>
                    <DishTitle>Recipee Title</DishTitle>
                    <DishTitleInput name= "dish_name" value={name} onChange={(e)=>setName(e.target.value)} />
                </TitleContainer>
                <TitleContainer>
                    <CategoryTitle>Category</CategoryTitle>
                    <CategoryList>
                        {categoryList()}

                    </CategoryList>

                </TitleContainer>
                <TitleContainer>
                    <ImageTitle>Image</ImageTitle>
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
@media (max-width:768px) {
    padding: 130px 45px;
}
@media (max-width:480px) {
    padding: 80px 20px;
    
}
`
const CreatePostForm = styled.form`
background-color: #ffaa11;
padding: 50px;
border-radius: 12px;
@media (max-width:480px) {
    padding: 10px;
    
}
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
@media (max-width:640px) {
    font-size: 20px;
}

`
const DishTitleInput = styled.input`
padding: 10px;
display: block;
background-color: #ffbe4b;
border-radius: 10px;
border: none;
outline: none;
`


const CategoryTitle = styled(DishTitle)`

`
const CategoryList = styled.ul`
display: flex;
flex-wrap: wrap;
@media (max-width:980px) {
	justify-content: space-between;
}



`
const CategoryContainer = styled.li`
margin-right:30px;
@media (max-width:980px) {
    margin-right:0;
    width: 30%;
    display: flex;
    justify-content: space-between;
}
@media (max-width:640px) {
    margin-bottom: 20px;
}

`

const CategoryLabel = styled.label`
margin-right: 10px;
color:black;
font-size: 20px;
font-weight: bold;
cursor:pointer;
@media (max-width:980px) {
    font-size: 16px;

}
@media (max-width:640px) {
    font-size: 12px;

}
`
const CategoryInput = styled.input`
@media (max-width:640px) {
    width: 15px;
    height: 15px;

}
`

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

