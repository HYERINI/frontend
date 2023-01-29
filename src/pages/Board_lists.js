import Header from "../components/Header/Header.js";
import Btn from "../components/Btn/Btn.js";
import Board_header from "../components/Board_header/Board_header";
import Board_list from "../components/Board_list/Board_list.js";
import Pagination from "react-js-pagination"; //API
import Pagination_box from "../components/Pagination_box/Pagination_box.js";
import Add_post from "./Add_post.js";
import { useState, useEffect } from "react";

function Board_lists({ postTitles }) {
  const [content, setContent] = useState("");
  

  function testGet() {
    
    

    fetch("http://54.180.210.232:80/api/v1/posts?category=FREE", {
      method: "GET",
    }) //method get 은 생략 가능
      .then((res) => res.json())
      .then((res) => setContent(res.result))
      
      console.log("function test")
  }

  useEffect(() => {
    testGet()
  }, []);
  
  
    console.log(content);
    console.log("객체?:",content===Object(content));
    console.log("map:",content.content);
  
  
  
  
  return (
    <div>
      <div className="display">
        <Header title="게시판" />
        <div className="display_container">
          <Btn btn_txt="글 작성" url="/add_post" />

          <Board_header t1="번호" t2="제목" t3="글쓴이" />
          <ul>
            {content===Object(content)
              ? content.content.map((content, index) => (
                  <li key={index}>
                    <Board_list num={index+1} title={content.title} name={content.writer} />
                  </li>
                ))
              : "등록된 글이 없습니다"}
          </ul>
          <Pagination_box />
        </div>
      </div>
    </div>
  );
}

export default Board_lists;
