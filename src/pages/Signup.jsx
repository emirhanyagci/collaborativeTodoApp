import AuthForm from "../components/AuthForm";
import AuthFormContainer from "../components/AuthFormContainer";
import { signUp } from "../services/auth";
import { useDispatch } from "react-redux";
import { signInUser } from "../store/userSlice";
export default function Signup() {
  const dispatch = useDispatch();
  async function signUpHandler(email, password) {
    signUp(email, password).then(({ data, error }) => {
      console.log(data, error);
      dispatch(signInUser(data.user.id, data.user.email));
    });
  }
  return (
    <div>
      <AuthFormContainer>
        <AuthForm onSubmit={signUpHandler} />
      </AuthFormContainer>
    </div>
  );
}
