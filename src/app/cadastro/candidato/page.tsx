"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "/public/images/empcdlogo.svg";
import Link from "next/link";
import { ArrowLeft } from "react-feather";
import api from "@/api/cadastro-interceptor";
import VLibras from "@moreiraste/react-vlibras";
import ValidaCpf from "@/components/ValidaCpf";

export default function CadastroCandidato() {
  //Após o cadastro e o login envia para outra pagina
  const router = useRouter();

  //seta o estado do CPF para valido ao inicio do formulário
  const [cpfValido, setCpfValido] = useState(true);

  //seta o erroDeSenha como falso no inicio da pagina
  const [erroDeSenha, setErroDeSenha] = useState(false);

  //seta o estado de ver a senha como falso
  const [mostrarSenha, setMostrarSenha] = useState(false);

  //Faz com que o Termos de Uso seja obrigatorio
  const [termosAceitos, settermosAceitos] = useState(false);
  const termosAceitosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    settermosAceitos(e.target.checked as boolean);
  };

  //define os dados que tem no formulario
  const [formData, setFormData] = useState({
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
  //pega o email e a senha para realizar o login apos o cadastro
  const { Email, Senha } = formData;

  //seta os erros gerais como falso ao inicio do formulario
  const [error, setError] = useState(false);

  // atualiza as informações dos campos do formularios, guarda e envia para o backend
  const atualizarForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "CPF") {
      // Verifica se o CPF é válido
      const cpfEhValido = ValidaCpf(value);
      setCpfValido(cpfEhValido);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const atualizarFormSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const atualizarFormTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // API para enviar para mandar as informções para o banco de dados
  const enviarForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.Senha === formData.confirmSenha) {
      try {
        const config = {
          headers: {
            authorization: "Empcd",
          },
        };
        const response = await api.post(
          "/api/v1/candidatos/signUp",
          formData,
          config
        );

        if (response.data) {
          console.log("Dados enviados:", response.data);
          setError(false);

          //apos o cadastro feito, faz o login direto
          try {
            const response = await api.post(
              "/api/v1/candidatos/login",
              {
                Email,
                Senha,
              },
              {
                headers: {
                  // Adicione aqui o cabeçalho personalizado para a candidato
                  authorization: "Empcd",
                },
              }
            );
            const token = response.data.token;
            console.log(token);
            localStorage.setItem("jwtToken", token.Token);
            if (response.data.token.validation) {
              router.push("/candidato");
              console.log("Dados enviados");
            } else {
              console.log("Email ou senha incorretos");

              setError(true);
            }
          } catch (error) {}
        }
      } catch (error) {
        //caso de um erro ao enviar os dados para o servidor
        console.error("Erro ao enviar dados:", error);
      }
    } else {
      //seta o erroDeSenha como true caso as senhas não coincidem
      setErroDeSenha(true);
    }
  };

  return (
    <>
      <div className="App">
        <VLibras forceOnload={true} />
        <header className="App-header"></header>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/2 bg-0D9488 md:block hidden">
          <Image
            className="w-full h-full "
            src={Logo}
            alt="Logo Empcd"
            priority
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="p-4 md:p-10 bg-white">
            <h2 className="text-4xl font-custom font-bold mb-0 text-008C83">
              Cadastre-se
            </h2>
            <hr className="my-6 border-2 border-008C83" />
            <p className="text-4x4 font-custom2 font-bold mb-0 text-008C83">
              {" "}
              Faça seu cadastro como candidato{" "}
            </p>
            <br />

            <form className="grid grid-cols-2 gap-4" onSubmit={enviarForm}>
              <div className="mb-4">
                <label
                  htmlFor="NomeCompleto"
                  className="text-0C5E58 block mb-1"
                >
                  Nome Completo:
                </label>
                <input
                  type="text"
                  id="NomeCompleto"
                  name="NomeCompleto"
                  placeholder="Insira seu nome e sobrenome"
                  value={formData.NomeCompleto}
                  onChange={atualizarForm}
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="Email" className="text-0C5E58 block mb-1">
                  E-mail:
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="Insira seu email"
                  value={formData.Email}
                  onChange={atualizarForm}
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="CPF" className="text-0C5E58 block mb-1">
                  CPF:
                </label>
                <input
                  type="text"
                  id="CPF"
                  name="CPF"
                  placeholder="Insira seu CPF"
                  value={formData.CPF}
                  onChange={atualizarForm}
                  required
                  className={`w-full border rounded px-3 py-2 ${
                    cpfValido ? "" : "border-red-500"
                  }`}
                />
                {!cpfValido && (
                  <p className="text-red-500">
                    CPF inválido. Por favor, insira um CPF válido.
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="Telefone" className="text-0C5E58 block mb-1">
                  Número de Telefone:
                </label>
                <input
                  type="text"
                  id="Telefone"
                  name="Telefone"
                  placeholder="Telefone - (00) 00000-0000"
                  value={formData.Telefone}
                  onChange={atualizarForm}
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-4 relative">
                <label htmlFor="Senha" className="text-0C5E58 block mb-1">
                  Senha:
                </label>
                <input
                  type={mostrarSenha ? "text" : "password"}
                  id="Senha"
                  name="Senha"
                  placeholder="Insira a senha"
                  value={formData.Senha}
                  onChange={atualizarForm}
                  required
                  className="w-full border rounded px-3 py-2"
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 text-gray-500"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                >
                  {mostrarSenha ? "Ocultar" : "Mostrar"}
                </button>
              </div>

              <div className="mb-4 relative">
                <label
                  htmlFor="confirmarSenha"
                  className="text-0C5E58 block mb-1"
                >
                  Confirme sua senha:
                </label>
                <input
                  type={mostrarSenha ? "text" : "password"}
                  id="confirmarSenha"
                  name="confirmSenha"
                  placeholder="Confirme a senha"
                  value={formData.confirmSenha}
                  onChange={atualizarForm}
                  required
                  className="w-full border rounded px-3 py-2"
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 text-gray-500"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                >
                  {mostrarSenha ? "Ocultar" : "Mostrar"}
                </button>
              </div>

              {erroDeSenha && (
                <p className="text-red-500">
                  As senhas não coincidem. Por favor, tente novamente.
                </p>
              )}
            </form>

            <hr className="my-6 border-2 border-008C83" />
            <p className="text-4x4 font-bold mb-0 text-008C83">
              {" "}
              Dados Pessoais{" "}
            </p>
            <br />

            <form className="grid grid-cols-3 gap-4" onSubmit={enviarForm}>
              <div className="mb-4">
                <label htmlFor="Genero" className="text-0C5E58 block mb-1">
                  Gênero
                </label>

                <select
                  id="Genero"
                  name="Genero"
                  value={formData.Genero}
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
                  placeholder="Descreva sua deficiência"
                  value={formData.Deficiencia}
                  onChange={atualizarForm}
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="DataNascimento"
                  className="text-0C5E58 block mb-1"
                >
                  Data de Nascimento:
                </label>
                <input
                  type="date"
                  id="DataNasc"
                  name="DataNasc"
                  value={formData.DataNasc}
                  onChange={atualizarForm}
                  required
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
                  value={formData.Estado}
                  onChange={atualizarFormSelect}
                  required
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
                  placeholder="Insira sua cidade"
                  value={formData.Cidade}
                  onChange={atualizarForm}
                  required
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
                  placeholder="Insira seu bairro"
                  value={formData.Bairro}
                  onChange={atualizarForm}
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </form>

            <hr className="my-6 border-2 border-008C83" />

            <br />

            <form onSubmit={enviarForm}>
              <p className="text-4x4 font-bold mb-0 text-008C83">
                {" "}
                Experiência:{" "}
              </p>
              <br />

              <div className="mb-4">
                <label htmlFor="Formacao" className="text-0C5E58 block mb-1">
                  Formação:
                </label>
                <select
                  id="Formacao"
                  name="Formacao"
                  value={formData.Formacao}
                  onChange={atualizarFormSelect}
                  required
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
                <label htmlFor="Deficiencia" className="text-0C5E58 block mb-1">
                  Experiências anteriores:
                </label>
                <textarea
                  id="ExpAnteriores"
                  name="ExpAnteriores"
                  placeholder="Descreva suas experiências anteriores"
                  value={formData.ExpAnteriores}
                  onChange={atualizarFormTextarea}
                  required
                  className="w-full h-32 p-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
                >
                  {" "}
                </textarea>
              </div>

              <br />

              <div className="mb-4">
                <label htmlFor="Deficiencia" className="text-0C5E58 block mb-1">
                  Habilidades e conhecimentos:
                </label>
                <textarea
                  id="Habilidades"
                  name="Habilidades"
                  placeholder="Descreva suas habilidades e conhecimentos"
                  value={formData.Habilidades}
                  onChange={atualizarFormTextarea}
                  required
                  className="w-full h-32 p-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="termosDeUso" className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="termosDeUso"
                    name="termosDeUso"
                    checked={termosAceitos}
                    onChange={termosAceitosChange}
                    className="mr-2"
                  />
                  <p>
                    {" "}
                    Li e aceito os{" "}
                    <Link href="/termosDeUso" className="text-blue-500">
                      {" "}
                      termos de uso
                    </Link>{" "}
                  </p>
                </label>
              </div>

              <div className="col-span-2 flex justify-center">
                <button
                  type="submit"
                  className={`w-40 py-2 rounded font-semibold rounded-full transition duration-300 ${
                    !termosAceitos
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-008F8C hover:bg-015958 active:bg-023535"
                  }`}
                  disabled={!termosAceitos}
                >
                  <p className="text-white font-semibold"> Continuar</p>
                </button>
              </div>
            </form>
            <Link href="/cadastro" className="text-teal-600 hover:underline">
              <ArrowLeft className="inline -ml-1 inline -ml-1 text-base" />{" "}
              Voltar para a Página Anterior
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
