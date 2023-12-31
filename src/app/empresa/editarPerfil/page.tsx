"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import VLibras from '@moreiraste/react-vlibras';


export default function EditarPerfilEmpresa() {
  //função de rota
  const router = useRouter();

  // o que vai ser atualizado no perfil da empresa
  const [formPerfilEmpresa, setFormPerfilEmpresa] = useState({
   NomeFantasia: "",
    RazaoSocial: "",
    Email: "",
    CNPJ: "",
    Cidade: "",
    Bairro: "",
    UF: "",
    Descricao: "",
  });

  // atualiza as informações dos campos do formularios, guarda e envia para o backend
  const atualizarForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormPerfilEmpresa((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const atualizarFormSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormPerfilEmpresa((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Token = localStorage.getItem('jwtToken');

  // API que atualiza o perfil da empresa e envia os novos dados para o banco de dados
  const atualizarPerfilEmpresa = async () => {
    try {
      const config = {
        headers: {
          "authorization": "Empcd",
        },
      };

      const response = await axios.put(`http://192.168.0.13:38000/api/v1/empresas/${Token}/updateEmpresa`, formPerfilEmpresa, config);
      if (response.status === 200) {
        // Atualização bem-sucedida
        console.log("Perfil atualizado com sucesso:", response.data);
        router.push("/empresa/perfil");
      } else {
        // Tratar erros
        alert("erro ao atualizar o perfil");
        console.error("Erro ao atualizar perfil");
      }
    } catch (error) {
      // Lidar com erros de rede ou servidor
      console.error("Erro de rede ou servidor:", error);
    }
  };

  const handleCancelar = () => {
    // Use a função router.back() para voltar à página anterior
    router.back();
  };

  return (
    <> 

<div className="App">
      <VLibras forceOnload={true} />
      <header className="App-header">
      </header>
    </div>

    <div className="min-h-screen flex items-center justify-center bg-0D9488">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
        <h1 className="text-2xl font-semibold text-008C83 mb-6">
          Editar Perfil
        </h1>

        <form onSubmit={atualizarPerfilEmpresa}>
          <hr className="my-6 border-2 border-008C83" />

          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="NomeFantasia" className="text-0C5E58 block mb-1">
                Nome Fantasia:
              </label>
              <input
                type="text"
                id="NomeFantasia"
                name="NomeFantasia"
                value={formPerfilEmpresa.NomeFantasia}
                onChange={atualizarForm}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="RazaoSocial" className="text-0C5E58 block mb-1">
                Razão Social:
              </label>
              <input
                type="text"
                id="RazaoSocial"
                name="RazaoSocial"
                value={formPerfilEmpresa.RazaoSocial}
                onChange={atualizarForm}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-0C5E58 block mb-1">
                E-mail:
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                value={formPerfilEmpresa.Email}
                onChange={atualizarForm}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="CNPJ" className="text-0C5E58 block mb-1">
                CNPJ:
              </label>
              <input
                type="text"
                id="CNPJ"
                name="CNPJ"
                value={formPerfilEmpresa.CNPJ}
                onChange={atualizarForm}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* <div className="mb-4">
            <label htmlFor="senha" className="text-0C5E58 block mb-1">
              Senha:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formPerfilEmpresa.password}
              onChange={atualizarForm}
              
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="text-0C5E58 block mb-1">
              Confirme sua senha:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formPerfilEmpresa.confirmPassword}
              onChange={atualizarForm}
              
              className="w-full border rounded px-3 py-2"
            />
          </div>*/}
          </div>

          <div className="mb-4">
            <label htmlFor="UF" className="text-0C5E58 block mb-1">
              UF:
            </label>
            <select
              id="UF"
              name="UF"
              value={formPerfilEmpresa.UF}
              onChange={atualizarFormSelect}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Selecione a UF</option>
              <option value="ac">Acre (AC)</option>
              <option value="al">Alagoas (AL)</option>
              <option value="am">Amazonas (AM)</option>
              <option value="ap">Amapá (AP)</option>
              <option value="ba">Bahia (BA)</option>
              <option value="ce">Ceará (CE)</option>
              <option value="df">Distrito Federal (DF)</option>
              <option value="es">Espírito Santo (ES)</option>
              <option value="go">Goiás (GO)</option>
              <option value="ma">Maranhão (MA)</option>
              <option value="mg">Minas Gerais (MG)</option>
              <option value="ms">Mato Grosso do Sul (MS)</option>
              <option value="mt">Mato Grosso (MT)</option>
              <option value="pa">Pará (PA)</option>
              <option value="pb">Paraíba (PB)</option>
              <option value="pe">Pernambuco (PE)</option>
              <option value="pi">Piauí (PI)</option>
              <option value="pr">Paraná (PR)</option>
              <option value="rj">Rio de Janeiro (RJ)</option>
              <option value="rn">Rio Grande do Norte (RN)</option>
              <option value="ro">Rondônia (RO)</option>
              <option value="rr">Roraima (RR)</option>
              <option value="rs">Rio Grande do Sul (RS)</option>
              <option value="sc">Santa Catarina (SC)</option>
              <option value="se">Sergipe (SE)</option>
              <option value="sp">São Paulo (SP)</option>
              <option value="to">Tocantins (TO)</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="cidade" className="text-0C5E58 block mb-1">
              Cidade:
            </label>
            <input
              type="text"
              id="Cidade"
              name="Cidade"
              value={formPerfilEmpresa.Cidade}
              onChange={atualizarForm}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bairro" className="text-0C5E58 block mb-1">
              Bairro:
            </label>
            <input
              type="text"
              id="Bairro"
              name="Bairro"
              value={formPerfilEmpresa.Bairro}
              onChange={atualizarForm}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <hr className="my-6 border-2 border-008C83" />

          <div className="mb-4">
            <label htmlFor="Descricao" className="text-0C5E58 block mb-1">
              Descrição:
            </label>
            <input
              type="text"
              id="Descricao"
              name="Descricao"
              value={formPerfilEmpresa.Descricao}
              onChange={atualizarForm}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-0D9488 text-white font-medium px-4 py-2 rounded hover:bg-cyan-600"
            >
              Salvar
            </button>

            <button
            type="button"
            onClick={handleCancelar}
            className="text-cyan-500 font-medium"
          >
            Cancelar
          </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
