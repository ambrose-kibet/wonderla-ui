import { useRouteError, isRouteErrorResponse } from "react-router";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <div
      id="root-error-page"
      className="flex h-screen flex-col items-center justify-center gap-8 text-white bg-blue-950"
    >
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-white">
        <i>{errorMessage}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
