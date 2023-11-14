"use client";

import React, { useState } from "react";
import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
import LogoMenor from "/public/images/LogoSemFundo.png";

export default function HeaderCandidato() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-teal-600 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo à esquerda (em telas pequenas, ele vai para o topo) */}
        <Link href="/candidato" passHref>
          <div className="h-36 w-36 sm:h-24 sm:w-24 sm:order-1">
            <Image
              src={LogoMenor}
              alt="EMPCD"
              priority
              layout="responsive"
              className="h-36 w-36"
            />
          </div>
        </Link>

        {/* Opções à direita (em telas pequenas, elas vão para o centro) */}
        <div className="order-1 sm:order-2">
          <div className="sm:hidden block text-white text-xl font-medium">
            <button
              className="bg-1A69C6 active:bg-1A34C7 rounded-md px-3 py-2"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>

          {menuOpen && (
            <div className="sm:hidden block space-y-2 mt-4">
              <div className="mx-auto h-8 w-8"></div>

              <Link
                href="/candidato"
                className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium block"
              >
                Inicio
              </Link>

              <Link
                href="/candidato/perfil"
                className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium block"
              >
                Perfil
              </Link>

              <Link
                href="/candidato/configuracao"
                className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium block"
              >
                Configuração
              </Link>
            </div>
          )}

          <div className="hidden sm:inline-flex space-x-4">
            <Link
              href="/candidato"
              className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium block"
            >
              Inicio
            </Link>

            <Link
              href="/candidato/perfil"
              className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium block"
            >
              Perfil
            </Link>

            <Link
              href="/candidato/configuracao"
              className="text-white hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium block"
            >
              Configuração
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
