import "./App.css";
// import Header from "./Components/Layout/Header";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import PlansPricing from "./Components/Plans&Pricing";
import FAQs from "./Components/FAQs";
import Contact from "./Components/Contact";
import StartToday from "./Components/Start Today";

function App() {
  return (
    <div className="App">
    

      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/plans&pricing" element={<PlansPricing />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route  path="/contact" element={<Contact />} />
      <Route  path="/starttoday" element={<StartToday />} />
    </Routes>
      
    </div>
  );
}

export default App;



