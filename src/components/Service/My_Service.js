import './Service.css';
import axios from 'axios';
import Board_header from "./../Board_header/Board_header";
import Title from './../Title/Title';
import Board_list from "./../Board_list/Board_list.js";
import {React, useEffect, useState} from "react";
function My_Service(){
    const [content, setContent] = useState('');
    useEffect(() => {
        axios({
            method: "get",
            url: "http://54.180.210.232/api/v1/services/my",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleGFtcGxlQGV4YW1wbGUuY29tIiwiYXV0aCI6IlJPTEVfTEVWRUwyIiwiZXhwIjoxNjc0OTc4OTQ2fQ.gRXoxRVVFkXpuHCTT4SuggejFwtetn8d5yY4CYSkfbc"
            },
        }).then((res) => {
            // console.log(res.data.message);
            // console.log(res.data.result);
            setContent(res.data.result);
            console.log(content);
        }).catch((error) => {
            alert("정보를 가져올 수 없습니다");
        });
    },[])

    return(
        <div className="Service_Top_Wrap">
            <Title title="내 서비스" />
            <Board_header t1="번호" t2="글쓴이" t3="신청일" t4="상태"/>
            <ul>
                {content===Object(content)
                    ? content.content.map((content, index) => (
                        <li key={index}>
                            <Board_list num={index+1} username={content.userUsername} posttime={content.createdAt[0] + '.' + content.createdAt[1] + '.' + content.createdAt[2]} status={"대기중"}/>
                        </li>
                    ))
                    : "등록된 글이 없습니다"}
            </ul>
        </div>
    );
}

export default My_Service;