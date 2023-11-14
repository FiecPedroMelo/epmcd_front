"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Header from "@/components/commons/headerCandidato";
import Rodape from "@/components/commons/rodape";
import Link from "next/link";
import { ArrowLeft } from "react-feather";

export default function PerfilCandidato() {
  //seta o usuario candidato como qualquer
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    // API para pegar as informações do perfil do candidato
    axios
      .get("http://10.5.9.20:38000/api/v1/candidatos/vagaSearcherCand")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="bg-slate-100 p-8 rounded-lg overflow-hidden shadow-2xl w-1/2">
          <h1 className="text-2xl font-semibold text-008C83 mb-6">
            Meu Perfil
          </h1>
          <br />

          <div className="mb-4">
            <p className="text-4x4 font-bold mb-0 text-008C83">
              {" "}
              Foto de perfil{" "}
            </p>
            <br />
            <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200">
              {/* Adicione um ícone de perfil (por exemplo, uma imagem) aqui */}
              <Image
                src={user.image}
                alt="Imagem de Perfil"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <hr className="my-6 border-2 border-008C83" />

          <form className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="NomeCompleto" className="text-0C5E58 block mb-1">
                Nome Completo:
              </label>
              <label htmlFor="">{user.NomeCompleto}</label>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-0C5E58 block mb-1">
                E-mail:
              </label>
              <label htmlFor="">{user.Email}</label>
            </div>

            <div className="mb-4">
              <label htmlFor="telefone" className="text-0C5E58 block mb-1">
                Número de telefone:
              </label>
              <label htmlFor="">{user.Telefone}</label>
            </div>
          </form>

          <hr className="my-6 border-2 border-008C83" />

          <br />

          <form className="grid grid-cols-3 gap-4">
            <div className="mb-4">
              <label htmlFor="Genero" className="text-0C5E58 block mb-1">
                Gênero
              </label>
              <label htmlFor="">{user.Genero}</label>
            </div>

            <div className="mb-4">
              <label htmlFor="deficiencia" className="text-0C5E58 block mb-1">
                Deficiência:
              </label>
              <label htmlFor="">{user.Deficiencia}</label>
            </div>

            <div className="mb-4">
              <label
                htmlFor="DataNascimento"
                className="text-0C5E58 block mb-1"
              >
                Data de Nascimento:
              </label>
              <label htmlFor="">{user.DataNasc}</label>
            </div>

            <div className="mb-4">
              <label htmlFor="uf" className="text-0C5E58 block mb-1">
                Estado:
              </label>
              <label htmlFor="">{user.Estado}</label>
            </div>

            <div className="mb-4">
              <label htmlFor="cidade" className="text-0C5E58 block mb-1">
                Cidade:
              </label>
              <label htmlFor="">{user.Cidade}</label>
            </div>

            <div className="mb-4">
              <label htmlFor="bairro" className="text-0C5E58 block mb-1">
                Bairro:
              </label>
              <label htmlFor="">{user.Bairro}</label>
            </div>
          </form>

          <hr className="my-6 border-2 border-008C83" />

          <br />
          <p className="text-4x4 font-bold mb-0 text-008C83"> Experiência: </p>
          <br />

          <div className="mb-4">
            <label htmlFor="formacao" className="text-0C5E58 block mb-1">
              Formação:
            </label>
            <label htmlFor="">{user.Formacao}</label>
          </div>

          <br />

          <div className="mb-4">
            <label htmlFor="deficiencia" className="text-0C5E58 block mb-1">
              Experiências anteriores:
            </label>
            <label htmlFor="">{user.ExpAnteriores}</label>
          </div>

          <div className="mb-4">
            <label htmlFor="deficiencia" className="text-0C5E58 block mb-1">
              Habilidades e conhecimentos:
            </label>
            <label htmlFor="">{user.Habilidades}</label>
          </div>

          <br />

          <div />

          <div className="flex justify-between">
            <Link
              href="/candidato/editarPerfil"
              className="bg-0D9488 text-white font-medium px-4 py-2 rounded hover:bg-cyan-600"
            >
              Editar Perfil
            </Link>
            <Link href="/candidato" className="text-teal-600 hover:underline">
              <ArrowLeft className="inline -ml-1 inline -ml-1 text-base" />{" "}
              Voltar para a Página Anterior
            </Link>
          </div>
        </div>
      </div>
      <Rodape />
    </>
  );
}
