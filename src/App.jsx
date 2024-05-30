import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizForm from "./components/QuizForm";
import Intro from "./components/Intro";
import ThankYou from "./components/Thankyou";

function App() {
  return (
    <Router>
      <div className="">
      
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/quiz" element={<QuizForm />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>

      </div>
    </Router>
  );
}

export default App;
