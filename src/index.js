import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modify_post from "./pages/Modify_post";
import Add_post from "./pages/Add_post";
import Board_lists from "./pages/Board_lists";
import Notice_board from "./pages/Notice_board";
import Post_answer from "./pages/Post_answer";
import Test from "./pages/Test";
import Apply_service_select_date from "./pages/line2/Apply_service_select_date";

import Add_notice from "./pages/Add_notice";
import "./styles/common.scss";
// line1 로그인페이지
import Login1 from "./pages/line1/Login1";
import Login2 from "./pages/line1/Login2";
import Login3 from "./pages/line1/Login3";
import Login4 from "./pages/line1/Login4";
import Login5 from "./pages/line1/Login5";
import Login6 from "./pages/line1/Login6";
// line2
import Home from "./pages/line2/home";
import Apply_service from "./pages/line2/Apply_service";
import Mypage1 from "./pages/line2/Mypage1";
import Mypage2 from "./pages/line2/Mypage2";
import My_post_list from "./components/My_Post/My_post_list";

// line3
import Apply_signup_list from "./pages/line3/Apply_signup_list";
import Line3_2 from "./pages/line3/Line3_2";
import Question_list from "./pages/line3/Question_list";
import Line3_4 from "./pages/line3/Line3_4";
import Line3_5 from "./pages/line3/Line3_5";
import Line3_6 from "./pages/line3/Line3_6";

//기타
import Post from "./pages/post";

// login + signup + main
import Login from './components/Login/Login';
import Forgot from './components/Login/Forgot';
import GeneralSignup from './components/Signup/GeneralSignup';
import AdminSignup from './components/Signup/AdminSignup';
import Join from './components/Join/Join';
import SelectType from './components/SelectType/SelectType';
import Main from './components/Main/Main';
import MyPage from './components/MyPage/MyPage';
import Ask from './components/Ask/Ask';
import EditGeneralInfo from './components/EditInfo/EditGeneralInfo';
import EditAdminInfo from './components/EditInfo/EditAdminInfo';
import WithDraw from './components/WithDraw/WithDraw';

// service
import Apply_Service from './components/Service/Service_Post';
import Total_Service from './components/Service/Service_Total';
import Admin_Service from './components/Service/Service_Admin';
import My_Service from './components/Service/My_Service';
import Detail_Service from './components/Service/Service_Detail';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/board_list" element={<Board_lists />}></Route>
      <Route path="/add_post" element={<Add_post />}></Route>
      <Route path="/notice_board" element={<Notice_board />}></Route>
      <Route path="/add_notice" element={<Add_notice />}></Route>
      <Route path="/apply_signup_list" element={<Apply_signup_list />}></Route>

      {/* line1 로그인 페이지 */}
      <Route path="/login1" element={<Login1 />}></Route>
      <Route path="/login2" element={<Login2 />}></Route>
      <Route path="/login3" element={<Login3 />}></Route>
      <Route path="/login4" element={<Login4 />}></Route>
      <Route path="/login5" element={<Login5 />}></Route>
      <Route path="/login6" element={<Login6 />}></Route>
      {/* line2 */}
      {/* <Route path="/" element={<Home />}></Route> */}
      <Route path="/apply_service" element={<Apply_service />}></Route>
      <Route
        path="/apply_service_select_date"
        element={<Apply_service_select_date />}
      ></Route>
      <Route path="/mypage1" element={<Mypage1 />}></Route>
      <Route path="/mypage2" element={<Mypage2 />}></Route>
      <Route path="/my_post_list" element={<My_post_list />}></Route>
      {/* line3 */}
      <Route path="/apply_signup_list" element={<Apply_signup_list />}></Route>
      <Route path="/line3_2" element={<Line3_2 />}></Route>
      <Route path="/question_list" element={<Question_list />}></Route>
      <Route path="/line3_4" element={<Line3_4 />}></Route>
      {/* <Route path="/line3_5" element={<Line3_5 />}></Route>
      <Route path="/line3_6" element={<Line3_6 />}></Route> */}
      {/* 기타 */}
      <Route path="/post" element={<Post />}></Route>
      <Route path="/test" element={<Test />}></Route>

      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="/join" element={<Join />} />
      <Route path="/select" element={<SelectType />} />
      <Route path="/generalSignup" element={<GeneralSignup />} />
      <Route path="/adminSignup" element={<AdminSignup />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/ask" element={<Ask />} />
      <Route path="/editGeneral" element={<EditGeneralInfo />} />
      <Route path="/editAdmin" element={<EditAdminInfo />} />
      <Route path="/withdraw" element={<WithDraw />} />
      <Route path="/service_home" element={<Total_Service />} />
      <Route path="/service_post" element={<Apply_Service />} />
      <Route path="/service_admin" element={<Admin_Service />} />
      <Route path="/service_my" element={<My_Service />} />
      <Route path="/detail_service_post" element={<Detail_Service />} />

      {/* // <div>
  
  //   //<Modify_post />
  //  // <Post_answer />
  //   <Apply_service_select_date />
  
  
 
  // </div> */}
    </Routes>
  </Router>
);
