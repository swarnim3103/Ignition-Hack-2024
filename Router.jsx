import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  App,
  Signin,
  Dashboard,
  Signup,
  Game,
} from "./src/pages/index.js";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;