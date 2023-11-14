"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "react-feather";

export default function EditarCandidato() {
  //seta router como a função da rota
  const router = useRouter();

  // atualiza as informações dos campos do formularios, guarda e envia para o backend

  const atualizarForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormPerfilCandidato((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const atualizarFormSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormPerfilCandidato((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const atualizarFormTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormPerfilCandidato((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // informações para ataualizar o perfil do candidato
  const [formPerfilCandidato, setFormPerfilCandidato] = useState({
    NomeCompleto: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
    dataDeNascimento: "",
    cidade: "",
    uf: "",
    deficiencia: "",
    formacao: "",
    experiencias: "",
    habilidades: "",
    telefone: "",
    genero: "",
    bairro: "",
    competencia: "",
  });

  //variavel token
  const Token = localStorage.getItem("jwtToken");

  // API para enviar os novos dados do candidato para o banco de dados
  const atualizarPerfilCandidato = async () => {
    try {

    // Adicione o cabeçalho de autorização na configuração da solicitação PUT
    const config = {
      headers: {
        "authorization": "Empcd",
      },
    };

      const response = await axios.put(
        `http://10.5.9.20:38000/api/v1/candidatos/${Token}/updateCandidato`,
        formPerfilCandidato, config
      );
      if (response.status === 200) {
        // Atualização bem-sucedida
        console.log("Perfil atualizado com sucesso:", response.data);
        router.push("/candidato/perfil");
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-0D9488">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
        <h1 className="text-2xl font-semibold text-008C83 mb-6">
          Editar Perfil
        </h1>
        <br />
        <form onSubmit={atualizarPerfilCandidato}>
          <div className="mb-4">
            <p className="text-4x4 font-bold mb-0 text-008C83">
              {" "}
              Foto de perfil{" "}
            </p>
            <br />
            <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200">
              {/* Adicione um ícone de perfil (por exemplo, uma imagem) aqui */}
              <Image
                src="sua_imagem_de_perfil.jpg"
                alt="Imagem de Perfil"
                className="object-cover w-full h-full"
              />
            </div>
            <input
              type="file"
              id="FotoPerfil"
              name="FotoPerfil"
              accept="image/*"
              className="w-full mt-2"
            />
          </div>
        </form>
        <hr className="my-6 border-2 border-008C83" />

        <form
          className="grid grid-cols-2 gap-4"
          onSubmit={atualizarPerfilCandidato}
        >
          <div className="mb-4">
            <label htmlFor="NomeCompleto" className="text-0C5E58 block mb-1">
              Nome Completo:
            </label>
            <input
              type="text"
              id="NomeCompleto"
              name="NomeCompleto"
              value={formPerfilCandidato.NomeCompleto}
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
              id="email"
              name="email"
              value={formPerfilCandidato.email}
              onChange={atualizarForm}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cpf" className="text-0C5E58 block mb-1">
              CPF:
            </label>
            <input
              type="number"
              id="cpf"
              name="cpf"
              value={formPerfilCandidato.cpf}
              onChange={atualizarForm}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="telefone" className="text-0C5E58 block mb-1">
              Número de telefone:
            </label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={formPerfilCandidato.telefone}
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
              value={formPerfilCandidato.password}
              onChange={atualizarForm}
              
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="senha" className="text-0C5E58 block mb-1">
                Confirme sua senha:
              </label>
              <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formPerfilCandidato.confirmPassword}
              onChange={atualizarForm}
              
                className="w-full border rounded px-3 py-2"
              />
            </div> */}
        </form>

        <hr className="my-6 border-2 border-008C83" />

        <br />

        <form
          className="grid grid-cols-3 gap-4"
          onSubmit={atualizarPerfilCandidato}
        >
          <div className="mb-4">
            <label htmlFor="Genero" className="text-0C5E58 block mb-1">
              Gênero
            </label>
            <select
              id="genero"
              name="genero"
              value={formPerfilCandidato.genero}
              onChange={atualizarFormSelect}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Selecione um gênero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="deficiencia" className="text-0C5E58 block mb-1">
              Deficiência:
            </label>
            <input
              type="text"
              id="deficiencia"
              name="deficiencia"
              value={formPerfilCandidato.deficiencia}
              onChange={atualizarForm}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="DataNascimento" className="text-0C5E58 block mb-1">
              Data de Nascimento:
            </label>
            <input
              type="date"
              id="dataDeNascimento"
              name="dataDeNascimento"
              value={formPerfilCandidato.dataDeNascimento}
              onChange={atualizarForm}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="uf" className="text-0C5E58 block mb-1">
              Selecione o estado:
            </label>
            <select
              id="uf"
              name="uf"
              value={formPerfilCandidato.uf}
              onChange={atualizarFormSelect}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Selecione o estado</option>
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
              id="cidade"
              name="cidade"
              value={formPerfilCandidato.cidade}
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
              id="bairro"
              name="bairro"
              value={formPerfilCandidato.bairro}
              onChange={atualizarForm}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </form>

        <hr className="my-6 border-2 border-008C83" />

        <form onSubmit={atualizarPerfilCandidato}>
          <br />
          <p className="text-4x4 font-bold mb-0 text-008C83"> Experiência: </p>
          <br />

          <div className="mb-4">
            <label htmlFor="formacao" className="text-0C5E58 block mb-1">
              Formação:
            </label>
            <select
              id="formacao"
              name="formacao"
              value={formPerfilCandidato.formacao}
              onChange={atualizarFormSelect}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Selecione a formação</option>
              <option value="EnsinoFundamentalCursando">
                Ensino Fundamental Cursando
              </option>
              <option value="EnsinoFundamental">
                Ensino Fundamental Completo
              </option>
              <option value="EnsinoFundamentalCursando">
                Ensino Médio Cursando
              </option>
              <option value="EnsinoMedio">Ensino Médio Completo</option>
              <option value="SuperiorCursando">Superior Cursando</option>
              <option value="SuperiorCompleto">Superior Completo</option>
              <option value="curso-tecnico">Curso Técnico</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <br />

          <div className="mb-4">
            <label htmlFor="deficiencia" className="text-0C5E58 block mb-1">
              Experiências anteriores:
            </label>
            <textarea
              id="experiencias"
              name="experiencias"
              value={formPerfilCandidato.experiencias}
              onChange={atualizarFormTextarea}
              className="w-full h-32 p-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
            >
              {" "}
            </textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="deficiencia" className="text-0C5E58 block mb-1">
              Habilidades e conhecimentos:
            </label>
            <textarea
              id="habilidades"
              name="habilidades"
              value={formPerfilCandidato.habilidades}
              onChange={atualizarFormTextarea}
              className="w-full h-32 p-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>

          <br />
        </form>
        <div />

        <div className="flex justify-between">
          <button
            onClick={atualizarPerfilCandidato}
            type="button"
            className="bg-0D9488 text-white font-medium px-4 py-2 rounded hover:bg-cyan-600"
          >
            Salvar
          </button>

          <Link href="/candidato/perfil" className="text-cyan-500 font-medium">
            Cancelar
          </Link>
        </div>
      </div>
    </div>
  );
}
