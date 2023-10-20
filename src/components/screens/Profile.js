import React, {useContext, useEffect, useState} from 'react'
import Header from '../includes/Header'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../../App'

export default function Profile() {

    const [userDetails, setUserDetails] = useState([])
    const [profileImage, setProfileImage] = useState(null)
    const [phone, setPhone] = useState("")



    const {userdata,updateUserData} = useContext(userContext)

    const navigate = useNavigate()


    useEffect(()=>{
        axios.get("http://127.0.0.1:8018/api/v1/dishes/profile/view/",
        {headers : {
            Authorization : `Bearer ${userdata?.access}`,
        },
    })
    .then(function(response){
            console.log(response.data.data)
            setUserDetails(response.data.data)
        })
    .catch(function(error) {
        console.log(error)
      });
    },[])

    let handleSubmit = (e)=>{
        e.preventDefault()

        const formField = new FormData()

        formField.append('phone',phone)

        if(profileImage !== null){
            formField.append('profile_image',profileImage)
        }
        axios({
            method : "post",
            url: "http://127.0.0.1:8018/api/v1/dishes/profile/",
            data : formField,
            headers : {
                Authorization : `Bearer ${userdata?.access}`,
            },
        })
        .then(function(response){
            console.log(response.data.data)
            navigate("/")
        })
        .catch(function(error) {
            console.log(error)
        });


    }

  return (
    <>
        <Header/>
        <SectionProfile>
           <SectioncontainerForm onSubmit={handleSubmit} >
                <SectionTop>
                    <SectionImageContainer>

                        { (userDetails.profile_image !== null) ? (
                            <ProfileImage src={userDetails.profile_image}alt="profileIMage"/>)
                            :(
                             <ProfileImage src={require("../images/profile_demo.png") }alt="profileIMage"/>
                        )}                    
                    </SectionImageContainer>
                    { (userDetails.profile_image !== null) ? (
                        <SectionChangeImage>
                            <ChangeImageTitle>change profile image</ChangeImageTitle>
                            <ImageEditContainer>
                                <EditImage src={require("../images/edit.svg").default} alt="editPencil image" />
                            </ImageEditContainer>
                        </SectionChangeImage>)
                    :(
                        <SectionChange>
                        <ImageInputContainer>
                            <Imageinput type="file" accept='image' onChange={(e)=>setProfileImage(e.target.files[0])} />
                        </ImageInputContainer>
                        </SectionChange>
                     )
                    }
                   
                </SectionTop>
                <SectionBottom>
                    <DetailContainer>
                        <Title>Name : </Title>
                        <Detail>{userDetails.name}</Detail>
                    </DetailContainer>
                    <DetailContainer>
                        <Title>Email : </Title>
                        <Detail>{userDetails.email}</Detail>
                    </DetailContainer>
                    <DetailContainer>
                        <Title>Mobile : </Title>
                        {userDetails.phone ? 
                            (<Detail>{userDetails.phone}</Detail>)
                            :(<DetailInput placeholder value={phone} onChange={(e)=>setPhone(e.target.value)} />)
                        }       
                        
                       {userDetails.phone ?
                        (<EditImageContainer>
                            <Edit src={require("../images/edit.svg").default} alt= "Edit" />
                         </EditImageContainer>)
                        :(<>
                            
                        </>)}
                    </DetailContainer>
                </SectionBottom>
                <SectionSubmit>
                    <SubmitButton>Submit</SubmitButton>
                </SectionSubmit>
           </SectioncontainerForm>
        </SectionProfile>

    </>
  )
}

const SectionProfile = styled.div`
padding: 100px;
display: flex;
justify-content: center;
align-items: center;
background-color: #ffbe4b ;
`
const SectioncontainerForm = styled.form`
background-color:#ececec ;
width: 60%;
padding: 50px 20px;
border-radius: 10px;
display: flex;
align-items: center;
flex-direction: column;
`
const SectionTop = styled.div`
align-items: flex-start ;
display: flex;
flex-direction: column;
width:37%;
border-bottom: 2px solid #ffbe4b;
`
const SectionImageContainer = styled.div`
border:4px solid #4f5757 ;
width: 100%;


`
const ProfileImage = styled.img`
width: 100%;
display: block;
`
const SectionChangeImage = styled(Link)`
display: flex;
align-items: flex-start;
margin: 10px 0 20px;

`
const SectionChange = styled.div`
display: flex;
align-items: flex-start;
margin: 10px 0 20px;

`
const ChangeImageTitle = styled.h5`
margin-right: 10px;
`
const ImageEditContainer = styled.div`
background-color: #381a5a;
width: 20px;
height: 20px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 6px;
`
const EditImage = styled.img`
display: block;
width: 10px;
`
const SectionBottom = styled.div`
margin: 40px 0 20px;
width: 100%;

`
const DetailContainer = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid #727272;

`
const Title = styled.h3`
width: 50%;
text-align: right;
padding: 10px;
font-weight: 600;
font-size: 18px;
text-transform: capitalize;
background-color: #eee;

`
const Detail = styled.h3`

text-align: left;
margin-left: 10px;
padding: 10px;
font-weight: 600;
font-size: 18px;
text-transform: capitalize;
background-color: #eee;
display: inline-block;

`
const DetailInput = styled.input`
border-radius: 8px;
padding: 8px 10px;
display: block;
margin-right:5px

`
const EditImageContainer = styled(Link)`
background-color: #381a5a;
width: 20px;
height: 20px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 6px;

`
const ImageInputContainer = styled.div`

`
const Imageinput = styled.input`

`


const Edit = styled.img`
display: block;
width: 10px;
`
const SectionSubmit = styled.div`
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


