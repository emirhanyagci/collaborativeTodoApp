import { useState } from "react";
import { TextField, Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
const AuthForm = ({ isLoginPage = false, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function onSubmitHandler(e) {
    e.preventDefault();
    onSubmit(email, password);
  }
  return (
    <form className=" text-gray-900 space-y-3" onSubmit={onSubmitHandler}>
      <div className="font-bold text-black text-lg">
        {isLoginPage ? "Sign in to your account" : " Create an account"}
      </div>
      <div>
        <span>Your email</span>
        <TextField.Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
          size="3"
        />
      </div>
      <div>
        <span>Your password</span>
        <TextField.Input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password"
          size="3"
        />
      </div>
      <Button>{isLoginPage ? "Sign In" : "Create an account"}</Button>
      <div className="text-gray-500 text-sm">
        {isLoginPage
          ? "Don’t have an account yet?"
          : "Already have an account? "}

        <Link to={isLoginPage ? "/signup" : "/login"}>
          <span className="text-blue-600">
            {isLoginPage ? "Sign up" : "Login here"}
          </span>
        </Link>
      </div>
    </form>
  );
};

export default AuthForm;
