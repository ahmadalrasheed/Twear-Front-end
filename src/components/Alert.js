import React from "react";
import Alert from "react-bootstrap/Alert";

function ErrorAlert({error}) {
  return (
    <div>
      <Alert variant="danger">
          {error}
      </Alert>
    </div>
  );
}

export default ErrorAlert;
