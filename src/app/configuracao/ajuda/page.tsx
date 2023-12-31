"use client";

import React from "react";
import { useRouter } from "next/navigation";
import VLibras from '@moreiraste/react-vlibras'
import Link from "next/link";
import { ArrowLeft } from "react-feather";

export default function Voltar() {

    const router = useRouter();

  const handleCancelar = () => {
    // Utilize a função router.back() para voltar à página anterior
    router.back();
  };

  return (
    <>
      <div className="App">
        <VLibras forceOnload={true} />
        <header className="App-header">
        </header>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-gray-200 p-8 rounded-lg max-w-2xl">
          <h2 className="text-md font-bold mb-2"> Tem alguma dúvida ou sugestão? Entre em contato conosco!</h2>
          <br />
          <p> Através do email: empcdgroup@gmail.com, você pode tirar suas dúvidas e sugestões! 
          </p>

          {/* Botão de Voltar */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleCancelar}
              className="bg-0D9488 hover:bg-015958 text-white font-bold py-2 px-4 rounded"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
