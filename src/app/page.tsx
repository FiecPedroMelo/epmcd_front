"use client";

import Logo from "/public/images/Logo.png";
import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";
import Navbar from "@/components/commons/headerHome";
import VLibras from '@moreiraste/react-vlibras'


export default function Home() {
  return (
    <>

<div className="App">
      <VLibras forceOnload={true} />
      <header className="App-header">
      </header>
    </div>


      <Navbar />
      <main>
        <h1 className="font-bold text-teal-600 text-3xl text-center py-9">
          Acesse as Vagas
        </h1>

        <div className="flex flex-wrap justify-center items-center">
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-slate-100 m-8 w-full sm:w-96 md:w-96">
            <div className="px-8 py-8">
              <div className="font-bold text-2xl text-center mb-2">
                Candidatos
              </div>
              <div className="text-teal-600 font-semibold text-lg text-justify py-6">
                Você é um PCD e está procurando emprego em nosso site,
                cadastre-se por aqui e abra seu perfil para candidato!
              </div>
            </div>
            <div className="px-20 pt-4 pb-6">
              <Link href="/cadastro" passHref>
                <p className="flex justify-center text-white bg-008F8C hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium">
                  Quero ser candidato
                </p>
              </Link>
            </div>
          </div>

          <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-slate-100 m-8 w-full sm:w-96 md:w-96">
            <div className="px-8 py-8">
              <div className="font-bold text-2xl text-center mb-2">Empresa</div>
              <div className="text-teal-600 font-semibold text-lg text-justify py-6">
                Você é uma empresa e está querendo adicionar vagas de emprego em
                nosso site, cadastre-se por aqui e abra seu perfil empresarial!
              </div>
            </div>
            <div className="px-20 pt-4 pb-6">
              <Link href="/cadastro" passHref>
                <p className="flex justify-center text-white bg-008F8C hover:bg-015958 active:bg-023535 hover:text-white rounded-md px-3 py-2 text-lg font-medium">
                  Abrir perfil empresarial
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center min-h-screen white">
          <div className="bg-0D9488 p-4 rounded-lg w-full text-center md:w-2/3 lg:w-1/2">
            <div className="md:hidden flex justify-center items-center">
              {/* A imagem será visível somente em telas maiores */}
              <Image
                className="flex justify-center"
                src={Logo} // Substitua pelo caminho da sua imagem
                alt="Imagem"
                width={700}
                height={700}
              />
            </div>
            <div className="md:block hidden">
              {/* A imagem será visível somente em telas menores */}
              <Image
                src={Logo} // Substitua pelo caminho da sua imagem
                alt="Imagem"
                width={700}
                height={700}
                className="mx-auto flex"
              />
            </div>
            <h2 className="text-white text-3xl pt-4 font-semibold text-center">
              Quem Somos?
            </h2>
            <br />
            <p className="text-white text-lg mt-2 max-w-lg mx-auto text-left">
              Bem-vindo ao EMPCD! Nosso objetivo é conectar talentos e
              oportunidades, oferecendo uma plataforma dedicada a encontrar
              vagas de emprego para pessoas com deficiência. Acreditamos que a
              inclusão é fundamental para o mercado de trabalho mais igualitário
              e buscamos facilitar o acesso de candidatos com deficiência à
              oportunidade de emprego, ao mesmo tempo em que auxiliamos as
              empresas a cumprir suas cotas. Seja você um candidato em busca de
              novas possibilidades ou uma empresa comprometida com a
              diversidade, o EMPCD de está aqui para ajudá-lo nessa jornada de
              inclusão e crescimento.
            </p>
            <Link href="/sobre">
              <br />

              <div className="block mt-4 mx-auto w-40">
                <button className="px-4 py-2 w-full text-white font-semibold bg-015958 hover:bg-015958 active:bg-023535 hover:text-white rounded-md">
                  Saiba mais
                </button>
              </div>
            </Link>
          </div>
        </div>

        <br />
        <br />

      </main>
    </>
  );
}
