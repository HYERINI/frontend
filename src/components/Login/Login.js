import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(){
    const navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    
    const onSubmitHandler = (event) => {
        // 버튼만 누르면 리로드 되는것을 막아줌
        event.preventDefault();

        console.log('Email', Email);
        console.log('Password', Password);
        
        axios({
            method: "post",
            url: "http://54.180.210.232/api/v1/login",
            headers: {
                "Content-Type": `application/json`,
            },
            data: {
                "username": Email,
                "password": Password
            },
        })
        .then((res) => {
            localStorage.clear();
            alert('로그인에 성공하였습니다.');
            localStorage.setItem('token', res.data.result.accessToken);
            console.log(localStorage.getItem('token'));
            navigate('/main');
        })
        .catch((error) => {
            alert('로그인에 실패하였습니다.');
            console.log(error);
        });
    }

    const onMoveForgot = () => {
        navigate('/forgot');
    }

    const onMoveSignup = (e) => {
        navigate('/select');
    }

    return (
        <div className="bodyWrap">
            <div className="loginForm">
                <div id="welcomeText">WELCOME, 케어풀리 👋🏻</div>
                <div id="inputText">아이디와 비밀번호를 입력해주세요!</div>
                <input id="loginEmail" type='email' value={Email} onChange={onEmailHandler} placeholder="abcdefg@gmail.com"></input>
                <input id="loginPw" type={showPassword ? "text" : "password"} value={Password} onChange={onPasswordHandler} placeholder="************"></input>
                <div id="loginSubText">
                    <div onClick={() => setShowPassword(prevState => !prevState)}> {showPassword ? "Hide Password" : "Show Password"}</div>
                    <div onClick={onMoveForgot}>Forgot Password/id?</div>
                </div>
                <button id="loginBt" type="button" onClick={onSubmitHandler}>Login</button>
                <button id="signupBt" type="button" onClick={onMoveSignup}>Sign Up</button>
            </div>
        </div>
    );
};

export default Login;