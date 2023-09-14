import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage";
import MovieDetails from "./pages/movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />,
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
