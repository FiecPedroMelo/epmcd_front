"use client";

import React, { useState } from "react";
import { useRouter } from "../../../../node_modules/next/navigation";
import axios from "../../../../node_modules/axios/index";
import HeaderEmpresa from "@/components/commons/headerEmpresa";
import Link from "next/link";
import VLibras from '@moreiraste/react-vlibras';


export default function CadastrarVaga() {
  // seta a função de rota
  const router = useRouter();

  // o que vai estar quando a vaga for cadastrada
  const [FormCadastroVaga, setFormCadastroVaga] = useState({
    TituloCargo: "",
    Requisitos: "",
    DescricaoVaga: "",
    Localizacao: "",
  });

  // atualiza as informações dos campos do formularios, guarda e envia para o backend
  const atualizarForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormCadastroVaga((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const atualizarFormTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormCadastroVaga((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // pega o token do localStorage
  const Token = localStorage.getItem("jwtToken");

  // envia os dados das vagas para o banco de dados
  const enviarDadosParaBancoDeDados = () => {
    console.log(Token);
    const cadastrar = `http://192.168.0.13:38000/api/v1/empresas/${Token}/createVaga`;
    const config = {
      headers: {
        "authorization": "Empcd",
      },
    };
    axios
      .post(cadastrar, FormCadastroVaga, config)
      .then((response) => {
        console.log("Informações enviadas com sucesso:", response.data);
        // Redirecione ou execute alguma ação após o envio bem-sucedido
        // router.push('/descricaoVaga'); Exemplo de redirecionamento
        router.push('/empresa/vagasEmAndamento');
      })
      .catch((error) => {
        console.error(
          "Erro ao enviar informações para o banco de dados: ",
          error
        );
      });
  };

  return (
    <>

<div className="App">
      <VLibras forceOnload={true} />
      <header className="App-header">
      </header>
    </div>

      <HeaderEmpresa />

      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="bg-slate-100 p-8 rounded-lg overflow-hidden shadow-2xl">
          <h1 className="text-2xl font-semibold text-008C83 mb-6">
            Cadastrar vaga
          </h1>
          <hr className="my-6 border-2 border-008C83" />

          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            onSubmit={enviarDadosParaBancoDeDados}
          >
            <div className="mb-4">
              <label htmlFor="TituloCargo" className="text-0C5E58 block mb-1">
                Título do cargo:
              </label>
              <input
                type="text"
                id="TituloCargo"
                name="TituloCargo"
                value={FormCadastroVaga.TituloCargo}
                onChange={atualizarForm}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Localizacao" className="text-0C5E58 block mb-1">
                Localização:
              </label>
              <input
                type="text"
                id="Localizacao"
                name="Localizacao"
                value={FormCadastroVaga.Localizacao}
                onChange={atualizarForm}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
 

          </form>           
          <div className="mb-4">
              <label htmlFor="Requisitos" className="text-0C5E58 block mb-1">
                Requisitos:
              </label>
              <textarea
                id="Requisitos"
                name="Requisitos"
                value={FormCadastroVaga.Requisitos}
                onChange={atualizarFormTextarea}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
          <div className="mb-4">
            <label htmlFor="Descricao" className="text-0C5E58 block mb-1">
              Descrição da vaga:
            </label>
            <textarea
              id="DescricaoVaga"
              name="DescricaoVaga"
              value={FormCadastroVaga.DescricaoVaga}
              onChange={atualizarFormTextarea}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={enviarDadosParaBancoDeDados}
              type="button"
              className="bg-0D9488 text-white font-medium px-4 py-2 rounded hover:bg-cyan-600"
            >
              Salvar
            </button>
            <Link href="/empresa" className="text-cyan-500 font-medium">
              Cancelar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
