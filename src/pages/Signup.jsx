import AuthForm from "../components/AuthForm";
import AuthFormContainer from "../components/AuthFormContainer";
import { signUp } from "../services/auth";
import { useDispatch } from "react-redux";
import { signInUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function signUpHandler(email, password) {
    signUp(email, password).then(({ data }) => {
      console.log(data);
      dispatch(signInUser({ id: data.user.id, email: data.user.email }));
      navigate("/home");
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
