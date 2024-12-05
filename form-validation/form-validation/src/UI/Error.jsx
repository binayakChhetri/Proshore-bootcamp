import { Link } from "react-router";
import { Button } from "./Button";

function Error({ errorMessage }) {
  if (errorMessage !== "Page not found") {
    return <p className="error">{errorMessage}</p>;
  }
  return (
    <div className="page-not-found">
      <p>⛔ Page not found ⛔</p>
      <Link to="/">
        {" "}
        <Button btnType="button">Go back to home</Button>{" "}
      </Link>
    </div>
  );
}

export default Error;
