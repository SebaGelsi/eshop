import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectEmail } from "../../redux/slice/authSlice";

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "sebastian.gelsi02@gmail.com") {
    return children;
  }
  return (
    <section style={{ height: "80vh" }}>
      <div className="container">
        <h2>Permiso denegado.</h2>
        <p>Esta página solo puede ser vista por un Admin.</p>
        <br />
        <Link to="/">
          <button className="--btn">&larr; Regresar al Home</button>
        </Link>
      </div>
    </section>
  );
};

export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "sebastian.gelsi02@gmail.com") {
    return children;
  }
  return null;
};

export default AdminOnlyRoute;