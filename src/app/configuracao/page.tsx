"use client";

import React from "react";
import { useRouter } from "next/navigation";
import VLibras from '@moreiraste/react-vlibras'
import Link from "../../../node_modules/next/link";

export default function Configuracoes() {

    const router = useRouter();

    const handleCancelar = () => {
        // Use a função router.back() para voltar à página anterior
        router.back();
      };

  

  return (
    <>
    <div className="App">
      <VLibras forceOnload={true} />
      <header className="App-header">
      </header>
    </div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-full sm:w-96">
        <h1 className="text-2xl font-semibold text-center mb-4">Configurações</h1>
        <div className="mb-4">
          <button
            className="w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600"
          >
            <Link href="/"> Sair da conta </Link>
            
          </button>
        </div>
        <div className="mb-4">
          <Link href="/configuracao/ajuda">
        
          <button
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
          >
            
            Ajuda
            
          </button>
          </Link>
        </div>
        <div className="mb-4">
          <button
            className="w-full bg-0D9488  text-white font-semibold py-2 rounded hover:bg-015958"
            onClick={handleCancelar}
          >
            Voltar
          </button>
        </div>
        <div>
        </div>
      </div>
    </div>
    </>
  );
}