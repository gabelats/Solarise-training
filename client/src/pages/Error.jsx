import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="text-center">
      <h1>Error!</h1>
      <h2>This page is not available or doesn't exist.</h2>
      <Link to="/">
        <button className="btn btn-custom">Back to home</button>
      </Link>
    </div>
  );
}
