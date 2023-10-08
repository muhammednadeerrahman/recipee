import React from 'react'
import Header from '../includes/Header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <>
        <Header/>
        <SectionProfile>
           <SectioncontainerForm>
                <SectionTop>
                    <SectionImageContainer>
                        <ProfileImage src={require("../images/profile_demo.png")} alt="profileImage" />
                    </SectionImageContainer>
                    <SectionChangeImage>
                        <ChangeImageTitle>change profile image</ChangeImageTitle>
                        <ImageEditContainer>
                            <EditImage src={require("../images/edit.svg").default} alt="editPencil image" />
                        </ImageEditContainer>
                    </SectionChangeImage>
                </SectionTop>
                <SectionBottom>
                    <DetailContainer>
                        <Title>First Name : </Title>
                        <Detail>Muhammed</Detail>
                    </DetailContainer>
                    <DetailContainer>
                        <Title>Last Name : </Title>
                        <Detail>Nadeer</Detail>
                    </DetailContainer>
                    <DetailContainer>
                        <Title>Email : </Title>
                        <Detail>mohdnadeerrahman@gmail.com</Detail>
                    </DetailContainer>
                    <DetailContainer>
                        <Title>Mobile : </Title>
                        <Detail>9746880016</Detail>
                        <EditImageContainer>
                            <Edit src={require("../images/edit.svg").default} alt= "Edit" />
                        </EditImageContainer>
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
const EditImageContainer = styled(Link)`
background-color: #381a5a;
width: 20px;
height: 20px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 6px;

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


