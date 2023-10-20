import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignOut from "./pages/SignUp"
import SignUp from "./pages/SignUp"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-out" element={<SignUp/>} />
    </Routes>
    
    </BrowserRouter>
  )
}
