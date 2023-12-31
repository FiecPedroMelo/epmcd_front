"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Header from "@/components/commons/headerEmpresa";
import VLibras from "@moreiraste/react-vlibras";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function RelatorioVaga() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const Token = localStorage.getItem("jwtToken");
  const searchParams = useSearchParams()
  const IdVaga = searchParams.get('IdVaga')
  console.log(IdVaga);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            "authorization": "Empcd",
          },
        };
    
        const response = await axios.get(`http://192.168.0.13:38000/api/v1/empresas/${Token}/get/${IdVaga}/relatorio`, config); // Substitua pelo seu endpoint real
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao obter os dados dos usuários", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <VLibras forceOnload={true} />
        <header className="App-header"></header>
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="bg-white">
          <Header />
          <main className="flex items-center justify-center">
            <div className="w-3/4">
              <h1 className="font-bold text-teal-600 text-3xl text-center py-8">
                Lista de Usuários
              </h1>

              {users.length === 0 ? (
                <p className="text-center text-gray-500">
                  Ainda não possui nenhuma candidatura
                </p>
              ) : (
                <table className="w-full table-auto">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Nome</th>
                      <th className="border px-4 py-2">Email</th>
                      <th className="border px-4 py-2">Telefone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user: any) => (
                      <tr key={user.id}>
                        <td className="border px-4 py-2">
                          <Link href={`/empresa/perfilCand?IdCand=${user.IdCand}`}>
                            <p className="text-teal-600 hover:underline">
                              {user.NomeCompleto}
                            </p>
                          </Link>
                        </td>
                        <td className="border px-4 py-2">{user.Email}</td>
                        <td className="border px-4 py-2">{user.Telefone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </main>
          

        </div>
      )}
    </>
  );
}
