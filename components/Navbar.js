"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

const Navbar = ({ links, login }) => {
  const [isScrolled, setisScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`nav-container ${isScrolled ? "nav-dark" : "nav-default"}`}>
      <nav className="nav-bar container">
        <div className="logo-section">
          <Link href="/">
            <img
              src="/logo-black-edit.jpg"
              alt="logo"
              className="img-fluid nav-logo"
            />
          </Link>
        </div>

        <div className="link-section">
          <div className="links">
            {links.map((link) => (
              <div key={link.id} className="link-wrapper">
                <Link href={`${link.url}`} className="link">
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="navbar-right">
            <div className="wrap">
              <div className="icon-wrap wrap-primary">
                {" "}
                <span className="material-symbols-outlined">
                  account_circle
                </span>
              </div>
              <div className="text">
                <p>{login ? "Have an account?" : ""}</p>
                <h5>
                  <Link href={login ? `/auth/login` : ``} className="auth-link">
                    Sign {login ? "in" : "out"}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
