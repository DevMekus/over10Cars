import Navbar from "@/components/Navbar";
import homeUrl from "@/lib/navLink";
import Link from "next/link";

const Register = () => {
  return (
    <div>
      <section className="auth-section login-bg">
        <Navbar links={homeUrl} login={true} />
        <div className="login-form-container">
          <h1 className="color-white bold">
            Create <span className="color-yellow">account</span>
          </h1>
          <form className="mt-15">
            <div className="flex gap-10">
              <input type="text" placeholder="Your Name*" className="" />
            </div>
            <div className="flex gap-10">
              <input type="text" placeholder="Your Email*" className="" />
            </div>
            <div className="flex gap-10">
              <input type="password" placeholder="Password*" className="" />
            </div>
            <div className="hero-cta">
              <button className="btn-fw btn-pill primary">Get Started</button>
            </div>
          </form>
          <div className="mt-15">
            <p className="text-center">
              Already have an account?{" "}
              <Link href="/auth/login">
                <span className="color-yellow">Sign In</span>
              </Link>
            </p>
            <p className="text-center">
              This site is protected by AutoInspect. <br />
              Its Privacy Policy and Terms of Service apply.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
