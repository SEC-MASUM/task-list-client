import "./App.css";

import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
