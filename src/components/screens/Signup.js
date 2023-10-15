import React,{useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


export default function Signup() {

    const  [email, setEmail] = useState("")
    const  [password, setPassword] = useState("")
    const  [name, setName] = useState("")
    const  [message, setMessage] = useState("")

    const navigate = useNavigate()
    let handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://127.0.0.1:8018/api/v1/auth/create/`,{name,password,email})
        .then((response) =>{
            let data = response.data.data
            let statuscode = response.data.status_code
            if (statuscode == 6000){
                console.log(response.data.data)
                localStorage.getItem("user_data", JSON.stringify(data))
                navigate("/auth/login/")
            }
            else{
                setMessage(response.data.message)
            }
            
        })
        .catch((error)=>{
            console.log(error.message)
            if (error.response.status == 401){
                setMessage(error.response.data.detail)

            }
        })


    }
  return (
<Container>
    <LeftContainer>
        <HeaderContainer>
            <Logo
                src={require("../images/2.jpg")}
                alt="Image"
            />
        </HeaderContainer>
    </LeftContainer>
    <RightContainer>
        <LoginContainer>
            <LoginHeading>Register into Account</LoginHeading>
            <LoginInfo>Create an account to acccess all the features</LoginInfo>
            <Form onSubmit={handleSubmit} > 
                <InputContainer>
                    <TextInput type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                </InputContainer>
                <InputContainer>
                    <TextInput type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </InputContainer>
                <InputContainer>
                    <TextInput type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </InputContainer>
                <LoginButton to="/login">Log in</LoginButton>

                <ButtonContainer>
                    <SubmitButton>Login</SubmitButton>
                </ButtonContainer>
            </Form>
        </LoginContainer>
    </RightContainer>
</Container>
);
}

const Container = styled.div`
min-height: 100vh;
display: flex;
padding: 15px;
background-color: #ffaa11;

`;
const LeftContainer = styled.div`
width: 60%;
padding: 40px 0px 70px;
background-color: #ffaa11;
display: flex;
justify-content: center;
align-items: center;
`;
const HeaderContainer = styled.div`
width: 100%;

`
const Logo = styled.img`
display: block;
width: 100%;
`;

const RightContainer = styled.div`
background: #efefef;
width: 40%;
display: flex;
align-items: flex-end;
justify-content: center;
border-radius: 20px;
padding:70px 70px;
background-color: #381a5a;
`;
const LoginContainer = styled.div`
padding-bottom: 70px;
border-bottom: 2px solid #ffaa11;
width: 100%;
`;
const LoginHeading = styled.h3`
font-size: 32px;
font-weight: bold;
margin-bottom: 20px;
color: #fff;

`;
const LoginInfo = styled.p`
font-size: 18px;
margin-bottom: 35px;
color: #fff;
`;
const Form = styled.form`
width: 100%;
display: block;
`;
const InputContainer = styled.div`
margin-bottom: 15px;
position: relative;
&:before {
}
`;
const TextInput = styled.input`
padding: 20px 25px 20px 30px;
width: 100%;
display: block;
border: none;
border-radius: 10px;
font-size: 18px;
outline: none;
`;
const LoginButton = styled(Link)`
display: flex;
justify-content: flex-end;
margin-bottom: 25px;
color: #ffaa11;
font-size: 20px;
`;
const SubmitButton = styled.button`
background: #ffaa11;
border: 0;
outline: 0;
color: #381a5a;
padding: 25px 40px;
border-radius: 8px;
font-size: 20px;
cursor: pointer;
font-weight: 600;
`;
const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`;
const ErrorMessage = styled.p`
font-size: 17px;
color: red;
margin-bottom: 25px;
text-align: center;
`;
