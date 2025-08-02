import { LoginForm } from "@/components/login-signup/login-form";
import { SignupLogin } from "@/components/login-signup/signup-login";

const Login = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <SignupLogin desc="Log in to discover new job opportunities, share knowledge, and grow your career.">
        <span className="text-main">Join a thriving</span> community of
        Jobseekers
      </SignupLogin>
      <LoginForm />
    </section>
  );
};

export default Login;
