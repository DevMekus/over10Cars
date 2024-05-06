"use client";
import Navbar from "@/components/Navbar";
import { homeUrl } from "@/app/lib/navigations";
import Link from "next/link";
import { validateForm } from "@/app/actions/validateForm";
import { useState } from "react";
import { createNewUser } from "@/app/actions/authenticate";

const Register = () => {
  const [errors, setErrors] = useState({});

  function handleSignupSubmit(event) {
    event.preventDefault();
    setErrors({});
    const formData = new FormData(event.target);
    const err = validateForm(formData);

    if (err && err.errors) {
      setErrors(err.errors);
      return;
    }
    createNewUser(formData);
  }
  return (
    <div>
      <section className="auth-section login-bg">
        <Navbar links={homeUrl} login={true} />
        <div className="login-form-container">
          <h1 className="color-white bold">
            Create <span className="color-yellow">account</span>
          </h1>
          <div className="mt-15">
            <form onSubmit={handleSignupSubmit} className="signupForm">
              <div>
                <div className="flex gap-10">
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="form-data"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                {errors && errors.name && (
                  <div>
                    <ul>
                      {errors.name.map((error) => (
                        <li key={error} className="redColor">
                          - {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

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

              <div>
                <div className="flex gap-10">
                  <input
                    type="password"
                    placeholder="Password*"
                    className="form-data"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                {errors && errors.password && (
                  <div>
                    <p>Password must be:</p>
                    <ul>
                      {errors.password.map((error) => (
                        <li key={error} className="redColor">
                          - {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="hero-cta">
                <button type="submit" className="btn-fw btn-pill primary">
                  Get Started
                </button>
              </div>
            </form>
          </div>
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
