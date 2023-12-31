"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/commons/headerCandidato";
import Router from "next/router";
import { useSearchParams } from 'next/navigation';
import { ArrowLeft } from "react-feather";
import Link from "next/link";
import VLibras from '@moreiraste/react-vlibras';


// ⚠️ VER COM O RAFAEL OU FILLIPE A QUESTÃO DE PEGAR O ID PELA URL ⚠️

export default function DescricaoVaga() {

  const [DescVaga, SetDescVaga] = useState({
    IdEmpresa: "",
    NomeFantasia: "",
    TituloCargo: "",
    Localizacao: "",
    DescricaoVaga: "",
    Requisitos: "",
  });

  const Token = localStorage.getItem("jwtToken");
  const searchParams = useSearchParams()
 
  const idVaga = searchParams.get('IdVaga')
  console.log(idVaga);
  


  useEffect(() => {
    // Substitua a URL pelo endpoint da sua API de banco de dados
    const apiUrl = `http://192.168.0.13:38000/api/v1/vagas/${idVaga}/getById`;

    //adiciona o header como uma const chamada config
    const config = {
      headers: {
        "authorization": "Empcd",
      },
    };

    // Faça uma solicitação GET para obter os dados da vaga
    if (idVaga) {
      axios
        .get(apiUrl, config)
        .then((response) => {
          // Atualize o estado com os dados da resposta
          SetDescVaga(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados da vaga: ", error);
        });
    }
  }, [idVaga]);

  console.log(DescVaga);

  const candidatarAVaga = () => {
    const urlApi = `http://192.168.0.13:38000/api/v1/candidatos/${Token}/vaga/${idVaga}/candidataVaga`;

    //adiciona o header como uma const chamada config
    const config = {
      headers: {
        "authorization": "Empcd",
      },
    };

    // Faça uma solicitação POST para candidatar-se à vaga
    axios
      .put(urlApi, null, config)
      .then(() => {
        // Candidatura bem-sucedida, exibir uma mensagem de confirmação
        alert("Candidatura realizada com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao candidatar-se à vaga: ", error);
        // Exibir uma mensagem de erro se a candidatura falhar
        alert("Erro ao candidatar-se à vaga. Por favor, tente novamente.");
      });
  };

  return (
    <>

<div className="App">
      <VLibras forceOnload={true} />
      <header className="App-header">
      </header>
    </div>

      <Header />

      <div className="min-h-screen flex items-center justify-center bg-white">
     
        <div className="bg-slate-100 p-8 rounded-lg overflow-hidden shadow-2xl w-1/2">
          <h1 className="text-2xl font-semibold text-008C83 ">
            {DescVaga.TituloCargo}
          </h1>

          <hr className="my-6 border-2 border-008C83" />

          <div className="grid grid-cols gap-4">
            <div className="mb-4">

            <Link href={`/candidato/perfilEmp?IdEmpresa=${DescVaga.IdEmpresa}`}>
              <div className="text-0C5E58 block mb-1">Empresa: {DescVaga.NomeFantasia}</div>
            </Link>

            </div>

            <div className="mb-4">
              <div className="text-0C5E58 block mb-1">Sobre a vaga:</div>
              <div>{DescVaga.DescricaoVaga}</div>
            </div>

            <div className="mb-4">
              <div className="text-0C5E58 block mb-1">Localização:</div>
              <div>{DescVaga.Localizacao}</div>
            </div>

            <div className="mb-4">
              <div className="text-0C5E58 block mb-1">Requisitos:</div>
              <div>{DescVaga.Requisitos}</div>
            </div>
            <button
              type="submit"
              onClick={candidatarAVaga}
              className="bg-0D9488 text-white font-medium px-4 py-2 rounded hover:bg-cyan-600"
            >
              Candidatar-se a vaga
            </button>
          </div> 
          
<Link href="/candidato" className="text-teal-600 hover:underline">
              <ArrowLeft className="inline -ml-1 inline -ml-1 text-base" />{" "}
              Voltar para a Página Anterior
            </Link>
          <div />
        </div>
      </div>
  
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
