import { useContext } from "react";
import Body from "../components/Body";
import LoginForm from "../components/forms/LoginForm";
import { LoginContext } from "../App";

export default function LoginPage() {
  const handleLogin = useContext(LoginContext);
  return (
    <Body sidebar={false}>
      <LoginForm />
    </Body>
  )
}
