"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/commons/headerCandidato";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/Logo.png";
import VLibras from '@moreiraste/react-vlibras';


// ⚠️ VER COM O RAFAEL OU FILLIPE A QUESTÃO DE PEGAR O ID PELA URL ⚠️

// props do que vai ser mandado para o card de vaga
interface Job {
  IdEmpresa: string;
  IdVaga: string;
  TituloCargo: string;
  NomeFantasia: string;
  DescricaoVaga: string;
  Status: boolean;
}

// Card de vagas para o candidato
const JobCard: React.FC<Job> = ({
  IdEmpresa,
  IdVaga,
  TituloCargo,
  NomeFantasia,
  DescricaoVaga,
}) => {
  return (
    <div className="max-w-4xl mx-auto my-4">
    <div className="w-3/4 mx-auto bg-slate-100 rounded-lg overflow-hidden shadow-2xl flex">
      <div className="w-3/4 p-4">
        <Link href={`/candidato/descricaoVaga?IdVaga=${IdVaga}`}>
          <div className="text-3xl font-bold">{TituloCargo}</div>
        </Link>
        <Link href={`/candidato/perfilEmp?IdEmpresa=${IdEmpresa}`}> 
        <div className="text-lg text-teal-600">{NomeFantasia}</div>
        </Link>
        <div className="mt-4 text-gray-800"> Descrição: {DescricaoVaga}</div>
  
        <div className="mt-4 flex justify-between">
          <Link href={`/candidato/descricaoVaga?IdVaga=${IdVaga}`} className="justify-end">
            <button className="hover:underline bg-0D9488 text-white px-4 py-2 rounded w-1/1 ">
             Ver Descricao da vaga ▾ 
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default function DashboardCandidato() {
  // seta as vagas como um array vazio
  const [vagas, setVagas] = useState([]);

  // pega o token do localStorage
  const Token = localStorage.getItem("jwtToken");

  // API que pega os dados da vaga pelo token
  useEffect(() => {

    
    console.log("jwtToken:", Token);
    if (Token) {
      //Header que vai ser mandado para o back
      const config = {
            headers: {
              "authorization": "Empcd",
            },
          };

      axios
        .get(`http://192.168.0.13:38000/api/v1/candidatos/getVagas`, config)
        .then((response) => {
          // Processar a resposta da API
          setVagas(response.data);
        })
        .catch((error) => {
          if (error.response) {
            // Erro de resposta da API (por exemplo, status HTTP diferente de 2xx)
            console.error("Erro de resposta da API:", error.response.data);
          } else if (error.request) {
            // Erro de rede (não houve resposta da API)
            console.error("Erro de rede:", error.request);
          } else {
            // Outros erros
            console.error("Erro:", error.message);
          }
        });
    }
  }, [Token]);

  console.log(vagas);

  return (
    <>
    <div className="App">
      <VLibras forceOnload={true} />
      <header className="App-header">
      </header>
    </div>

      <Header />
      <div className="bg-white">
        <main className="flex items-center justify-center">
          <div className="w-3/4">
            <h1 className="font-bold text-teal-600 text-3xl text-center py-8">
              Acesse as Vagas
            </h1>

            {Array.isArray(vagas) && vagas.length > 0 ? (
              vagas
                .filter((job: Job) => job.Status == true) // Filtra as vagas com Status true
                .map((job: Job, index) => <JobCard key={index} {...job} />)
            ) : (
              <p>Nenhuma vaga encontrada.</p>
            )}
          </div>
        </main>
      </div>      
    </>
  );
}

// interface EmpresaProps {
//   NomeFantasia: string;
//   LogoEmpresa: string;
// }

// interface JobCardProps {
//   TituloCargo: string;
//   Descricao: string;
//   Empresa: EmpresaProps;
// }

// const JobCard: React.FC<JobCardProps> = ({ TituloCargo, Descricao, Empresa }) => {
//   return (
//     <div className="max-w-4xl mx-auto my-4">
//       <div className="w-3/4 mx-auto bg-slate-100 rounded-lg overflow-hidden shadow-2xl flex">
//         <div className="w-1/4 p-4">
//         {/* <Image src={Logo} alt={`${Empresa.NomeFantasia} LogoEmpresa`} width={200} height={200} /> */}
//         </div>
//         <div className="w-3/4 p-4">
//           <Link href="/">
//             <div className="text-3xl font-bold">{TituloCargo}</div>
//           </Link>
//           {/* <div className="text-lg text-teal-600">{Empresa.NomeFantasia}</div> */}
//           <div className="mt-4 text-gray-800">Descrição: {Descricao}</div>
//           <div className="mt-4">
//             <Link href="/vaga-completa" className="text-teal-600 hover:underline">
//               Ver mais ▾
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// {
//   id: 1,
//   TituloCargo: 'Desenvolvedor Web',
//   NomeFantasia: 'Empresa A',
//   Descricao: 'Estamos procurando um desenvolvedor web experiente para se juntar à nossa equipe.',
//   LogoEmpresa: 'empresaA_LogoEmpresa.png',
//   status: 'Em Andamento',
// },
// {
//   id: 2,
//   TituloCargo: 'Designer Gráfico',
//   NomeFantasia: 'Empresa B',
//   Descricao: 'Procuramos um designer gráfico criativo e talentoso para nossos projetos.',
//   LogoEmpresa: 'empresaB_LogoEmpresa.png',
//   status: 'Em Andamento',
// },
// {
//   id: 3,
//   TituloCargo: 'Analista de Dados',
//   NomeFantasia: 'Empresa C',
//   Descricao: 'Precisamos de um analista de dados para ajudar a melhorar nossos processos.',
//   LogoEmpresa: 'empresaC_LogoEmpresa.png',
//   status: 'Em Andamento',
// },
