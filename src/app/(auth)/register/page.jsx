"use client";

import { authClient, githubSignIn, googleSignIn } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const RegisterPage = () => {
  const [visible, setVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    console.log(data);
    const { data: res, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    console.log("data:", res, "error:", error);
  };

  return (
    <div className=" bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4 my-6">
      <p className="text-lg text-center font-semibold border-b border-black/20 pb-4 mb-4">
        Register
      </p>
      <form onSubmit={handleSubmit(handleLogin)} className="fieldset">
        <label className="label">Name</label>
        <input
          type="text"
          className="input"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        {errors.name && <p className="text-red-500">* Name is required</p>}

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Enter your email address"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="text-red-500">* Email is required</p>}

        <label className="label">Password</label>
        <div className="relative">
          <input
            type={`${visible ? "text" : "password"}`}
            className="input"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          <span
            onClick={() => {
              setVisible(!visible);
            }}
            className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer p-1 text-sm w-fit"
          >
            {visible ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-500">* Password is required</p>
        )}

        <button className="btn btn-neutral mt-4">Register</button>
        <div className="mx-auto mt-2 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="hover:text-blue-500 underline">
            Login
          </Link>{" "}
        </div>
      </form>

      {/* Google */}
      <button
        onClick={googleSignIn}
        className="btn w-full bg-white text-black border-[#e5e5e5] mb-2 mt-5"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Register with Google
      </button>
      {/* GitHub */}
      <button
        onClick={githubSignIn}
        className="btn w-full bg-blue-950 text-white border-black"
      >
        <svg
          aria-label="GitHub logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
          ></path>
        </svg>
        Register with GitHub
      </button>
    </div>
  );
};

export default RegisterPage;
