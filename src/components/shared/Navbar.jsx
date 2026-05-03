"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo-sc.png";
import NavLink from "./NavLink";
import Link from "next/link";
import userAvatar from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";
import { ScaleLoader } from "react-spinners";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <nav className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
        <div>
          <Image src={Logo} alt="Logo Image" width={300} height={60} />
        </div>
        <ul className="flex justify-center items-center gap-5 text-[#005691] text-[16px] font-semibold">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink href={"/profile"}>My Profile</NavLink>
          </li>
        </ul>
        {isPending ? (
          <ScaleLoader size="40" color="#FDB813" />
        ) : user ? (
          <div className="flex justify-center items-center gap-4">
            <h2 className="text-[16px] font-medium text-[#005691]">
              Hello, {user?.name}
            </h2>
            <Image
              src={user?.image || userAvatar}
              width={40}
              height={40}
              alt={user?.name}
              className="border border-[#005691] rounded-full"
            />
            <button
              className="bg-red-400 px-4 py-2 rounded-md text-[16px] font-medium text-white cursor-pointer"
              onClick={async () => await authClient.signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <button className="bg-[#FDB813] px-4 py-2 rounded-md text-[16px] font-medium text-white">
              <Link href={"/login"}>Login</Link>
            </button>
            <button className="bg-[#005691] px-4 py-2 rounded-md text-[16px] font-medium text-white">
              <Link href={"/register"}>Register</Link>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
