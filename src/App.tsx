import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./routes/home";
import CategoryPage from "./routes/category";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "category",
        element: <CategoryPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
