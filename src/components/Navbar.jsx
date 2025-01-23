import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const links = (
    <>
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/profile">
        <li>Profile </li>
      </Link>
    </>
  );
  return (
    <nav className="bg-secondary/30 fixed top-0 z-50 w-full">
      <div className="navbar w-11/12 mx-auto">
        <div className="flex-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content border-2 rounded-box z-[1] mt-3 w-52 p-2"
            >
              {links}
            </ul>
          </div>
          <Link href={"/"} className="flex justify-center items-center gap-2">
            <h2 className="text-3xl flex items-center justify-center font-bold ">
              {" "}
              BlogViewer
            </h2>
          </Link>
        </div>
        <div className="flex-none">
          <div>
            <ul className="menu menu-horizontal gap-3 font-semibold px-1  hidden lg:flex mr-2">
              {links}
            </ul>
          </div>
          {(await isAuthenticated()) ? (
            <>
              <LogoutLink>
                <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                  Log Out
                </button>
              </LogoutLink>
            </>
          ) : (
            <LoginLink postLoginRedirectURL="/profile">
              <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                Login
              </button>
            </LoginLink>
          )}
        </div>
      </div>
    </nav>
  );
}
