import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup } from "./pages";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Routes>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Routes>
      </Theme>
    </BrowserRouter>
  );
}
