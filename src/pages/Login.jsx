import AuthForm from "../components/AuthForm";
import AuthFormContainer from "../components/AuthFormContainer";

export default function Login() {
  return (
    <div>
      <AuthFormContainer>
        <AuthForm isLoginPage={true} />
      </AuthFormContainer>
    </div>
  );
}
