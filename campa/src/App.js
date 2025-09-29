import "./App.css";
import CenterPart from "./components/CenterPart";
import ChatSection from "./components/ChatSection";
import LeftPanel from "./components/LeftPanel";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div>
      <div className="app">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/home" element={<Home />}></Route>

            <Route path="/aboutus" element={<AboutUs />}></Route>

            <Route path="/services" element={<Services />}></Route>

            <Route path="/contactus" element={<ContactUs />}></Route>
          </Routes>
        </BrowserRouter>
        <div className="layout">
          <LeftPanel />
          <CenterPart />
          <ChatSection />
        </div>
      </div>
    </div>
  );
}

export default App;
