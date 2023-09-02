import { Container } from "@radix-ui/themes";

const AuthFormContainer = ({ children }) => {
  return (
    <Container size="1">
      <div className="bg-gray-800/10 rounded-md mt-10 p-5">{children}</div>
    </Container>
  );
};

export default AuthFormContainer;
