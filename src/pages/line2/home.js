import "../../components/Header/Header.js";
import Header from "../../components/Header/Header.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="display">
        <Header title="메인 화면" />

        <Link to="/board_list">
          <button>게시판</button>
        </Link>
        <Link to="/apply_service">
          <button>서비스 신청</button>
        </Link>
        <Link to="/login1">
          <button>교통!!!!!수정</button>
        </Link>
        <Link to="/mypage1">
          <button>마이페이지1</button>
        </Link>
        <Link to="/mypage2">
          <button>마이페이지2</button>
        </Link>
        <Link to="/notice_board">
          <button>NOTICE</button>
        </Link>
        <Link to="/question_list">
          <button>QNA</button>
        </Link>
        <Link to="/apply_signup_list">
          <button>가입 신청 페이지</button>
        </Link>
        <Link to="/my_post_list">
          <button>나의 게시글</button>
        </Link>
        <Link to="/login1">
          <button>로그인페이지</button>
        </Link>
        <Link to="/apply_signup_list">
          <button>서비스 제공자 가입 신청 리스트</button>
        </Link>
        <Link to="/question_list">
          <button>문의</button>
        </Link>
        <Link to="/post">
          <button>개별 게시글</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
