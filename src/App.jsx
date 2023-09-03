import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Login, Signup } from "./pages";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Theme>
          <Routes>
            <Route path="login" element={<Login />}></Route>
            <Route path="signup" element={<Signup />}></Route>
          </Routes>
        </Theme>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
