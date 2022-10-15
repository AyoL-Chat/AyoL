import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import MainScreen from "./screens/MainScreen/MainScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen/>
  },
  {
    path: "/chat",
    element: <MainScreen/>
  }
]);



const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
