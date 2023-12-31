"use client";

import Image from "../../../node_modules/next/image";
import negocio from "../../images/negocio.png";
import sistema from "../../images/sistema.png";
import imagem from "../../images/imagem.png";
import Header from "../../components/commons/header";
import VLibras from '@moreiraste/react-vlibras';
import { useRouter } from "next/navigation";
import { ArrowLeft } from "react-feather";
import Link from "next/link";

export default function TermosDeUso() {

  const router = useRouter();

  const handleVoltar = () => {
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

      <Header />

      <div className="termos-container">
        <div className="bg-gray-200 p-8 rounded-lg mx-auto max-w-2xl">
          <h1 className="text-2xl font-bold mb-4">Termos de Uso do EMPCD</h1>

          <div className="termos-section mb-4">
            <h2 className="text-lg font-bold mb-2">1. Aceitação dos Termos</h2>
            <br />
            <p>Ao acessar ou usar o EMPCD, você concorda em cumprir e ficar vinculado aos seguintes Termos de Uso. Se você não concordar com estes termos, por favor, não use o Site.</p>
          </div>

          <br />

          <div className="termos-section mb-4">
            <h2 className="text-lg font-bold mb-2">2. Uso do Site</h2>
            <br />
            <h2 className="text-md font-bold mb-2">2.1 Cadastro</h2>
            <p>Para acessar as funcionalidades completas do Site, você deve se cadastrar fornecendo informações precisas e atualizadas. Você é responsável pela confidencialidade de suas credenciais de login.</p>
            <br />
            <h2 className="text-md font-bold mb-2">2.2 Elegibilidade</h2>
            <p>O uso do Site é restrito a empresas que desejam postar vagas de emprego e a indivíduos com deficiência em busca de oportunidades de emprego.</p>
          </div>

          <br />

          <div className="termos-section mb-4">
            <h2 className="text-lg font-bold mb-2">3. Postagem de Vagas</h2>
            <br />
            <h2 className="text-md font-bold mb-2">3.1 Responsabilidade da Empresa</h2>
            <p>As empresas são responsáveis pelo conteúdo preciso e não discriminatório das vagas de emprego postadas no Site. O EMPCD se reserva o direito de remover qualquer conteúdo que viole estes Termos.</p>
            <br />
            <h2 className="text-md font-bold mb-2">3.2 Processo Seletivo</h2>
            <p>O EMPCD não participa no processo seletivo das empresas após a postagem das vagas. O Site serve apenas como intermediário na divulgação de oportunidades de emprego.</p>
          </div>

          <br />

          <div className="termos-section mb-4">
            <h2 className="text-lg font-bold mb-2">4. Candidatura e Privacidade</h2>
            <br />
            <h2 className="text-md font-bold mb-2">4.1 Candidatura</h2>
            <p>Usuários com deficiência podem se candidatar a vagas de emprego no Site. As empresas têm acesso às informações fornecidas pelos candidatos, mas o EMPCD não participa no processo de seleção.</p>
            <br />
            <h2 className="text-md font-bold mb-2">4.2 Privacidade</h2>
            <p>As informações dos usuários serão tratadas de acordo com nossa Política de Privacidade. Ao usar o Site, você concorda com a coleta e o uso de suas informações conforme estabelecido na Política de Privacidade.</p>
          </div>

          <br />

          <div className="termos-section mb-4">
            <h2 className="text-lg font-bold mb-2">5. Responsabilidades</h2>
            <br />
            <h2 className="text-md font-bold mb-2">5.1 Responsabilidade do Usuário</h2>
            <p>Os usuários concordam em usar o Site de forma ética e em conformidade com todas as leis aplicáveis. O EMPCD não é responsável por ações de usuários individuais.</p>
            <br />
            <h2 className="text-md font-bold mb-2">5.2 Responsabilidade do EMPCD</h2>
            <p>O EMPCD envida esforços para manter o Site acessível e seguro. No entanto, não podemos garantir a ausência de erros ou interrupções. O uso do Site é por conta e risco do usuário</p>
          </div>

          <br />

          <div className="termos-section mb-4">
            <h2 className="text-lg font-bold mb-2">6. Alterações nos Termos</h2>
            <br />
            <p>O EMPCD reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor após a publicação no Site. Recomendamos revisar periodicamente os Termos.</p>
          </div>

          <br />

          <div className="termos-section mb-4">
            <h2 className="text-lg font-bold mb-2">7. Contato</h2>
            <p>Se tiver alguma dúvida ou preocupação sobre estes Termos de Uso, entre em contato conosco através do email: empcdgroup@gmail.com .</p>
          </div>

          <div className="flex items-center text-008C83 hover:text-008C83">
                <button onClick={handleVoltar} className="text-teal-600 hover:underline">
                  <ArrowLeft className="inline -ml-1 inline -ml-1 text-base"   />{" "}
                  Voltar para a Tela de Cadastro
                </button>
              </div>

        </div>
      </div>

    </>
  );
}
