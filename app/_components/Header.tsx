"use client";

import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import { UserAvatar, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isLoaded } = useUser();
  if (!isLoaded) return null;

  return (
    <header className="w-full border-b border-green-500/20">
      <div className="p-4 max-w-7xl mx-auto flex items-center gap-6">
        {/* LEFT : LOGO */}
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="logo" width={30} height={30} />
          <h2 className="font-bold text-2xl font-game text-green-400">
            CodeBox
          </h2>
        </div>

        {/* CENTER : NAVBAR */}
        <Navbar />

        {/* RIGHT : ACTIONS */}
        <div className="ml-auto flex items-center gap-4">
          {!user ? (
            <Link href={"/sign-in"}>
              <Button className="font-game" variant="outline">
                Sign Up
              </Button>
            </Link>
          ) : (
            <>
              <div className="ml-auto flex items-center gap-4">
                <Button className="font-game" variant="outline">
                  Dashboard
                </Button>

                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox:
                        "w-9 h-9 rounded-full ring-2 ring-green-500/40 hover:ring-green-400 transition",
                    },
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
