import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Crashfile } from "./pages/Crashfile";
import { Broker } from "./pages/broker";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";
import { DBoardS } from "./pages/DBoardS";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { DBoardD } from "./pages/DBoardD";
import Navbar from "./components/Navbar";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import { News } from "./pages/News";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/crash/:id" element={<Crashfile/>}/>
        <Route path="/brokers/:id" element={<Broker/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard/:industry" element={
          <SignedIn><DBoardS/></SignedIn>
          }/>
        <Route path="/dashboard/:industry/:symbol" element={<SignedIn><DBoardD/></SignedIn>}/>
      </Routes>
    </Router>
  );
}

export default App;
