import React from "react";
import PageContent from "../components/PageComponent";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  let title = "An error occured!";
  let message = "Something went wrong!";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resources or page.";
  }
  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}

export default Error;
