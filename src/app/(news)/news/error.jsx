"use client";
import NotFoundPage from "@/app/not-found";
import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <div className="text-center mt-24">
      <p className="text-5xl font-bold text-red-500">
        Something went horribly wrong!
      </p>
      <div className="mt-16">
        <Link
          href="/"
          className="px-6 py-3 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default error;
