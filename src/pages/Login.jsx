import AuthForm from "../components/AuthForm";
import AuthFormContainer from "../components/AuthFormContainer";
import { signIn } from "../services/auth";
import { useDispatch } from "react-redux";
import { signInUser } from "../store/userSlice";
export default function Login() {
  const dispatch = useDispatch();

  async function signInHandler(email, password) {
    signIn(email, password).then(({ data, error }) => {
      dispatch(signInUser({ id: data.user.id, email: data.user.email }));
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
