"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Header from "@/components/commons/headerEmpresa";
import Rodape from "@/components/commons/rodape";
import Link from "next/link";

export default function PerfilEmpresa() {
  //seta o usuario candidato como qualquer
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    // API para pegar as informações do perfil da empresa
    axios
      .get("/api/user-profile")
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
              <label htmlFor="NomeFantasia" className="text-0C5E58 block mb-1">
                Nome da Empresa:
              </label>
              <label htmlFor="">{user.NomeFantasia}</label>
            </div>

            <div className="mb-4">
              <label htmlFor="RazaoSocial" className="text-0C5E58 block mb-1">
                Razão Social:
              </label>
              <label htmlFor="">{user.RazaoSocial}</label>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-0C5E58 block mb-1">
                Email:
              </label>
              <label htmlFor="">{user.email}</label>
            </div>

            <div className="mb-4">
              <label htmlFor="cnpj" className="text-0C5E58 block mb-1">
                CNPJ:
              </label>
              <label htmlFor="">{user.cnpj}</label>
            </div>
          </form>

          <hr className="my-6 border-2 border-008C83" />

          <br />

          <form className="grid grid-cols-3 gap-4">
            <div className="mb-4">
              <label htmlFor="uf" className="text-0C5E58 block mb-1">
                UF:
              </label>
              <label htmlFor="">{user.uf}</label>
            </div>

            <div className="mb-4">
              <label htmlFor="cidade" className="text-0C5E58 block mb-1">
                Cidade:
              </label>
              <label htmlFor="">{user.cidade}</label>
            </div>

            <div className="mb-4">
              <label htmlFor="bairro" className="text-0C5E58 block mb-1">
                Bairro:
              </label>
              <label htmlFor="">{user.bairro}</label>
            </div>
          </form>

          <form>
            <div className="mb-4">
              <label htmlFor="descricao" className="text-0C5E58 block mb-1">
                Descrição:
              </label>
              <label htmlFor="">{user.descricao}</label>
            </div>
          </form>

          <Link
            href="/empresa/editarPerfil"
            className="bg-0D9488 text-white font-medium px-4 py-2 rounded hover:bg-cyan-600"
          >
            Editar Perfil
          </Link>

          <div />
        </div>
      </div>
      <Rodape />
    </>
  );
}
