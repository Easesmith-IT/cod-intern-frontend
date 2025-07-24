import { SignupForm } from "@/components/login-signup/signup-form/signup-form";
import { SignupLogin } from "@/components/login-signup/signup-login";

const Signup = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <SignupLogin />
      <SignupForm />
    </section>
  );
};

export default Signup;
