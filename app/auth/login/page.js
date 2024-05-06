"use client";

import Navbar from "@/components/Navbar";
import homeUrl from "@/app/lib/navLink";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { loginUser } from "@/app/actions/authenticate";

const Login = () => {
  const [auth, setAuth] = useState({});
  const [errOpen, setErrorOpen] = useState(false);

  const searchParams = useSearchParams();
  const search = searchParams.get("auth");
  const event = searchParams.get("ev");

  useEffect(() => {
    if (search === "false") {
      setErrorOpen(true);
      setAuth({
        status: false,
        message: "Access Denied. Please log in",
      });
    }

    if (event == "logout") {
      setErrorOpen(true);
      setAuth({
        status: true,
        message: "Logout successful",
      });
    }
  }, []);

  function closeError() {
    if (errOpen) {
      setErrorOpen(false);
    }
  }

  function handleLogin(event) {
    console.error("Login handler callec..");
    event.preventDefault();
    const formData = new FormData(event.target);
    loginUser(undefined, formData);
  }

  return (
    <div>
      <section className="auth-section login-bg">
        <Navbar links={homeUrl} login={true} />
        <div className="login-form-container">
          <h1 className="color-white bold">
            Sign <span className="color-yellow">in</span>
          </h1>
          {errOpen && (
            <div className="mt-15 flex space-between">
              {auth && (
                <p className={!auth.status ? "redColor" : "greenColor"}>
                  {auth.message}
                </p>
              )}
              {errOpen && (
                <div
                  className="btn-close color-white"
                  onClick={closeError}
                ></div>
              )}
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-15">
            <div className="flex gap-10">
              <input
                type="email"
                placeholder="John@example.com"
                className="form-data"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="flex gap-10">
              <input
                type="password"
                placeholder="Password*"
                id="password"
                name="password"
                required
              />
            </div>
            <div className="flex gap-10">
              <Link href="/auth/signup">
                <span className="color-yellow">Forgot Password?</span>
              </Link>
            </div>
            <div className="hero-cta mt-15">
              <button type="submit" className="btn-fw btn-pill primary">
                Login account
              </button>
            </div>
          </form>
          <div className="mt-15">
            <p className="text-center">
              Don't have an account?{" "}
              <Link href="/auth/signup">
                <span className="color-yellow">Create account</span>
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

export default Login;
