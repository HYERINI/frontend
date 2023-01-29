import "../components/Header/Header.js";
import Header from "../components/Header/Header.js";
import Input_box from "../components/Input_box/Input_box";
import Btn_2 from "../components/Btn_2/Btn_2";
import Board_list from "../components/Board_list/Board_list.js";
import Board_lists from "./Board_lists.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

const uploader = Uploader({
  apiKey: "free"
});

function Add_post(props) {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const MyButtonComponent = () =>
    <UploadButton uploader={uploader}         // Required.
      //options={options}           // Optional.
      onComplete={files => {      // Optional.
        if (files.length === 0) {
          console.log('No files selected.')
        } else {
          console.log('Files uploaded:');
          console.log("1.img:", files.map(f => f.fileUrl));
          setImg(files.map(f => f.fileUrl));

        }
      }}>
      {({ onClick }) =>
        <button onClick={onClick}>
          Upload ...
        </button>
      }
    </UploadButton>

  const onChange = (event) => {
    setPostTitle(event.target.value);
    console.log(postTitle);
  };

  const onChange2 = (event) => {
    setPostContent(event.target.value);
    console.log(postContent);
  };



  function post() {
    console.log("제목:", postTitle);
    console.log("내용:", postContent);
    console.log("2.img:", img);
    fetch("http://54.180.210.232:80/api/v1/posts?category=FREE", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        content: postContent,
        imgUrl: img[0]
      }),
    })
      .then((response) => response.json())
      .then((result) => alert("결과: ", result));
  }
  const onClick = () => {
    console.log("등록버튼 눌렀다");
    post();
    navigate("/board_list");
    alert("게시글이 등록되었습니다!");
  };

  return (
    <div>
      {/* <Board_lists postTitles={postTitles}></Board_lists> */}

      <div className="display">
        <Header title="글 작성" />
        <div className="display_container">
          <Input_box
            onChange={onChange}
            onClick={onClick}
            value={postTitle}
            input_title="제목"
            height="30px"
            place_holder="제목을 입력하세요."
          />

          <Input_box
            onChange={onChange2}
            onClick={onClick}
            value={postContent}
            input_title="내용"
            height="300px"
            place_holder="내용을 입력하세요."
          />

          <MyButtonComponent></MyButtonComponent>


          <Btn_2 btn1="목록" btn2="등록" onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

export default Add_post;
