import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayoutPage from "./layouts/LayoutPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
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
