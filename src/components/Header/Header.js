import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function Header(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <div className="text">{props.title}</div>
        <div className="icon" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faHouse} className="homeIcon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
