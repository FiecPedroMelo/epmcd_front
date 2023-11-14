"use client";

import React, { useState } from "react";
import Image from "../../../node_modules/next/image";
import Logo from "/public/images/empcdlogo.svg";
import { useRouter } from "../../../node_modules/next/navigation";
import axios from "../../../node_modules/axios/index";
import { ArrowLeft } from "../../../node_modules/react-feather";
import Link from "../../../node_modules/next/link";

export default function Login() {
  // seta router como função de rota
  const router = useRouter();
  // seta o email como um estado vazio no inicio
  const [Email, setEmail] = useState("");
  // seta o senha como um estado vazio no inicio

  const [Senha, setSenha] = useState("");

  // seta a função loading como falso no inicio

  const [loading, setLoading] = useState(false);
  // seta a função error como falso no inicio

  const [error, setError] = useState(false);

  // API para realizar o login, seja empresa ou candidato
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const responseCandidato = await axios.post(
        "http://10.5.9.20:38000/api/v1/candidatos/login",
        { Email, Senha },
        {
          headers: {
            // Adicione aqui o cabeçalho personalizado para a candidato
            "authorization": "Empcd",
          },}
      );
      const tokenCandidato = responseCandidato.data.token;
      localStorage.setItem("jwtToken", tokenCandidato.token);
      if (responseCandidato.data.token.validation) {
        router.push("/candidato");
        console.log("Dados enviados");
      } else {
        // Caso não seja encontrado candidato com o mesmo token passa para a empresa
        const responseEmpresa = await axios.post(
          "http://10.5.9.20:38000/api/v1/empresas/login",
          { Email, Senha },
          {
            headers: {
              // Adicione aqui o cabeçalho personalizado para a empresa
              "authorization": "Empcd",
            },}
        );
        const token = responseEmpresa.data.token
        console.log(token);
        localStorage.setItem("jwtToken", token.token);
        if (responseEmpresa.data.token.validation) {
          router.push("/empresa");
          console.log("Dados enviados");
        } else {
          // Caso o login esteja errado
          console.log("Email ou senha incorretos");
          setError(true);
        }
      }
    } catch (error) {
      //caso não de certo passa o erro.
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="min-h-screen bg-008C83 flex flex-col md:flex-row">
        <div className="w-full md:w-2/4 bg-008C83 md:block hidden">
          <Image
            className="w-full h-full"
            src={Logo}
            alt="Logo Empcd"
            priority
          />
        </div>
        <div className="w-full md:w-2/4 p-10 bg-white flex justify-center items-center">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold mb-4 text-008C83">Login</h2>
            <hr className="my-6 border-2 border-008C83" />
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center text-008C83 hover:text-008C83">
                <Link href="/" className="text-teal-600 hover:underline">
                  <ArrowLeft className="inline -ml-1 inline -ml-1 text-base" />{" "}
                  Voltar para a Página Inicial
                </Link>
              </div>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <p className="mb-4 text-008C83">Bem-vindo de volta!</p>
                <label htmlFor="Email" className="block mb-1">
                  E-mail:
                </label>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full md:w-96 border rounded px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="senha" className="block mb-1">
                  Senha:
                </label>
                <input
                  type="password"
                  placeholder="Senha"
                  value={Senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full md:w-96 border rounded px-3 py-2"
                />
              </div>
              {error && (
                <p className="text-red-500">Email ou senha incorretos</p>
              )}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-40 bg-7CF5D4 text-white rounded py-2 hover:bg-008C83 transition duration-5000 rounded-full bg-7CF5D4"
                >
                  {loading ? (
                    "Carregando..."
                  ) : (
                    <p className="text-black font-semibold">Entrar</p>
                  )}
                </button>
              </div>
              <Link
                href="/cadastro"
                className="text-008C83 hover:underline flex justify-center"
              >
                Não tem Cadastro? Cadastre-se!
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
