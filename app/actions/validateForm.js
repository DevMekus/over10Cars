"use client";
import { SignupFormSchema } from "@/app/lib/definitions";
// import { useState } from "react";

export const validateForm = (formData) => {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  /**Return invalid fields Immediately */
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  return validatedFields;
};
