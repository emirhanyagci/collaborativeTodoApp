import AuthForm from "../components/AuthForm";
import AuthFormContainer from "../components/AuthFormContainer";
import { signIn } from "../services/auth";
import { useDispatch } from "react-redux";
import { signInUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function signInHandler(email, password) {
    signIn(email, password).then(({ data }) => {
      dispatch(signInUser({ id: data.user.id, email: data.user.email }));
      navigate("/home");
    });
  }
  return (
    <div>
      <AuthFormContainer>
        <AuthForm onSubmit={signInHandler} isLoginPage={true} />
      </AuthFormContainer>
    </div>
  );
}
