import React from "react";
import { SignIn } from "@clerk/clerk-react";

export const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
<SignIn afterSignInRedirectUrl="/dashboard" />    </div>
  );
};
