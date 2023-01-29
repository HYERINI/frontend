import './WithDraw.css';
import Title from './../Title/Title';
import MenuBar from './../MenuBar/MenuBar';
import profile from '../../img/profile_ex.png';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyPage = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const [users, setUsers] = useState([]);
  const [Password, setPassword] = useState("");
  
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  window.onload = axios({
    method: "get",
    url: "http://54.180.210.232/api/v1/my",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem('token')
    },
    }).then((res) => {
        setUsers(res.data.result.name);
    }).catch((error) => {
        alert("어쩌지이... ? 안 뜨는데에..");
    });

  const onWithDraw = (e) => {
    var withDrawYn = window.confirm('정말 탈퇴하시겠습니까?');
    if (withDrawYn){
        axios({
          method: "post",
          url: "http://54.180.210.232/api/v1/signout",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem('token')
            },
            data: {
                "password" : Password
            },
            }).then((res) => {
                alert('탈퇴가 완료되었습니다.')
                navigate('/');
            }).catch((error) => {
                alert("어쩌지이... ? 안 뜨는데에..");
            });
    }else{
        navigate('/');
    }
  }
  return (
    <div>
      <Title title="탈퇴하기" />
      <div className="withdraw-wrap">
        <div className="userName">
            <p>
                {users} 님
                <br/>비밀번호를 입력해주세요.
            </p>
        </div>
        <div className="withdraw-input-wrap"> 
            <input className="withdraw-pw-input" type="password" onChange={onPasswordHandler}>
            
            </input>
        </div>
        <div className="withdraw-bt-wrap">
            <button type="button" onClick={onWithDraw}>탈퇴하기</button>
        </div>
      </div>
      <MenuBar />
    </div>
  )
}

export default MyPage