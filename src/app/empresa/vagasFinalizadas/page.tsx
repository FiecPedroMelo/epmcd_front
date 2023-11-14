"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Logo from "/public/images/Logo.png";
import Link from "next/link";
import Rodape from "@/components/commons/rodape";
import Header from "@/components/commons/headerEmpresa";
import { ArrowLeft } from "react-feather";

// o que vai ser passado para o card de vaga em andamento da empresa
interface Job {
  idVaga: string;
  TituloCargo: string;
  NomeFantasia: string;
  DescricaoVaga: string;
}
// card da vaga em andamento da empresa

const Job: React.FC<Job> = ({
  idVaga,
  TituloCargo,
  NomeFantasia,
  DescricaoVaga,
}) => {
  return (
    <div className="max-w-4xl mx-auto my-4">
  <div className="w-3/4 mx-auto bg-slate-100 rounded-lg overflow-hidden shadow-2xl flex">
    <div className="w-3/4 p-4">
      <Link href={`/empresa/descricaoVaga/${idVaga}`}>
        <div className="text-3xl font-bold">{TituloCargo}</div>
      </Link>
      <div className="text-lg text-teal-600">{NomeFantasia}</div>
      <div className="mt-4 text-gray-800"> Descrição: {DescricaoVaga}</div>

      <div className="mt-4 flex justify-between">
        <Link href={`/empresa/relatorioVaga/${idVaga}`} className="justify-end">
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

export default function VagasFinalizadas() {
  //seta VagasFinalizadas como array e passa os cards da vagas finalizadas (Job)

  const [vagasFinalizadas, setVagasFinalizadas] = useState<Job[]>([]);

  // pega o Token do localStorage
  const Token = localStorage.getItem("jwtToken");

  // Necessario uma API para pegar as vagas ja finalizadas do Banco de dados

  useEffect(() => {
    console.log("Token:", Token);
    if (Token) {
      axios
        .get(`http://10.5.9.20:38000/api/v1/empresas/${Token}/status/false/getStatus`,{

            headers: {
            "authorization": "Empcd",
        
        },})
        .then((response) => {
            // Atualizar o estado, se necessário
          setVagasFinalizadas(response.data);
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
              Acesse as Vagas Finalizadas
            </h1>

            {Array.isArray(vagasFinalizadas) && vagasFinalizadas.length > 0 ? (
              vagasFinalizadas.map((job, index) => (
                <Job key={index} {...job} />
              ))
            ) : (
              <p>Nenhuma vaga Finalizadas encontrada.</p>
            )}

          </div>
        </main>
      </div>
      <Rodape />
    </>
  );
}

//   <button onClick={onFinalizarClick} className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded ">
//   Deletar Vaga
// </button>
