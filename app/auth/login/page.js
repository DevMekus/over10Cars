"use client";

import Navbar from "@/components/Navbar";
import homeUrl from "@/lib/navLink";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Login = () => {
  const [auth, setAuth] = useState(false);
  const [errOpen, setErrorOpen] = useState(true);

  const searchParams = useSearchParams();
  const search = searchParams.get("auth");

  useEffect(() => {
    if (search === "f") {
      setAuth(true);
    }
  }, []);

  function closeError() {
    if (errOpen) {
      setErrorOpen(false);
    }
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
              {auth && <p className="redColor">Access Denied. Please log in</p>}
              <div className="btn-close color-white" onClick={closeError}></div>
            </div>
          )}

          <form className="mt-15">
            <div className="flex gap-10">
              <input type="text" placeholder="Your Email*" className="" />
            </div>
            <div className="flex gap-10">
              <input type="password" placeholder="Password*" className="" />
            </div>
            <div className="flex gap-10">
              <Link href="/auth/signup">
                <span className="color-yellow">Forgot Password?</span>
              </Link>
            </div>
            <div className="hero-cta mt-15">
              <button className="btn-fw btn-pill primary">Get Started</button>
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
