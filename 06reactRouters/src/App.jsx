import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "./components/homePage"
import About from './components/about';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <NavBar/>
        <Home/>
      </div>
    },
    {
      path:"/aboutPage",
      element: 
      <div>
      <NavBar/>
      <About/>
    </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
        <NavBar/>
        <Dashboard/>
      </div>
    },
  ]
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
