"use client";

import { signIn } from "next-auth/react";

export function GoogleSignInButton() {
  const handleSignIn = () =>
    signIn("google", {
      callbackUrl: "/",
    });

  return (
    <button
      onClick={handleSignIn}
      className="w-full flex items-center justify-center gap-3 rounded-lg bg-white text-gray-900 px-4 py-3 font-semibold shadow hover:shadow-lg transition-shadow duration-150"
    >
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6 1.54 7.38 2.83l5.4-5.26C33.66 3.51 29.18 1.5 24 1.5 14.73 1.5 6.9 7.74 3.94 16.21l6.66 5.17C12.03 15.06 17.49 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.5 24.55c0-1.58-.14-3.07-.4-4.55H24v8.62h12.7c-.55 2.98-2.23 5.5-4.75 7.19l7.33 5.69C43.86 37.97 46.5 31.87 46.5 24.55z"
        />
        <path
          fill="#FBBC05"
          d="M10.6 28.04a14.52 14.52 0 010-8.09l-6.66-5.17a22.455 22.455 0 000 18.43l6.66-5.17z"
        />
        <path
          fill="#34A853"
          d="M24 46.5c6.48 0 11.91-2.13 15.88-5.79l-7.33-5.69c-2 1.37-4.57 2.19-8.55 2.19-6.51 0-11.97-5.56-13.4-12.91l-6.66 5.17C6.9 40.26 14.73 46.5 24 46.5z"
        />
        <path fill="none" d="M1.5 1.5h45v45h-45z" />
      </svg>
      Entrar com Google
    </button>
  );
}
