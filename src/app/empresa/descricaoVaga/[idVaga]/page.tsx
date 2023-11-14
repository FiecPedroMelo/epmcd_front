"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/commons/headerEmpresa";
import Rodape from "@/components/commons/rodape";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function DescricaoVaga() {
  //seta o que vai ter na descricao da vaga para a empresa
  const [DescVaga, SetDescVaga] = useState({
    NomeFantasia: "",
    TituloCargo: "",
    Localizacao: "",
    Descricao: "",
    Requisitos: "",
  });

  const searchParams = useSearchParams();
  const idVaga = 1
  console.log(idVaga);


  // //api que pega a descricao da vaga para a empresa
  // useEffect(() => {
  //   // Substitua a URL pelo endpoint da sua API de banco de dados
  //   const apiUrl = "sua_url_api_aqui";

  //   // Faça uma solicitação GET para obter os dados da vaga
  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       // Atualize o estado com os dados da resposta
  //       SetDescVaga(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao buscar dados da vaga: ", error);
  //     });
  // }, []);

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="bg-slate-100 p-8 rounded-lg overflow-hidden shadow-2xl w-1/2">
          <h1 className="text-2xl font-semibold text-008C83 ">
            Vaga:{DescVaga.TituloCargo}
          </h1>
          <div className="flex items-center justify-center">
            {" "}
            {/* Adicione 'justify-center' para centralizar horizontalmente */}
            <h2 className="text-0C5E58 block mb-1">{DescVaga.TituloCargo}</h2>
          </div>

          <hr className="my-6 border-2 border-008C83" />

          <div className="grid grid-cols gap-4">
            <div className="mb-4">
              <div className="text-0C5E58 block mb-1">Empresa:</div>
              <div>{DescVaga.NomeFantasia}</div>
            </div>

            <div className="mb-4">
              <div className="text-0C5E58 block mb-1">Sobre a vaga:</div>
              <div>{DescVaga.Descricao}</div>
            </div>

            <div className="mb-4">
              <div className="text-0C5E58 block mb-1">Localização:</div>
              <div>{DescVaga.Localizacao}</div>
            </div>

            <div className="mb-4">
              <div className="text-0C5E58 block mb-1">Requisitos:</div>
              <div>{DescVaga.Requisitos}</div>
            </div>

            <button className="bg-0D9488 text-white font-medium px-4 py-2 rounded hover:bg-cyan-600" >
              <Link href={`/empresa/relatorioVaga/${idVaga}`}> 
              Ver Relatório da Vaga
              </Link>
            </button>
          </div>

          <div />
        </div>
      </div>
      <Rodape />
    </>
  );
}

// "use client";

// import React, { useState } from "react";
// import Link from "../../../node_modules/next/link";

//  // Certifique-se de que seu aplicativo esteja configurado para usar o React Router.

//  export default function PerfilCandidato () {

//     const [DescVaga, SetDescVaga] = useState({
//         FotoPerfil:"",
//         NomeFantasia:"",
//         TituloCargo:"",
//         Localizacao:"",
//         Descricao:""
//       });

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-4 m-4">
//       <Link href="/" className="text-blue-500 hover:underline">
//         Voltar para a lista de vagas
//       </Link>
//       <img
//         src={DescVaga.FotoPerfil}
//         alt={DescVaga.NomeFantasia}
//         className="w-16 h-16 rounded-full mx-auto"
//       />
//       <h2 className="text-2xl font-semibold text-center my-2">{DescVaga.TituloCargo}</h2>
//       <p className="text-gray-700 text-center">{DescVaga.Localizacao}</p>
//       <p className="text-gray-600 my-2">{DescVaga.Descricao}</p>
//       <button className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-md">
//         Candidatar-se
//       </button>
//     </div>
//   );
// };
