"use client";

import React, { useState } from "react";
import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
import Logo from "/public/images/Logo.png";

export default function HeaderHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-teal-600 sm:px-6 xl:px-8 py-12 text-white text-center">
      <div className="mx-auto max-w-7xl py-8">
        <div className="flex justify-between items-start">
          <div className="flex-shrink-0 ml-8 mt-4 absolute top-4 left-4">
            <Link href="/">
              <Image className="h-36 w-36" src={Logo} alt="EMPCD" priority />
            </Link>
          </div>

          <div className="hidden sm:inline-flex space-x-4 absolute top-15 right-20">
            <Link
              href="/"
              className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
            >
              Sobre
            </Link>
            <Link
              href="/login"
              className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
            >
              Login
            </Link>
            <Link
              href="/cadastro"
              className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
            >
              Cadastro
            </Link>
          </div>

          <div className="sm:hidden block text-white text-xl font-medium flex justify-end ">
            <button
              className="bg-1A69C6 active:bg-1A34C7 rounded-md px-3 py-2"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="sm:hidden block space-y-2 mt-4">
            <div className="mx-auto h-8 w-8"></div>

            <Link
              href="/"
              className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium block"
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium block"
            >
              Sobre
            </Link>
            <Link
              href="/login"
              className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium block"
            >
              Login
            </Link>
            <Link
              href="/cadastro"
              className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium block"
            >
              Cadastro
            </Link>
          </div>
        )}
        <div className="mt-20">
          <h1 className="text-4xl font-bold">
            Faça seu cadastro e acesse as vagas exclusivas para PCD
          </h1>
        </div>
      </div>
    </header>
  );
}

{
  /* <header className="bg-teal-600 sm:px-6 xl:px-8 py-12 text-white text-center">
      <div className="mx-auto max-w-7xl py-8">
        <div className="flex justify-between items-start">
          {menuOpen ? (
            <div className="hidden sm:inline-flex space-x-4">
              <Link
                href="/"
                className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                href="/sobre"
                className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
              >
                Sobre
              </Link>
              <Link
                href="login"
                className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
              >
                Login
              </Link>
              <Link
                href="/cadastro"
                className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
              >
                Cadastro
              </Link>
            </div>
          ) : null}
          <div className="hidden sm:inline-flex space-x-4 absolute top-15 right-20">
            <Link
              href="/"
              className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className="text-white hover-bg-1A69C6 active-bg-1A34C7 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
            >
              Sobre
            </Link>
            <Link
              href="login"
              className="text-white hover-bg-1A69C6 active-bg-1A34C7 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
            >
              Login
            </Link>
            <Link
              href="/cadastro"
              className="text-white hover-bg-1A69C6 active-bg-1A34C7 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
            >
              Cadastro
            </Link>
          </div>
          <div className="sm:hidden block text-white text-xl font-medium">
            <button
              className="bg-1A69C6 active-bg-1A34C7 rounded-md px-3 py-2"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="sm:hidden block space-y-2 mt-4">
            <Link
              href="/"
              className="text-white hover-bg-1A69C6 active-bg-1A34C7 hover:text-white rounded-md px-3 py-2 text-lg font-medium block"
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className="text-white hover-bg-1A69C6 active-bg-1A34C7 hover:text-white rounded-md px-3 py-2 text-lg font-medium block"
            >
              Sobre
            </Link>
            <Link
              href="login"
              className="text-white hover-bg-1A69C6 active-bg-1A34C7 hover:text-white rounded-md px-3 py-2 text-lg font-medium block"
            >
              Login
            </Link>
            <Link
              href="/cadastro"
              className="text-white hover-bg-1A69C6 active-bg-1A34C7 hover:text-white rounded-md px-3 py-2 text-lg font-medium block"
            >
              Cadastro
            </Link>
          </div>
        )}
        <div className="mt-20">
          <h1 className="text-4xl font-bold">
            Faça seu cadastro e acesse as vagas exclusivas para PCD
          </h1>
        </div>
        {!menuOpen && (
          <div className="mt-4">
            <Link href="/">
              <Image
                className="h-36 w-36 mx-auto"
                src={Logo}
                alt="EMPCD"
                priority
              />
            </Link>
          </div>
        )}
      </div>
    </header> */
}
