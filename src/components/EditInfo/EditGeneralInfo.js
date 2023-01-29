import './EditGeneralInfo.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Title from './../Title/Title';

function EditGeneralInfo(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    // const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [businessRegisterNumber, setBusinessRegisterNumber] = useState("");
    const [businessType, setBusinessType] = useState("");

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onUserNameHandler = (event) => {
        setUserName(event.currentTarget.value);
    }

    const onAddressHandler = (event) => {
        setAddress(event.currentTarget.value);
    }

    const onBusinessNameHandler = (event) => {
        setBusinessName(event.currentTarget.value);
    }

    const onBusinessRegisterNumberHandler = (event) => {
        setBusinessRegisterNumber(event.currentTarget.value);
    }

    const onBusinessTypeHandler = (event) => {
        setBusinessType(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        
        // 버튼만 누르면 리로드 되는것을 막아줌
        event.preventDefault();
        const role = "OPERATION"; 
        console.log('유저이름', name);
        console.log('이메일', userName);
        console.log('비밀번호', password);
        console.log('주소', address);
        console.log('역할', role);
        console.log('사업자이름', businessName);
        console.log('사업자등록번호', businessRegisterNumber);
        console.log('사업자종류', businessType);
        
        
    }
    return (
        <form className="SignUpForm">
            <Title title="회원정보수정" />
            <div className="inputForm">
                <div id="name">
                    <label for="name">이름</label>
                    <input type="text" name="name" value={name} placeholder="실명을 입력하세요." onChange={onNameHandler} required></input>
                </div>
                <div id="username">
                    <label for="email">이메일</label>
                    <input type="email" name="userName" value={userName} placeholder="abcdefg@gmail.com" onChange={onUserNameHandler}></input>
                </div>
                <div id="password">
                    <label for="password">비밀번호</label>
                    <button type="button" id="editPw">비밀번호 변경하기</button>
                </div>
                <div id="address">
                    <label for="address">주소</label>
                    <input type="text" name="address" value={address} placeholder="주소를 입력하세요." onChange={onAddressHandler}></input>
                </div>
                <div id="businessName">
                    <label for="businessName">상호명</label>
                    <input type="text" value={businessName} name="businessName" placeholder="상호명을 입력하세요." onChange={onBusinessNameHandler}></input>
                </div>
                <div id="businessRegisterNumber">
                    <label for="businessRegisterNumber">사업자등록번호</label>
                    <input type="text" value={businessRegisterNumber} name="businessRegisterNumber" placeholder="사업자등록번호를 입력하세요." onChange={onBusinessRegisterNumberHandler}></input>
                </div>
                <div id="businessType">
                    <label for="businessType">사업자 종류</label>
                    <input type="text" value={businessType} name="businessType" placeholder="사업자종류는 드롭다운으로 해야되는거 아님 ?" onChange={onBusinessTypeHandler}></input>
                </div>
                <div className="signupBt">
                    <button id="signupBt" type="button" onClick={onSubmitHandler}>수정하기</button>
                </div>
            </div>
        </form>
    );
}

export default EditGeneralInfo;