"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "react-feather";
import VLibras from '@moreiraste/react-vlibras';


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
    Email: "",
    Senha: "",
    confirmSenha: "",
    CPF: "",
    DataNasc: "",
    Cidade: "",
    Estado: "",
    Bairro: "",
    Deficiencia: "",
    Formacao: "",
    ExpAnteriores: "",
    Habilidades: "",
    Telefone: "",
    Genero: "",
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
        `http://192.168.0.13:38000/api/v1/candidatos/${Token}/updateCandidato`,
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
        <br />
        <form onSubmit={atualizarPerfilCandidato}>
        </form>
        <hr className="my-4 border-2 border-008C83" />

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
              id="Email"
              name="Email"
              value={formPerfilCandidato.Email}
              onChange={atualizarForm}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cpf" className="text-0C5E58 block mb-1">
              CPF:
            </label>
            <input
              type="text"
              id="CPF"
              name="CPF"
              value={formPerfilCandidato.CPF}
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
              id="Telefone"
              name="Telefone"
              value={formPerfilCandidato.Telefone}
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
              id="Genero"
              name="Genero"
              value={formPerfilCandidato.Genero}
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
            <label htmlFor="Deficiencia" className="text-0C5E58 block mb-1">
              Deficiência:
            </label>
            <input
              type="text"
              id="Deficiencia"
              name="Deficiencia"
              value={formPerfilCandidato.Deficiencia}
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
              id="DataNasc"
              name="DataNasc"
              value={formPerfilCandidato.DataNasc}
              onChange={atualizarForm}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Estado" className="text-0C5E58 block mb-1">
              Selecione o estado:
            </label>
            <select
              id="Estado"
              name="Estado"
              value={formPerfilCandidato.Estado}
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
            <label htmlFor="Cidade" className="text-0C5E58 block mb-1">
              Cidade:
            </label>
            <input
              type="text"
              id="Cidade"
              name="Cidade"
              value={formPerfilCandidato.Cidade}
              onChange={atualizarForm}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Bairro" className="text-0C5E58 block mb-1">
              Bairro:
            </label>
            <input
              type="text"
              id="Bairro"
              name="Bairro"
              value={formPerfilCandidato.Bairro}
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
              id="Formacao"
              name="Formacao"
              value={formPerfilCandidato.Formacao}
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
            <label htmlFor="ExpAnteriores" className="text-0C5E58 block mb-1">
              Experiências anteriores:
            </label>
            <textarea
              id="ExpAnteriores"
              name="ExpAnteriores"
              value={formPerfilCandidato.ExpAnteriores}
              onChange={atualizarFormTextarea}
              className="w-full h-32 p-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
            >
              {" "}
            </textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="Habilidades" className="text-0C5E58 block mb-1">
              Habilidades e conhecimentos:
            </label>
            <textarea
              id="Habilidades"
              name="Habilidades"
              value={formPerfilCandidato.Habilidades}
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
    </>
  );
}
