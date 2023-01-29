import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
import Title from './../Title/Title';
import ServiceBtn from './Service_Button';
import ServiceComplete from './Service_Complete';
import axios from 'axios';

function Service_Post(){
    const [message, setMessage] = useState('');
    const [imgBase64, setImgBase64] = useState([]); // 파일 base64
    const [imgFile, setImgFile] = useState(null);	//파일

    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    const handleMessageChange = event => {
        // 👇️ access textarea value
        setMessage(event.target.value);
    };

    const timeout = () => {
        showModal(true);
        setTimeout(() => {
            navigate('/main');
        }, 2000);
    };

    const handleChangeFile = (event) => {
        console.log(event.target.files)
        setImgFile(event.target.files);
        //fd.append("file", event.target.files)
        setImgBase64([]);
        for(var i=0;i<event.target.files.length;i++){
            if (event.target.files[i]) {
                let reader = new FileReader();
                reader.readAsDataURL(event.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
                // 파일 상태 업데이트
                reader.onloadend = () => {
                    // 2. 읽기가 완료되면 아래코드가 실행됩니다.
                    const base64 = reader.result;
                    console.log(base64)
                    if (base64) {
                        //  images.push(base64.toString())
                        var base64Sub = base64.toString()

                        setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
                        //  setImgBase64(newObj);
                        // 파일 base64 상태 업데이트
                        //  console.log(images)
                    }
                }
            }
        }

    }
    const ApplyService = (e) => {
        if(localStorage.getItem('firstCategory') == '교육'){
            axios({
                method: "post",
                url: "http://54.180.210.232/api/v1/services/educations",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleGFtcGxlQGV4YW1wbGUuY29tIiwiYXV0aCI6IlJPTEVfTEVWRUwyIiwiZXhwIjoxNjc0OTUyODE3fQ.5_6Ri92pFiJ87kgsPWmHxeXZt3vX7rJv3OEwsqBL9lg"},
                data: {
                    "content": message,
                    "degreeRequest": selectSecondCategory,
                    "educationContentRequest": selectThirdCategory,
                    "userFileUrl": "https://picsum.photos/seed/picsum/200/300"
                }
            }).then((res) => {
                timeout();

            }).catch((error) => {
                alert("서비스 신청이 완료되었습니다!");
            });
        }

        if(localStorage.getItem('firstCategory') == '생활'){
            axios({
                method: "post",
                url: "http://54.180.210.232/api/v1/services/",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleGFtcGxlQGV4YW1wbGUuY29tIiwiYXV0aCI6IlJPTEVfTEVWRUwyIiwiZXhwIjoxNjc0OTg5NjAwfQ.MeLBJFn8ZAoEbXsY6litykVdbn5TiRtaj1JCIl0JQPg"},
                data: {
                    "content": message,
                    "degreeRequest": selectSecondCategory,
                    "educationContentRequest": selectThirdCategory,
                    "userFileUrl": "https://picsum.photos/seed/picsum/200/300"
                }
            }).then((res) => {
                timeout();

            }).catch((error) => {
                alert("어쩌지이... ? 안 뜨는데에..");
            });
        }
    }

    const [selectSecondCategory, setSelectSecondCategory] = useState('');
    const [selectThirdCategory, setSelectThirdCategory] = useState('');

    const [keyword, setKeyword] = useState('학위');
    const [secondKeyword, setSecondKeyword] = useState('서비스 내용');
    const [isCategorySelect, setIsCategorySelect] = useState(true);
    const [isEducationSelect, setIsEducationSelect] = useState(true);
    const [isEducationDetailSelect, setIsEducationDetailSelect] = useState(true);
    const [isHouseSelect, setIsHouseSelect] = useState(true);
    const categoryArr = ['교육', '생활'];
    const houseArr = ['원룸', '투룸', '투베이'];
    const [educationArr, setEducationArr] = useState(['박사', '석사']);
    const [educationDetailArr, setIsEducationDetailArr] = useState(['컨설팅', '교정교열', '번역']);

    //생활-> 주거 선택 시 [원룸 투룸 투베이] 선택하면 true로 변경
    const houseCategoryClick = (idx) => {
        const newHouseArr = Array(houseArr.length).fill(false);
        newHouseArr[idx] = true;
        setIsHouseSelect(newHouseArr);
    }

    //첫번째 카테고리 선택 시 두번째 카테고리 제목 변경 -> 그 후 아래의 리스트 변경
    const categoryClick = (idx) => {
        const newCategoryArr = Array(categoryArr.length).fill(false);
        newCategoryArr[idx] = true;
        setIsCategorySelect(newCategoryArr);
        newCategoryArr.map(function() {
            if(newCategoryArr[0]){
                setKeyword('학위');
                localStorage.setItem('firstCategory', '교육');
                setEducationArr(['박사', '석사']);
                setSecondKeyword('서비스 내용');
                setIsEducationDetailArr(['컨설팅', '교정교열', '번역']);
            }else{
                setKeyword('생활');
                localStorage.setItem('firstCategory', '생활');
                setEducationArr(['교통', '통신', '주거']);
                setIsEducationDetailArr(['소형', '중형', 'SUV']);

            }
        });
    }

    // 교통 클릭 했을 때, secondCategory 세팅하기(클릭된 값으로)
    const trafficCategoryClick = (idx) => {
        if(educationArr[0]){
            localStorage.setItem('secondCategory', educationArr[0]);
            alert(localStorage.getItem('secondCategory'));
        }else if(educationArr[1]){
            localStorage.setItem('secondCategory', educationArr[1]);
        }else{
            localStorage.setItem('secondCategory', educationArr[2]);
        }


    }
    //위 코드와 마찬가지 코드 -> 근데 박사 클릭 시 secondCategory 값 영어로 변경하기
    const educationCategoryClick = (idx) => {
        const newEducationArr = Array(educationArr.length).fill(false);
        newEducationArr[idx] = true;
        setIsEducationSelect(newEducationArr);

        if(localStorage.getItem('secondCategory') == '박사'){
            setSelectSecondCategory('MASTER');
        }else{
            setSelectSecondCategory('DOCTOR');
        }
        if(keyword == '교육'){
            setSecondKeyword('서비스 내용');
        }
        if(keyword == '생활'){

            if(educationArr[0]){
                setSelectSecondCategory('')
            }
            if(newEducationArr[0]){
                setSecondKeyword('중고차');
            }else if(newEducationArr[1]){
                setSecondKeyword('모델명 입력');
            }else{
                setIsEducationDetailArr(['전세', '월세']);
                setSecondKeyword('매매');
            }
        }
    }

    //교육 클릭 시 컨설팅, 교정교열  그 외 일 때 백엔드에 전달할 값으로 thirdCategory 값 변경하기
    const educationDetailCategoryClick = (idx) => {


        const newEducationDetailArr = Array(educationDetailArr.length).fill(false);
        newEducationDetailArr[idx] = true;
        setIsEducationDetailSelect(newEducationDetailArr);
        localStorage.setItem('thirdCategory', educationDetailArr[idx]);
        if(localStorage.getItem('thirdCategory') == '컨설팅'){
            setSelectThirdCategory('CONSULTING');
        }else if(localStorage.getItem('thirdCategory') == '교정교열'){
            setSelectThirdCategory('CORRECTION');
        }else{
            setSelectThirdCategory('TRANSLATION');
        }

        if(localStorage.getItem() == ''){
            setSelectThirdCategory('')
        }
    }

  return (
    <div className="Service_Top_Wrap">
        <div className="ServiceWrap">
            <Title title="서비스 신청" />
            <h3 id="categoryTitle">카테고리</h3>
            <div className="categoryBtnWrap">
                {categoryArr.map((elm, index) => {
                    return (
                        <ServiceBtn
                            isSelected={isCategorySelect[index]}
                            handleClick={categoryClick}
                            elementIndex={index}
                            content={elm}
                        />
                    );
                })}
            </div>
            <div className="categoryBox">
                <h3>{ keyword }</h3>
                <div className="categorySpecialBox">
                    <div className="secondCategoryBtnWrap">
                        {educationArr.map((elm, index) => {
                            return(
                                <ServiceBtn
                                    key={index}
                                    isSelected={isEducationSelect[index]}
                                    handleClick={educationCategoryClick}
                                    elementIndex={index}
                                    content={elm}
                                />
                            );
                        })}
                    </div>
                    <div className="categoryBox">
                        <h3>{ secondKeyword }</h3>
                        {keyword == '생활' ?
                            (secondKeyword == '중고차' ?
                            <div className="lastCategoryBoxWrap">
                                <div className="lastCategoryBox">
                                    {educationDetailArr.map((elm, index) => {
                                        return(
                                        <ServiceBtn
                                        key={index}
                                        isSelected={isEducationDetailSelect[index]}
                                        handleClick={educationDetailCategoryClick}
                                        elementIndex={index}
                                        content={elm}
                                        />)})}
                                </div>
                                <h3 id="categoryTitle">가격</h3>
                                <div className="carPriceCategoryWrap">
                                    <input type="text"/>
                                    <p>~</p>
                                    <input type="text"/>
                                </div>
                            </div> : (secondKeyword == '모델명 입력' ?
                                <div>
                                    <div className="secondCategoryBtnWrap">
                                        <input type={"text"} />
                                    </div>
                                    <div>
                                        <h3 id="categoryTitle">유심칩 여부</h3>
                                        <button type="button" id="usimOk">O</button>
                                        <button type="button" id="usimNo">X</button>
                                    </div>
                                </div> :
                                <div className="lastCategoryBoxWrap">
                                    <div className="lastCategoryBox">
                                        {educationDetailArr.map((elm, index) => {
                                            return(
                                            <ServiceBtn
                                                key={index}
                                                isSelected={isEducationDetailSelect[index]}
                                                handleClick={educationDetailCategoryClick}
                                                elementIndex={index}
                                                content={elm}
                                            />)})}
                                    </div>
                                    <div>
                                        <h3 id="categoryTitle">매매</h3>
                                        <div className="lastCategoryBox">
                                            {houseArr.map((elm, index) => {
                                                return (
                                                    <ServiceBtn
                                                        isSelected={isHouseSelect[index]}
                                                        handleClick={houseCategoryClick}
                                                        elementIndex={index}
                                                        content={elm}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <h3 id="categoryTitle">가격</h3>
                                    <div className="carPriceCategoryWrap">
                                        <input type="text"/>
                                        <p>~</p>
                                        <input type="text"/>
                                    </div>
                                </div>)
                            ) : <div className="lastCategoryBox">
                                {educationDetailArr.map((elm, index) => {
                                    return(
                                        <ServiceBtn
                                            key={index}
                                            isSelected={isEducationDetailSelect[index]}
                                            handleClick={educationDetailCategoryClick}
                                            elementIndex={index}
                                            content={elm}
                                        />)})}
                            </div>
                        }</div>
                    </div>
            </div>
            <div className="categoryBox">
                <h3>추가 요청 사항</h3>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleMessageChange}
                />
                <input type="file" id="file"  onChange={handleChangeFile} multiple="multiple" />
            </div>
        </div>
        <div className="apply_btn_wrap" onClick={ApplyService}>
            신청하기
        </div>
        <div>{
            modalOpen == true ? <ServiceComplete /> : null  //기계역할
        }
        </div>
    </div>
  );
}

export default Service_Post;
