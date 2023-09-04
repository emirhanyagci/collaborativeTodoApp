import { Routes, Route, useNavigate } from "react-router-dom";
import { Login, Signup, Home, Users } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "@radix-ui/themes";
import { useEffect } from "react";
import { signInUser } from "./store/userSlice";
import "@radix-ui/themes/styles.css";
import SignOut from "./components/SignOut";
export default function App() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.id) return;
    if (localStorage.getItem("user"))
      dispatch(signInUser(JSON.parse(localStorage.getItem("user"))));
    if (!user.id && !localStorage.getItem("user")) navigate("/login");
  }, [user]);

  return (
    <Theme>
      {user.id ? <SignOut /> : null}

      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="users" element={<Users />}></Route>
      </Routes>
    </Theme>
  );
}
