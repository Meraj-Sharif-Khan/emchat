// App.js

import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authContext";
import NotFound from "./components/notFoundComponente";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            authUser ? <Home authUser={authUser} /> : <Navigate to={"/login"} />
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <Signup />}
        />
      </Routes>
    </>
  );
}

export default App;
