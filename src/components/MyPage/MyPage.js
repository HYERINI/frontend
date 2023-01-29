import './MyPage.css';
import Title from './../Title/Title';
import MenuBar from './../MenuBar/MenuBar';
import Profile from './../Profile/Profile';
import profile from '../../img/profile_ex.png';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyPage = () => {

  const navigate = useNavigate();

  const onMoveAsk = (e) => {
    navigate('/ask');
  } 

  const onMoveLookList = (e) => {
    navigate('/service_my');
  }

  const onMoveWithDraw = (e) => {
    navigate('/withdraw');
  }

  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  const token = localStorage.getItem('token');
  window.onload = axios({
    method: "get",
    url: "http://54.180.210.232/api/v1/users/my",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJleGFtcGxlQGV4YW1wbGUuY29tIiwiYXV0aCI6IlJPTEVfQ0xBU1NJQyIsImV4cCI6MTY3NDE3ODEzMH0.O5OlC47TTMj5vi1JqsdQx-hGXTtUdZ0BqNA8j56yovkNg3hxX-N58KdxIU4z7HzCRKXrbye2EdlJ3ziYDiBibA"},

  }).then((res) => {
    if(res.data.result.name == ''){
      setUsers('로그인이 필요합니다.');
    }else{
      setUsers(res.data.result.name + ' 님');
      setRoles(res.data.result.role);
    }
  }).catch((error) => {
    setUsers('로그인이 필요합니다.');
  });

  const onMoveEditInfo = (e) => {
    if(roles == 'USER'){
      navigate('/editGeneral');
    }else if(roles == 'OPERATION'){
      navigate('/editAdmin');
    }else{
      alert('정보를 수정할 수 없는 사용자입니다.');
    }
  }
  

  return (
    <div>
      <Title title="마이 페이지" />
      <div className="profile-wrap">
        <div className="profile-info">
          <div className="profile-name">
            <img src={profile} />
            <p>{users}</p>
          </div>
          <div>
            <button type="button" id="logoutBt">LOGOUT</button>
          </div>
        </div>
        <div className="underBar"></div>
        <div className="profile-service">
          <h4>서비스 신청 설정</h4>
          <p id="cursorNeed" onClick={onMoveLookList}>신청 내역 보기</p>
          <div className="profile-alarmWrap">
            <p>서비스 매칭 알림</p>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div className="underBar"></div>
        <div className="profile-user">
          <h4>사용자 설정</h4>
          <p id="cursorNeed"onClick={onMoveEditInfo}>정보 수정</p>
        </div>
        <div className="underBar"></div>
        <div className="profile-andSoOn">
          <h4>기타</h4>
          <p id="cursorNeed" onClick={onMoveAsk}>문의하기</p>
          <p id="cursorNeed" onClick={onMoveWithDraw}>탈퇴하기</p>
        </div>
      </div>
      <MenuBar />
    </div>
  )
}

export default MyPage