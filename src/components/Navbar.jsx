"use client";

import {authClient} from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {useEffect, useRef, useState} from "react";

const Navbar = () => {
  const {data: session} = authClient.useSession();
  const user = session?.user;

  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef(null);
  const menuRef = useRef(null);

  const handleSignOut = async () => {
    await authClient.signOut();
    setProfileOpen(false);
    router.push("/login")
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/Logo1.png"
              alt="logo"
              width={60}
              height={60}
              className="rounded-md"
            />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              SportNest
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-black transition"
            >
              Home
            </Link>
            <Link
              href="/facilities"
              className="text-gray-600 hover:text-black transition"
            >
              All Facilities
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* LOGIN / PROFILE */}
            {!user ? (
              <Link href="/login">
                <button className="px-4 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition">
                  Login
                </button>
              </Link>
            ) : (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2"
                >
                  <Image
                    src={user.image || "/assets/default-user.png"}
                    alt={user.name || "user"}
                    width={36}
                    height={36}
                    className="rounded-full border"
                  />
                </button>

                {/* PROFILE DROPDOWN */}
                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-52 bg-white border rounded-xl shadow-lg overflow-hidden">
                    <div className="px-4 py-3 border-b">
                      <p className="text-sm font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>

                    <Link
                      href="/my-bookings"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      My Bookings
                    </Link>

                    <Link
                      href="/add-facility"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Add Facility
                    </Link>

                    <Link
                      href="/manage-facilities"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Manage Facilities
                    </Link>

                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden p-2 rounded-md border"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div ref={menuRef} className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              All Facilities
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
