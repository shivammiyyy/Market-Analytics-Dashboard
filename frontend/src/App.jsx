import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Crashfile } from "./pages/Crashfile";
import { Broker } from "./pages/broker";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";
import { DBoardS } from "./pages/DBoardS";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { DBoardD } from "./pages/DBoardD";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crash/:id" element={<Crashfile/>}/>
        <Route path="/brokers/:id" element={<Broker/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard/:industry" element={<DBoardS/>}/>
        <Route path="/dashboard/:industry/:company" element={<DBoardD/>}/>
      </Routes>
    </Router>
  );
}

export default App;
