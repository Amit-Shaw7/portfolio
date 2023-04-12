import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./layout/Navbar";
import Home from "./pages/home/Home";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={`${dark === true ? "dark" : ""}`}>
      <div className="dark:bg-black bg-white">
        <Navbar dark={dark} setDark={setDark} />
        <Home dark={dark} />
        <Toaster position="top-center" />
      </div>
    </div>
  );
}

export default App;
