import { Link } from "react-router-dom";
import "../assets/styles/blood.css";
import avatar from "../images/avatar.svg";

const Blood = ({ blood }) => {
  return (
    <div className="mb-3 mx-4 bloodcard">
      <Link
        style={{ textDecoration: "none" }}
        className="imgBx"
        to={`/blood/${blood._id}`}
      >
        <img
          className="img-fluid"
          src={avatar}
          alt={blood.name}
        />
      </Link>
      <div className="text-center name">
        <Link style={{ textDecoration: "none" }} to={`/blood/${blood._id}`}>
          <span>{blood.name}</span>
        </Link>
      </div>
      <div className="group text-center">
        <strong>
          <span>
            Group : <span className="text-danger">{blood.group}</span>
          </span>
        </strong>
        <strong>
          <p>
            Age : <span className="text-success">{blood.age}</span>
          </p>
        </strong>
      </div>
    </div>
  );
};

export default Blood;
