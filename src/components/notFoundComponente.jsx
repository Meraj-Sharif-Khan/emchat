import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url(./notFound.svg)" }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen bg-black opacity-80 px-4">
        <h1 className="text-9xl font-extrabold text-[#46a440]">404</h1>
        <p className="text-2xl mt-4">Lost in the woods?</p>
        <p className="text-lg mt-2 text-gray-300 text-center">
          We couldn't find the page you're looking for.
        </p>
        <Link
          to={"/"}
          className="mt-6 px-6 py-2 rounded-full font-semibold text-white bg-[#46a440]"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
