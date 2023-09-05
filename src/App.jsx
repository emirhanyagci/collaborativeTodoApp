import { Routes, Route, useNavigate } from "react-router-dom";
import { Login, Signup, Home } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "@radix-ui/themes";
import { useEffect } from "react";
import { signInUser } from "./store/userSlice";
import { QueryClient, QueryClientProvider } from "react-query";
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
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        {user.id ? <SignOut /> : null}

        <Routes>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          {user.id ? (
            <Route path="home" element={<Home />}></Route>
          ) : (
            "Loading..."
          )}
        </Routes>
      </Theme>
    </QueryClientProvider>
  );
}
