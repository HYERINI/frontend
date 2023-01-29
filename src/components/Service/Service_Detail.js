import React, {useEffect, useState} from "react";
import axios from "axios";
import Title from "../Title/Title";
import ServiceBtn from './Service_Button';
// import './My_Post.css';ㅑ

function ServiceDetail() {
    const [content, setContent] = useState('');
    const serviceNum = localStorage.getItem('detailBookingId');
    useEffect(() => {
        axios({
            method: "get",
            url: "http://54.180.210.232/api/v1/services/" + localStorage.getItem('businessType') + '/' + localStorage.getItem('detailBookingId'),
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
            alert("어쩌지이... ? 안 뜨는데에..");
        });
    },[])

    return (
        <div>
            <div className={"Service_Top_Wrap"}>
                <div className="ServiceWrap">
                    <Title title="서비스 내용" />
                    <h3 id="categoryTitle">카테고리</h3>
                    <div className="lastCategoryBox">
                        <ServiceBtn content={content.businessTypeResponse} isSelected={true}/>
                    </div>
                    <h3 id="categoryTitle">학위</h3>
                    <div className="lastCategoryBox">
                        <ServiceBtn content={content.degreeRequest} isSelected={true}/>
                    </div>
                    <h3 id="categoryTitle">서비스내용</h3>
                    <div className="lastCategoryBox">
                        <ServiceBtn content={content.educationContentRequest} isSelected={true}/>
                    </div>
                    <h3 id="categoryTitle">추가요청사항</h3>
                    <div className={"Service_content_box"}>
                        {content.userContent == '' ? '추가 요청 사항 없음' : content.userContent}
                    </div>
                </div>
                <div className="admin_btn_wrap">
                    <div className="admin_bt">승인</div>
                    <div className="deny_bt">거절</div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetail;
