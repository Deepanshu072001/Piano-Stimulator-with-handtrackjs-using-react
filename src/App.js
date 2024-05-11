
import "./App.css";
import Navbar from "./Navbar.js";
import Home from "./home.js";
import Footer from "./Footer.js";
import Choose from "./Choose.js";
import PianoKeyboad from "./PianoKeyboad.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Notes from "./Notes.js";
import Piano2 from "./Piano2.js";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/><Footer/></>
    },
    {
      path:"/choose",
      element:<><Navbar/><Choose/><Footer/></>
    },
    {
      path:"/PianoKeyboad",
      element:<><Navbar/><PianoKeyboad/><Footer/></>
    },
    {
      path:"/Piano2",
      element:<><Navbar/><Piano2/><Footer/></>
    },
    {
      path:"/Login",
      element:<><Navbar/><Login/><Footer/></>
    },
    {
      path:"/Signup",
      element:<><Navbar/><Signup/><Footer/></>
    },
    {
      path:"/Notes",
      element:<><Navbar/><Notes/><Footer/></>
    },
  
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
