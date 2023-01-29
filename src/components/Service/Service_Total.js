import './Service.css';
import axios from 'axios';
import Board_header from "./../Board_header/Board_header";
import Title from './../Title/Title';
import Board_list from "./../Board_list/Board_list.js";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Service_Total(){
    const [content, setContent] = useState('');

    useEffect(() => {
        axios({
            method: "get",
            url: "http://54.180.210.232/api/v1/services/all",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbUBhZG1pbi5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTiIsImV4cCI6MTY3NDYwODcyN30.HS4TfBJDSemEaxlqY3RpqUzlD9zmt9GaGAmECH7aiIdtaLR2JCcXBG2N6m7QihDvXXH7VITH5rKrrjC-VOISKQ"
            },
        }).then((res) => {
            setContent(res.data.result);
        }).catch((error) => {
            alert("어쩌지이... ? 안 뜨는데에..");
        });
    },[])

    const navigate = useNavigate();

    const onMoveDetailServiceContent = (id, type, e) => {
        localStorage.setItem('detailBookingId', id);
        localStorage.setItem('businessTypeResponse', type);
        if(localStorage.getItem('businessTypeResponse') == 'EDUCATION'){
            localStorage.setItem('businessType', 'educations');
        }

        navigate('/detail_service_post');
    }

    return(
        <div className="Service_Top_Wrap">
            <Title title="전체 서비스" />
            <Board_header t1="번호" t2="글쓴이" t3="신청일" t4="상태"/>
            <ul>
                {content===Object(content)
                    ? content.content.map((content, index) => (
                        <li key={index} onClick={e =>onMoveDetailServiceContent(content.bookingId,content.businessTypeResponse, e)} >
                            <Board_list num={index+1} username={content.userUsername} posttime={content.createdAt[0] + '.' + content.createdAt[1] + '.' + content.createdAt[2]}  status={'대기중'} / >
                        </li>
                    ))
                    : "등록된 글이 없습니다"}
            </ul>
        </div>
    )
}

export default Service_Total;