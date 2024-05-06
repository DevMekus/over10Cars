"use server";

import { createSession, deleteSession } from "@/app/lib/session";
import { NextResponse } from "next/server";

export async function createNewUser(req, formData) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers if needed
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  };

  const APIdata = await fetch("http://localhost/over10API/accounts", options)
    .then((response) => {
      if (!response.ok) {
        /**Redirect back to signup with message */
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data.id;
    })
    .catch((error) => {
      /**Redirect back to signup with message */
      console.error("Authentication error:", error);
      return false;
    });

  const user = APIdata;

  createSession({ userid: user });

  return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
}

export async function loginUser(req, formData) {
  console.error("Login Server called..");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      /**Additional header like API token */
    },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  };

  const APIdata = await fetch(
    "http://localhost/over10API/authenticate",
    options
  )
    .then((response) => {
      if (!response.ok) {
        /**Redirect back to signup with message */
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data.id;
    })
    .catch((error) => {
      /**Redirect back to signup with message */
      console.error("Authentication error:", error);
      return false;
    });

  const user = APIdata;
  console.log(user);

  createSession({ userid: user });

  return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
}

export async function logoutUser(req) {
  deleteSession();
  return NextResponse.redirect(new URL("/auth/login?ev=logout", req.nextUrl));
}
