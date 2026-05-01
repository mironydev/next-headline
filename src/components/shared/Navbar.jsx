"use client";

import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import NavLink from "./NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;
  return (
    <div className="container mx-auto max-lg:collapse mt-5">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-stone-600 text-base rounded-full space-x-4">
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/about"}>About</NavLink>
            <NavLink href={"/career"}>Career</NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {isPending ? (
            <span className="loading loading-spinner loading-sm mr-14"></span>
          ) : user ? (
            <>
              <p className="hover:shadow-[inset_0_4px_12px_rgba(0,0,0,0.1)] font-bold px-2 py-1 rounded-sm">
                {user?.name}
              </p>

              <FaCircleUser className="text-3xl" />

              <button
                className="hover:shadow-[inset_0_4px_12px_rgba(0,0,0,0.1)] text-xl p-1.5 rounded-sm cursor-pointer"
                title="Logout"
                onClick={async () => {
                  await authClient.signOut();
                }}
              >
                <MdLogout />
              </button>
            </>
          ) : (
            <Link href="/login" className="btn bg-stone-700 text-white">
              Login
            </Link>
          )}
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu text-stone-600 space-y-2">
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/about"}>About</NavLink>
          <NavLink href={"/career"}>Career</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
