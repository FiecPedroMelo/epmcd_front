"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Header from "@/components/commons/headerEmpresa";
import VLibras from '@moreiraste/react-vlibras';
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PerfilEmpresa() {
  //seta o usuario candidato como qualquer
  const [user, setUser] = useState({
    NomeFantasia: "",
    RazaoSocial: "",
    Email: "",
    CNPJ: "",
    Cidade: "",
    Bairro: "",
    UF: "",
    Descricao: "",
});

  const Token = localStorage.getItem('jwtToken');

  const searchParams = useSearchParams()
  const idEmpresa = searchParams.get('IdEmpresa')
  console.log(idEmpresa);

  useEffect(() => {

    const config = {
      headers: {
        "authorization": "Empcd",
      },
    };

    // API para pegar as informações do perfil do candidato
    axios
      .get(`http://192.168.0.13:38000/api/v1/empresas/${Token}/empresa`, config)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


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
          <h1 className="text-2xl font-semibold text-008C83 mb-4">
          <label htmlFor="NomeFantasia" className="text-0C5E58 block mb-1">
                Nome da Empresa:
              </label>
              <label htmlFor="">{user.NomeFantasia}</label>
          </h1>
          <br />
          
            <hr className="my-4 border-2 border-008C83" />

          <form className="grid grid-cols-2 gap-4">

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
              <label htmlFor="">{user.Email}</label>
            </div>

            <div className="mb-4">
              <label htmlFor="cnpj" className="text-0C5E58 block mb-1">
                CNPJ:
              </label>
              <label htmlFor="">{user.CNPJ}</label>
            </div>
          </form>

          <hr className="my-6 border-2 border-008C83" />

          <br />

          <form className="grid grid-cols-3 gap-4">
            <div className="mb-4">
              <label htmlFor="Uf" className="text-0C5E58 block mb-1">
                UF:
              </label>
              <label htmlFor="">{user.UF}</label>
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

          <form>
            <div className="mb-4">
              <label htmlFor="descricao" className="text-0C5E58 block mb-1">
                Descrição:
              </label>
              <label htmlFor="">{user.Descricao}</label>
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
    </>
  );
}
