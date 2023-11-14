"use client";

import React from "react";
import Link from "next/link";
import Rodape from "@/components/commons/rodape";
import Header from "@/components/commons/headerEmpresa";

export default function DashboardEmpresa() {

  const totalVagasEmAndamento = 0; // vagasEmAndamento.length;
  const totalVagasFinalizadas = 0; //vagasFinalizadas.length;

  return (
    <>
      {/* <HeaderEmpresa /> */}

      <Header />

      <div>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="bg-slate-100 p-8 rounded-lg overflow-hidden shadow-2xl w-[400px]">
            <h1 className="text-xl font-semibold">Dashboard de Vagas</h1>
            <div className="mt-4 space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <h2 className="text-lg font-semibold">
                    Vagas em Andamento: 
                  </h2>
                </div>
                <div className="w-1/2">
                  <h2 className="text-lg font-semibold">
                    Vagas Finalizadas: 
                  </h2>
                </div>
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
              <Link
                href="/empresa/vagasEmAndamento"
                className="bg-0D9488 hover:bg-015958 active:bg-023535 text-white px-4 py-2 rounded w-1/2"
              >
                <button>Vagas em Andamento</button>
              </Link>

              <Link
                href="/empresa/vagasFinalizadas"
                className="bg-0D9488 hover:bg-015958 active:bg-023535 text-white px-4 py-2 rounded w-1/2"
              >
                <button>Vagas em Finalizadas</button>
              </Link>
            </div>
            <div className="mt-4">
              <Link
                href="/empresa/cadastrarVaga"
                className="bg-blue-500 hover:bg-1A69C6 active:bg-1A34C7 text-white px-4 py-2 rounded w-full text-center block"
              >
                Adicionar Vaga
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Rodape />
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const JobList = () => {
//   const [vagas, setVagas] = useState([]);

//   useEffect(() => {
//     axios.get("/api/vagas") // Rota da API
//       .then((response) => {
//         setVagas(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Vagas de Emprego</h1>
//       <ul>
//         {vagas.map((vaga) => (
//           <li key={vaga.id}>
//             <h2>{vaga.jobTitle}</h2>
//             <p>{vaga.companyName}</p>
//             <p>{vaga.jobDescription}</p>
//             <img src={vaga.logoUrl} alt={vaga.companyName} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default JobList;

/* <div className="bg-white">
    <main className="flex items-center justify-center">
      <div className="w-3/4">
        <h1 className="font-bold text-white text-3xl text-center py-8">
          Acesse as Vagas
        </h1>

        {vagas.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </main>
  </div> */

// export default function Dashboard() {
//   return (
//     <>
//       <Header />
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="max-w-screen-xl p-10 bg-gray-200 rounded-lg shadow-xl">
//           <h1 className="text-3xl font-bold text-teal-600 text-center mb-8">
//             Bem-vindo ao Seu Dashboard
//           </h1>
//           <div className="grid grid-cols-1 gap-8">
//             <p>
//                 Você acabou de realizar o Login em nosso site! logo mais teremos vagas de emprego para você!
//             </p>
//            </div>
//         </div>
//       </div>
//     </>
//   );
