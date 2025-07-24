import { LoginForm } from "@/components/login-signup/login-form";
import { SignupLogin } from "@/components/login-signup/signup-login";

const Login = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <SignupLogin />
      <LoginForm />
    </section>
  );
};

export default Login;
