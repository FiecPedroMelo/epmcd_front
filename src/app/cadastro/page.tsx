"use client";

import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
import empresa from "/public/images/empresa.png";
import candidato from "/public/images/candidato.png";
import { ArrowLeft } from "react-feather";

export default function Cadastro() {
  //Pagina que define qual o tipo de cadastro o usuario vai querer fazer
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-0D9488">
      <h1 className="text-4xl text-white mb-6">
        Escolha o seu tipo de cadastro:
      </h1>
      <div className="flex flex-col md:flex-row gap-4">
        <Link href="/cadastro/candidato" className="w-full md:w-1/2">
          <div>
            <button className="bg-white p-4 rounded-xl hover:bg-gray-200">
              <Image
                className="sm:h-40 sm:w-40 md:h-40 md:w-40 xl:h-80 xl:w-80"
                src={candidato}
                alt="EMPCD"
                priority
              />
              <p className="text-2xl text-0D9488 text-center">Candidato</p>
            </button>
          </div>
        </Link>
        <Link href="/cadastro/empresa" className="w-full md:w-1/2">
          <div>
            <button className="bg-white p-4 rounded-xl hover:bg-gray-200">
              <Image
                className="sm:h-40 sm:w-40 md:h-40 md:w-40 xl:h-80 xl:w-80"
                src={empresa}
                alt="EMPCD"
                priority
              />
              <p className="text-2xl text-0D9488 text-center">Empresa</p>
            </button>
          </div>
        </Link>
      </div>
      <Link href="/" className="text-white hover:underline py-4">
        <ArrowLeft className="inline -ml-1 inline -ml-1 text-base" /> Voltar
        para a Página Inicial
      </Link>
    </div>
  );
}
