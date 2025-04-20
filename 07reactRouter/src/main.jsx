import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from './components/Home/home.jsx';
import App from './App.jsx';
import About from './components/About/about.jsx';
import Contact from './components/ContactUs/contactUs.jsx'
import User from './components/User/user.jsx'
import Github , { gitHubInfoLoader } from './components/GitHub/github.jsx';

// let router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//        path: "about",
//        element: <About />
//       },
//       {
//        path: "contactus",
//        element: <Contact/>
//       },
//       // {
//       //  path: "github",
//       //  element: <GitHub/>
//       // }
//     ]
//     // loader: loadRootData,
//   },
// ]);

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contactus' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader = {gitHubInfoLoader} 
      path='github' 
      element={<Github />} 
      />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
