import "./btn.scss";
import { Link } from "react-router-dom";
function Btn(props) {
  return (
    <div className="post_btn_box">
      <Link to={props.url}>
        <button className="post_btn">{props.btn_txt}</button>
      </Link>
    </div>
  );
}

export default Btn;
