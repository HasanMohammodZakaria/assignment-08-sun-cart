"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/logo-sc.png";
import NavLink from "./NavLink";
import Link from "next/link";
import userAvatar from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";
import { ScaleLoader } from "react-spinners";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="border-b border-gray-100 w-full">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 flex justify-between items-center py-3 min-w-0">
          <div className="shrink-0">
            <Image
              src={Logo}
              alt="Logo"
              width={180}
              height={50}
              className="w-30 md:w-37.5 lg:w-55 h-auto"
              priority
            />
          </div>

          <ul className="hidden md:flex items-center gap-5 text-[#005691] text-[14px] lg:text-[16px] font-semibold min-w-0">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/products">Products</NavLink>
            </li>
            <li>
              <NavLink href="/profile">My Profile</NavLink>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-2 lg:gap-4 shrink-0">
            {isPending ? (
              <ScaleLoader size={25} color="#FDB813" />
            ) : user ? (
              <>
                <h2 className="text-[14px] text-[#005691] whitespace-nowrap hidden lg:block">
                  Hello, {user?.name}
                </h2>

                <Image
                  src={user?.image || userAvatar}
                  width={35}
                  height={35}
                  alt="user"
                  className="rounded-full border border-[#005691] shrink-0"
                />

                <button
                  onClick={async () => await authClient.signOut()}
                  className="bg-red-400 px-3 py-2 rounded-md text-white text-[14px] font-semibold whitespace-nowrap"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  className="bg-[#FDB813] px-3 py-2 rounded-md text-white text-[14px] font-semibold"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className="bg-[#005691] px-3 py-2 rounded-md text-white text-[14px] font-semibold"
                  href="/register"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden shrink-0">
            <button onClick={() => setOpen(true)}>
              <HiOutlineMenuAlt3 size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= OFFCANVAS ================= */}

      <div
        className={`fixed top-0 left-0 h-full w-70 bg-white shadow-xl z-50 transform transition-transform duration-300 flex flex-col
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b shrink-0">
          <Image src={Logo} alt="logo" width={120} height={40} />

          <button onClick={() => setOpen(false)}>
            <HiX size={22} />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-5 text-[#005691] font-medium text-[14px] flex-1">
          <NavLink onClick={() => setOpen(false)} href="/">
            Home
          </NavLink>
          <NavLink onClick={() => setOpen(false)} href="/products">
            Products
          </NavLink>
          <NavLink onClick={() => setOpen(false)} href="/profile">
            My Profile
          </NavLink>
        </div>

        <div className="p-5 border-t flex flex-col gap-3 shrink-0">
          {user ? (
            <button
              onClick={async () => {
                await authClient.signOut();
                setOpen(false);
              }}
              className="bg-red-400 px-2 lg:px-3 py-2 rounded-md text-white text-[13px] whitespace-nowrap"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="bg-[#FDB813] px-4 py-2 rounded-md text-white text-center text-[14px]"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="bg-[#005691] px-4 py-2 rounded-md text-white text-center text-[14px]"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
    </>
  );
};

export default Navbar;
