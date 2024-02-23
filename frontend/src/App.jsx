import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Singup from "./pages/singup/Singup";
import RegisterBarber from "./pages/barber/RegisterBarber";

const router = createBrowserRouter([
  {
    // path: "/",
    // element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/singup",
        element: <Singup/>,
      },
      {
        path: "/register-barber",
        element: <RegisterBarber/>,
      }
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
