import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectType.css';
import Title from './../Title/Title';

function SelectType(){
  const navigate = useNavigate();
 
  const onMoveGeneral = (e) => {
    navigate('/generalSignup');
  }

  const onMoveAdmin = (e) => {
    navigate('/adminSignup');
  }

  return (
    <div className="SelectType">
      <Title title="SIGN UP" />
      <div className="SelectWrap">
        <div className="SelectTitle">
            <h2>사용자 유형 선택</h2>
        </div>
        <div className="SelectBtn">
            <div className="generalBtn" onClick={onMoveGeneral}>
              <p>일반 회원</p>
            </div>
            <div className="operateBtn" onClick={onMoveAdmin}>
              <p>운영팀 회원</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SelectType;
