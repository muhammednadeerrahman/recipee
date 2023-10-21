import React, {useContext, useEffect, useState} from 'react'
import Header from '../includes/Header'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../../App'

export default function EditProfile() {

    const [profileImage, setProfileImage] = useState(null)
    const [Image, setImage] = useState(null)
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

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
            setEmail(response.data.data.name)
            setName(response.data.data.email)
            setImage(response.data.data.profile_image)
            setPhone(response.data.data.phone)

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
        console.log('phone:', phone);
        console.log('profileImage:', profileImage);
        console.log('formField:', formField);
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

                        { (Image !== null) ? (
                            <ProfileImage src={Image}alt="profileIMage"/>)
                            :(
                                <ProfileImage src={require("../images/profile_demo.png") }alt="profileIMage"/>
                             
                        )}                    
                    </SectionImageContainer>
                        <SectionChange>

                                 <ImageInputContainer>
                                    <Imageinput type="file" accept='image' onChange={(e)=>setProfileImage(e.target.files[0])} />
                                </ImageInputContainer>

                           
                        </SectionChange>
                </SectionTop>
                <SectionBottom>
                    <DetailContainer>
                        <Title>Name : </Title>
                        <Detail>{name}</Detail>
                    </DetailContainer>
                    <DetailContainer>
                        <Title>Email : </Title>
                        <Detail>{email}</Detail>
                    </DetailContainer>
                    <DetailContainer>
                        <Title>Mobile : </Title>
                            <DetailInput placeholder value={phone} onChange={(e)=>setPhone(e.target.value)} />
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
@media (max-width:640px){
    padding: 100px 25px;
}
@media (max-width:360px){
    padding: 80px 15px;
}
`
const SectioncontainerForm = styled.form`
background-color:#ececec ;
width: 60%;
padding: 50px 20px;
border-radius: 10px;
display: flex;
align-items: center;
flex-direction: column;
@media (max-width:980px){
    width: 100%;
}
@media (max-width:360px){
    padding: 50px 10px;
}
`
const SectionTop = styled.div`
align-items: flex-start ;
display: flex;
flex-direction: column;
width:37%;
border-bottom: 2px solid #ffbe4b;
@media (max-width:768px){
    width:48%;
}
@media (max-width:480px){
    width:70%;
}
@media (max-width:360px){
    width:80%;
}
`
const SectionImageContainer = styled.div`
border:4px solid #4f5757 ;
width: 100%;
height: 213px ;
@media (max-width:1280px){
    height: 170px;


}

`
const ProfileImage = styled.img`
width: 100%;
height: 100%;
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
@media (max-width:1280px){
    font-size: 16px;
}
@media (max-width:480px){
    font-size: 12px;
    width: 30%;
}


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
@media (max-width:1280px){
    font-size: 14px;

}
@media (max-width:480px){
    font-size: 12px;
     width: 70%;

}

`
const DetailInput = styled.input`
border-radius: 8px;
padding: 8px 10px;
display: block;
margin-right:5px;
@media (max-width:1280px){
    padding: 6px 8px;

}
@media (max-width:480px){
    font-size: 12px;
     width: 60%;
    padding: 4px 8px;

}

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
