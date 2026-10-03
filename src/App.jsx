import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./nav-foot/Footer";
import Navbar from "./nav-foot/Navbar";
import HomePage from "./landingPage/HomePage";
import AddMove from "./landingPage/addingMove/AddMove";
import MovieDitailPage from "./landingPage/movieShowAndBook/MoveDitalPage";
import MoveBookingPage from "./landingPage/movieShowAndBook/MoveBookingPage";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<MovieDitailPage />} />
          <Route path="/addMove" element={<AddMove />} />
          <Route path="/user/:id" element={<MovieDitailPage />} />
          <Route path="/book/:id" element={<MoveBookingPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
