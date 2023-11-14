"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Rodape from "@/components/commons/rodape";
import Header from "@/components/commons/headerEmpresa";
import { ArrowLeft } from "react-feather";

// o que vai ser passado para o card de vaga em andamento da empresa
interface Job {
  IdVaga: string;
  TituloCargo: string;
  NomeFantasia: string;
  DescricaoVaga: string;
  onFinalizarClick: () => void;
}

// card da vaga em andamento da empresa
const JobCard: React.FC<Job> = ({
  IdVaga,
  TituloCargo,
  NomeFantasia,
  DescricaoVaga,
  onFinalizarClick,
})  => {
  const handleFinalizarClick = () => {
    onFinalizarClick(IdVaga);
  };
  return (
<div className="max-w-4xl mx-auto my-4">
  <div className="w-3/4 mx-auto bg-slate-100 rounded-lg overflow-hidden shadow-2xl flex">
    <div className="w-3/4 p-4">
      <Link href={`/empresa/descricaoVaga/${IdVaga}`}>
        <div className="text-3xl font-bold">{TituloCargo}</div>
      </Link>
      <div className="text-lg text-teal-600">{NomeFantasia}</div>
      <div className="mt-4 text-gray-800"> Descrição: {DescricaoVaga}</div>

      <div className="mt-4 flex justify-between">
      <button onClick={onFinalizarClick} className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded ">
                Finalizar Vaga
      </button>
        <Link href={`/empresa/relatorioVaga/${IdVaga}`} className="justify-end">
          <button className="hover:underline bg-0D9488 text-white px-4 py-2 rounded w-1/1 ">
            Ver Relatório de Vagas
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>
  );
};

export default function VagasEmAndamento() {
  //seta vagasEmAndamento como array e passa os cards da vaga em andamento (Job)
  const [vagasEmAndamento, setVagasEmAndamento] = useState<Job[]>([]);
  const Token = localStorage.getItem("jwtToken");


  // API para finalizar a vaga em andamento

  const handleFinalizarVaga = async (IdVaga: string) => {
    try {
      await axios.put(
        `http://10.5.9.20:38000/api/v1/empresas/${Token}/vaga/${IdVaga}/finalizaVaga`,
        null,
        {
          headers: {
            authorization: "Empcd",
          },
        }
      );
      // Atualizar o estado local para remover a vaga finalizada
      setVagasEmAndamento((prevVagas) =>
        prevVagas.filter((vaga) => vaga.IdVaga !== IdVaga)
      );
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    if (Token) {
      axios
        .get(`http://10.5.9.20:38000/api/v1/empresas/${Token}/status/true/getStatus`, {
          headers: {
            "authorization": "Empcd",
          },}
       )
        .then((response) => {
          const vagas = response.data;
          const vagasComFuncaoFinalizar = vagas.map((vaga: Job) => ({
            ...vaga,
            onFinalizarClick: () => handleFinalizarVaga(vaga.IdVaga),
          }));
          setVagasEmAndamento(vagasComFuncaoFinalizar);
        })
        .catch((error) => {
          if (error.response) {
            console.error("Erro de resposta da API:", error.response.data);
          } else if (error.request) {
            console.error("Erro de rede:", error.request);
          } else {
            console.error("Erro:", error.message);
          }
        });
    }
  }, [Token]);



  return (
    <>
      <Header />

      <div className="bg-white">
        <main className="flex items-center justify-center">
          <div className="w-3/4">
            <Link href="/empresa" className="text-teal-600 hover:underline">
              <ArrowLeft className="inline -ml-1 inline -ml-1 text-base" />{" "}
              Voltar para a Página Anterior
            </Link>
            <h1 className="font-bold text-teal-600 text-3xl text-center py-8">
              Acesse as Vagas em Andamento
            </h1>

            {Array.isArray(vagasEmAndamento) && vagasEmAndamento.length > 0 ? (
              vagasEmAndamento.map((job: Job, index) => (
                <JobCard key={index} {...job} />
              ))
            ) : (
              <p>Nenhuma vaga em andamento encontrada.</p>
            )}
          </div>
        </main>
      </div>
      <Rodape />
    </>
  );
}

// const [vagasEmAndamento, setVagasEmAndamento] = useState([
//   {
//     id: 1,
//     jobTitle: 'Desenvolvedor Web',
//     companyName: 'Empresa A',
//     jobDescription: 'Estamos procurando um desenvolvedor web experiente para se juntar à nossa equipe.',
//     logoUrl: 'empresaA_logo.png',
//     status: 'Em Andamento',
//   },
//   {
//     id: 2,
//     jobTitle: 'Designer Gráfico',
//     companyName: 'Empresa B',
//     jobDescription: 'Procuramos um designer gráfico criativo e talentoso para nossos projetos.',
//     logoUrl: 'empresaB_logo.png',
//     status: 'Em Andamento',
//   },
//   {
//     id: 3,
//     jobTitle: 'Analista de Dados',
//     companyName: 'Empresa C',
//     jobDescription: 'Precisamos de um analista de dados para ajudar a melhorar nossos processos.',
//     logoUrl: 'empresaC_logo.png',
//     status: 'Em Andamento',
//   },
// ]);

// const finalizarVaga = (vagaId) => {
//     axios.post(`/api/finalizar-vaga/${vagaId}`)
//       .then((response) => {
//         // Atualize o estado das vagas em andamento após a finalização (opcional)
//         // Aqui você pode recarregar as vagas em andamento após a finalização, se necessário
//         console.log(response.data.message);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
