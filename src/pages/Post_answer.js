import "../components/Header/Header.js";
import Header from "../components/Header/Header.js";
import Input_box from "../components/Input_box/Input_box";

function Post_answer() {
  return (
    <div>
      <div className="display">
        <Header title="답변 작성" />
        <div className="display_container">
          <Input_box
            input_title="답변 작성하기"
            height="200px"
            place_holder="답변을 작성해주세요."
          />
          <Input_box
            input_title="답변 작성하기"
            height="100px"
            place_holder="답변을 작성해주세요."
          />
        </div>
      </div>
    </div>
  );
}

export default Post_answer;
