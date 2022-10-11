import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import DetailMovie from "./Pages/DetailMovie/DetailMovie";
import Layout from "./Layout/Layout";
import "antd/dist/antd.css";
import SignIn from "./Pages/LoginPage/SignIn";
import SignUp from "./Pages/LoginPage/SignUp";
import BookingTicket from "./Pages/BookingTicket/BookingTicket";
import Loading from "./Components/Loading/Loading";
import { createBrowserHistory } from "history";
import { Protected } from "./Pages/BookingTicket/Protected";

export const history = createBrowserHistory();

function App() {
  // console.log("App render - too many log :)))");

  return (
    <div className="App">
      <Loading />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
          <Route
            path="/sign-in/sign-up"
            element={<Layout Component={SignUp} />}
          />
          <Route path="/sign-in" element={<Layout Component={SignIn} />} />
          <Route
            path="/detail/:id"
            element={<Layout Component={DetailMovie} />}
          />
          <Route
            path="/booking-ticket/:maLichChieu"
            element={
              <Protected>
                <BookingTicket />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
