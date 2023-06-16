import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Instructors from "./components/Instructors";
import LayoutPage from "./layouts/LayoutPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <Instructors />,
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  )
}

export default App
