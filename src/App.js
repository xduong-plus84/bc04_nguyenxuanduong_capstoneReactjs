import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import DetailMovie from "./Pages/DetailMovie/DetailMovie";
import Layout from "./Layout/Layout";
import "antd/dist/antd.css";
import SignIn from "./Pages/LoginPage/SignIn";
import SignUp from "./Pages/LoginPage/SignUp";

function App() {
  // console.log("App render - too many log :)))");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
          <Route path="/sign-up" element={<Layout Component={SignUp} />} />
          <Route path="/sign-in" element={<Layout Component={SignIn} />} />
          <Route
            path="/detail/:id"
            element={<Layout Component={DetailMovie} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
