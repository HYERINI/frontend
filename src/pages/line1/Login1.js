import { Link } from "react-router-dom";
function Test() {
  return (
    <div>
      <div>login page 1</div>
      <Link to="/login2">
        <button>login2</button>
      </Link>
    </div>
  );
}

export default Test;
