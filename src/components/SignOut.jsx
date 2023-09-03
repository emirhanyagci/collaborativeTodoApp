import { ExitIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useDispatch } from "react-redux";
import { signOutUser } from "../store/userSlice";
const SignOut = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(signOutUser())}
      variant="ghost"
      className="fixed left-5 top-5"
    >
      <ExitIcon className="w-6 h-6 " />
    </Button>
  );
};

export default SignOut;
