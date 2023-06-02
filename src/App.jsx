import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
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
