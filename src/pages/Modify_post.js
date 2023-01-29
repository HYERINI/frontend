import "../components/Header/Header.js";
import Header from "../components/Header/Header.js";
import Input_box from "../components/Input_box/Input_box";

import Btn_2 from "../components/Btn_2/Btn_2";
function Modify_post() {
  return (
    <div>
      <div className="display">
        <Header title="글 수정" />
        <div className="display_container">
          <Input_box
            input_title="제목"
            height="30px"
            place_holder="제목을 입력하세요."
          />
          <Input_box
            input_title="내용"
            height="300px"
            place_holder="내용을 입력하세요."
          />

          <Btn_2 btn1="목록" btn2="등록" />
        </div>
      </div>
    </div>
  );
}

export default Modify_post;
