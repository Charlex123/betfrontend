import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header";
import "./index.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ScrollToTop from "./components/ScrolltoTop";
import Casino from "./pages/Casino";
import Sports from "./pages/Sports";
import Leagues from "./pages/Leagues";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminReg from "./pages/AdminReg";
import MasterAgent from "./pages/MasterAgent";
import MatchDetails from "./pages/MatchDetails";
import SuperAgent from "./pages/SuperAgent";
import AdminPanel from "./pages/AdminPanel";

function App() {
  const [scrollableDiv, setScrollableDiv] = useState(0)
  const [scrollableDivTop, setScrollableDivTop] = useState(0)
  const [trigger, setTrigger] = useState(false)

  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchEventTypes = async () => {
        try {
          const response = await fetch('http://142.93.36.1/api/v1/fetch_data?Action=listEventTypes');
          const responsedata = await response.json();
          console.log('response data',responsedata)
          setData(responsedata);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      setInterval(fetchEventTypes,5000)
    }, [data,loading]);

  function handleScroll(event) {
    setScrollableDivTop(event.currentTarget.scrollTop)
    setScrollableDiv(event.currentTarget)
    setTrigger(true)
  }



  return (
    <React.Fragment>
      <Router>
        <div className="app-bg w-full h-screen">
          <div className="max-w-[480px] w-full mx-auto h-full bg-[#EEF6FB] flex flex-col relative">
            
            <Header />
            <div onScroll={handleScroll} className="overflow-y-scroll flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route
                  path="/casino" element={ <Casino />}
                />
                <Route
                  path="/sports" element={ <Sports />}
                />
                <Route
                  path="/leagues" element={ <Leagues />}
                />
                <Route
                  path="/signup" element={ <Signup />}
                />
                <Route
                  path="/login" element={ <Login />}
                />
                <Route
                  path="/adminreg" element={ <AdminReg />}
                />
                <Route
                  path="/master" element={<MasterAgent/>}
                />
                <Route
                  path="/super" element={<SuperAgent/>}
                />
                <Route
                  path="/admin" element={<AdminPanel/>}
                />
                <Route
                  path="/match-details" element={<MatchDetails/>}
                />
              </Routes>
            </div>
           {trigger && <ScrollToTop scrollableDiv={scrollableDiv} scrollableDivTop={scrollableDivTop} />}
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
