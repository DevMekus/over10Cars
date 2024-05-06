import { createSession } from "@/app/lib/session";

export const submitUser = async (data) => {
  console.log("submitting user");
  /**Calling the API here */
  console.log(data);
  console.log(typeof data);
};
