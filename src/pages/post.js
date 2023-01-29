import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Post() {
  const [content, setContent] = useState("");
  function get() {
    fetch("http://54.180.210.232:80/api/v1/posts?category=FREE", {
      method: "GET",
    }) //method get 은 생략 가능
      .then((res) => res.json())
      .then((res) => setContent(res.result))
  }

  useEffect(() => {
    get();
  }, []);

  console.log(content);
  // console.log("해체중:", content.content[0].writer);
  console.log("체?:", content === Object(content));

  return (
    <div>

      <div>[게시글 페이지]</div>
      <div>작성자: o</div>
      {/* <div>제목: {content.content[0].title}</div>
      <div> 내용: {content.content[0].content}</div>
      <div>이미지:
        <img src={content.content[0].imgUrl}></img>
      </div> */}
      <div> 댓글</div>
      <Link to="/">
        <button>홈</button>
      </Link>
    </div>
  );
}

export default Post;
