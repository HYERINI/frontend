import Calendar_box from "../../components/Calendar/Calendar.js";
import Header from "../../components/Header/Header.js";
import Btn from "../../components/Btn/Btn";
import { Link } from "react-router-dom";

function Test() {
  return (
    <div>
      <div className="display">
        <Header title="서비스 신청" />
        <div className="display_container">
          <Calendar_box />
          <Link to="/apply_service">
            <Btn btn_txt="선택" />
          </Link>
          <Link to="/apply_service">
            <button>선택!!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Test;
