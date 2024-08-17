import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  App,
  Signin,
  Dashboard,
  Signup,
  Post,
  Chapters,
  Submodules,
  Tools,
} from "./pages/index.js";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/chapters/:id/submodules" element={<Submodules />} />
        <Route path="/chapters/:id/submodules/:subId" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;