import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import Title from './../Title/Title';

function EditAdminInfo(){
    const role = "OPERATION";
    const navigate = useNavigate();
    const [userData, setUserData] = useState("");
    // const [name, setName] = useState("");
    // const [address, setAddress] = useState("");
    // const [userName, setUserName] = useState("");
    // const [businessName, setBusinessName] = useState("");
    // const [businessRegisterNumber, setBusinessRegisterNumber] = useState("");
    // const [businessType, setBusinessType] = useState("");

    useEffect(() => {
        axios({
            method: "get",
            url: "http://54.180.210.232/api/v1/my",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem('token')
            },
            }).then((res) => {
                setUserData(res.data.result);
            }).catch((error) => {
                alert("어쩌지이... ? 안 뜨는데에..");
        });
    },[])
    
    const onDataHandler = (event) => {
        setUserData(event.target.value);
    }
    const onSubmitEdit = (e) => {
        e.preventDefault();
        var name = $('#userName').val();
        var email = $('#userEmail').val();
        var address  = $('#userAddress').val();
        var businessName = $('#userBusinessName').val();
        var businessRegisterNumber = $('#userBusinessRegisterNumber').val();
        var role = "OPERATION";

        axios({
            method: "put",
            url: "http://54.180.210.232/api/v1/my",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem('token')
              },
              data: {
                  "address": {
                    "details": String(address),
                  },
                  "name": String(name),
                  "role": String(role),
                  "username": String(email),  
                  "businessName": String(businessName),
                  "businessRegisterNumber": String(businessRegisterNumber),
                  "businessType": String(role),
              },
              }).then((res) => {
                  alert('수정이 완료되었습니다.');
                  navigate('/mypage');
              }).catch((error) => {
                  alert("어쩌지이... ? 안 뜨는데에..");
              });
    }

    return (
        <form className="SignUpForm">
            <Title title="정보수정하기" />
            <div className="inputForm">
                <div id="name">
                    <label for="name">이름</label>
                    <input type="text" id="userName" value={userData.name} placeholder="실명을 입력하세요." onChange={onDataHandler} required></input>
                </div> 
                <div id="username">
                    <label for="email">이메일</label>
                    <input type="email" id="userEmail" name="userName" value={userData.username} placeholder="abcdefg@gmail.com" onChange={onDataHandler}></input>
                </div> 
                <div id="password">
                    <label for="password">비밀번호</label>
                    <button type="button" id="editPw">비밀번호 변경하기</button>
                </div>
                <div id="address">
                    <label for="address">주소</label>
                    <input type="text" id="userAddress" name="address" value={userData.address} placeholder="주소를 입력하세요." onChange={onDataHandler}></input>
                </div>
                <div id="businessName">
                    <label for="businessName">상호명</label>
                    <input type="text" id="userBusinessName" value={userData.businessName} name="businessName" placeholder="상호명을 입력하세요." onChange={onDataHandler}></input>
                </div>
                <div id="businessRegisterNumber">
                    <label for="businessRegisterNumber">사업자등록번호</label>
                    <input type="text" id="userBusinessRegisterNumber" value={userData.businessRegisterNumber} name="businessRegisterNumber" placeholder="사업자등록번호를 입력하세요." onChange={onDataHandler}></input>
                </div>
                <div id="businessType">
                    <label for="businessType">사업자 종류</label>
                    <input type="text" value={userData.businessType} name="businessType" placeholder="사업자종류는 드롭다운으로 해야되는거 아님 ?" readOnly></input>
                </div>
                <div className="signupBt">
                    <button id="signupBt" type="button" onClick={onSubmitEdit}>수정하기</button>
                </div>
            </div>
        </form>
    );
}

export default EditAdminInfo