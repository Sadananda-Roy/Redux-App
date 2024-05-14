import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <div><i>{`error.statusText: ${error.statusText}`}</i></div>
        <div><i>{`error.message: ${error.message}`}</i></div>
      </p>
    </div>
  );
}