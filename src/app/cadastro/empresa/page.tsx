"use client";

import React, { useState } from "react";
import { useRouter } from "../../../../node_modules/next/navigation";
import Image from "../../../../node_modules/next/image";
import Logo from "/public/images/empcdlogo.svg";
import Link from "next/link";
import { ArrowLeft } from "react-feather";
import api from "@/api/cadastro-interceptor";
import VLibras from "@moreiraste/react-vlibras";
import ValidaCnpj from "@/components/validaCnpj";
import validaCnpj from "@/components/validaCnpj";

export default function CadastroEmpresa() {
  //Após o cadastro e o login envia para outra pagina
  const router = useRouter();

  //seta o erroDeSenha como falso no inicio da pagina
  const [erroDeSenha, setErroDeSenha] = useState(false);

  //seta o CNPJ como válido ao inicio da pagina
  const [cnpjValido, setCnpjValido] = useState(true);

  //seta o estado de ver a senha como falso
  const [mostrarSenha, setMostrarSenha] = useState(false);

  //Faz com que o Termos de Uso seja obrigatorio
  const [termosAceitos, settermosAceitos] = useState(false);
  const termosAceitosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    settermosAceitos(e.target.checked as boolean);
  };

  //define os dados que tem no formulario
  const [formData, setFormData] = useState({
    NomeFantasia: "",
    RazaoSocial: "",
    Email: "",
    Senha: "",
    ConfirmSenha: "",
    CNPJ: "",
    Cidade: "",
    Bairro: "",
    UF: "",
    Descricao: "",
  });

  //pega o email e a senha para realizar o login apos o cadastro
  const { Email, Senha } = formData;

  //seta os erros gerais como falso ao inicio do formulario
  const [error, setError] = useState(false);

  // atualiza as informações dos campos do formularios, guarda e envia para o backend
  const atualizarForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "CNPJ") {
      const cnpjEhValido = validaCnpj(value);
      setCnpjValido(cnpjEhValido);
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

  // API para enviar para mandar as informções para o banco de dados
  const enviarForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    if (formData.Senha === formData.ConfirmSenha) {
      try {
        const response = await api.post("/api/v1/empresas/signup", formData, {
          headers: {
            // Adicione aqui o cabeçalho personalizado para a empresa
            authorization: "Empcd",
          },
        });

        if (response.data) {
          console.log("Dados enviados:", response.data);
          setError(false);
          //apos o cadastro feito, faz o login direto
          try {
            const response = await api.post(
              "/api/v1/empresas/login",
              { Email, Senha },
              {
                headers: {
                  // Adicione aqui o cabeçalho personalizado para a empresa
                  authorization: "Empcd",
                },
              }
            );
            const token = response.data.token;
            localStorage.setItem("jwtToken", token.token);
            if (response.data.token.validation) {
              router.push("/empresa");
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
            className="w-full h-full"
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
              Faça seu cadastro como empresa
            </p>
            <br />

            <form className="grid grid-cols-2 gap-4" onSubmit={enviarForm}>
              <div className="mb-4">
                <label
                  htmlFor="NomeFantasia"
                  className="text-0C5E58 block mb-1"
                >
                  Nome Fantasia:
                </label>
                <input
                  type="text"
                  id="NomeFantasia"
                  name="NomeFantasia"
                  placeholder="Insira o nome da empresa"
                  value={formData.NomeFantasia}
                  onChange={atualizarForm}
                  required
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
                  placeholder="Insira a razão social da empresa"
                  value={formData.RazaoSocial}
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
                  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder="Insira o email da empresa ou de contato"
                  value={formData.Email}
                  onChange={atualizarForm}
                  required
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
                  placeholder="Insira seu CNPJ"
                  value={formData.CNPJ}
                  onChange={atualizarForm}
                  required
                  className={`w-full border rounded px-3 py-2 ${
                    cnpjValido ? "" : "border-red-500"
                  }`}
                />
                {!cnpjValido && (
                  <p className="text-red-500">
                    CNPJ inválido. Por favor, insira um CNPJ válido.
                  </p>
                )}
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
                  id="ConfirmarSenha"
                  name="ConfirmSenha"
                  placeholder="Confirme a senha"
                  value={formData.ConfirmSenha}
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
            <br />

            <form className="grid grid-cols-2 gap-4" onSubmit={enviarForm}>
              <div className="mb-4">
                <label htmlFor="UF" className="text-0C5E58 block mb-1">
                  Uf:
                </label>
                <select
                  id="UF"
                  name="UF"
                  value={formData.UF}
                  onChange={atualizarFormSelect}
                  required
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Selecione a Uf</option>
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
                  placeholder="Insira a cidade"
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
                  placeholder="Insira o bairro"
                  value={formData.Bairro}
                  onChange={atualizarForm}
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="descricao" className="text-0C5E58 block mb-1">
                  Descrição:
                </label>
                <input
                  type="text"
                  id="Descricao"
                  name="Descricao"
                  placeholder="Faça uma descrição sobre a empresa"
                  value={formData.Descricao}
                  onChange={atualizarForm}
                  required
                  className="w-full border rounded px-3 py-2"
                />
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
