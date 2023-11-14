import Link from "next/link";
import React from "react";
import Header from "@/components/commons/headerEmpresa";
import Rodape from "@/components/commons/rodape";

// Exemplo de dados de usuários (substitua por seus próprios dados)
const usersData = [
  { id: 1, nome: "Alice", email: "alice@example.com", telefone: "111-222-3333" },
  { id: 2, nome: "Bob", email: "bob@example.com", telefone: "222-333-4444" },
  { id: 3, nome: "Charlie", email: "charlie@example.com", telefone: "333-444-5555" },
  { id: 4, nome: "David", email: "david@example.com", telefone: "444-555-6666" },
  { id: 5, nome: "Eva", email: "eva@example.com", telefone: "555-666-7777" },
  { id: 6, nome: "Frank", email: "frank@example.com", telefone: "666-777-8888" },
  { id: 7, nome: "Grace", email: "grace@example.com", telefone: "777-888-9999" },
  { id: 8, nome: "Hank", email: "hank@example.com", telefone: "888-999-0000" },
  { id: 9, nome: "Ivy", email: "ivy@example.com", telefone: "999-000-1111" },
  { id: 10, nome: "Jack", email: "jack@example.com", telefone: "000-111-2222" },
  { id: 11, nome: "Fillipe", email: "felps@example.com", telefone: "972-666-7777" },
  { id: 12, nome: "Adilene", email: "adi@example.com", telefone: "093-673-7864" },
  { id: 13, nome: "Rafael", email: "rafa@example.com", telefone: "894-123-3451" },
  { id: 14, nome: "Adriano", email: "adrian@example.com", telefone: "134-458-3450" },
  { id: 15, nome: "Helder", email: "heldao@example.com", telefone: "333-666-999" },
  // Adicione mais usuários conforme necessário
];

// const [users, setUsers] = useState([]);

// useEffect(() => {
//   axios.get("/api/users").then((response) => {
//     setUsers(response.data);
//   });
// }, []);

const idCandidato = 1

const UserTable = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="flex items-center justify-center">
        <div className="w-3/4">
          <h1 className="font-bold text-teal-600 text-3xl text-center py-8">
            Lista de Usuários
          </h1>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Nome</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Telefone</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">
                    <Link href={`/candidato/perfil/${idCandidato}`}>
                      <p className="text-teal-600 hover:underline">{user.nome}</p>
                    </Link>
                  </td>
                  <td className="border px-4 py-2">{user.email}</td>                  
                  <td className="border px-4 py-2">{user.telefone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Rodape />
    </div>
  );
};

export default UserTable;
