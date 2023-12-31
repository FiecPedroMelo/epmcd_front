"use client";

import Image from "../../../node_modules/next/image";
import negocio from "/public/images/negocio.png";
import sistema from "/public/images/sistema.png";
import imagem from "/public/images/imagem.png";
import Header from "../../components/commons/header";
import VLibras from '@moreiraste/react-vlibras';


export default function Sobre() {
  return (
    <>

<div className="App">
      <VLibras forceOnload={true} />
      <header className="App-header">
      </header>
    </div>

      <Header />

      <h1 className="font-bold text-teal-600 text-3xl text-center py-12">
        Quem somos?
      </h1>

      <div className="container mx-auto flex flex-col sm:flex-row items-center py-10 sm:py-16 md:py-20 text-2xl md:text-2xl md:leading-loose xl:leading-loose">
        <div className="w-full sm:w-1/2">
          <Image src={negocio} alt="Negocio" />
        </div>
        <div className="w-full sm:w-1/2 py-4 sm:py-0 px-4 sm:px-8 xl:px-16">
          <p>
            Nossa missão é facilitar o acesso de pessoas com deficiência ao
            mercado de trabalho. Entendemos que cada pessoa tem habilidades
            únicas e valiosas, independentemente da sua deficiência. É por isso
            que nos dedicamos a proporcionar um espaço onde os candidatos possam
            encontrar vagas de emprego adequadas às suas capacidades e
            interesses.
          </p>
        </div>
      </div>

      <div className="container mx-auto flex flex-col sm:flex-row items-center py-10 sm:py-16 md:py-20 text-2xl md:text-2xl md:leading-loose xl:leading-loose">
        <div className="w-full sm:w-1/2 py-4 sm:py-0 px-4 sm:px-8 xl:px-16">
          <p>
            Nosso sistema visa a simplicidade, facilidade e acessibilidade, para
            o melhor aproveitamento de todos os usuários.
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <Image src={sistema} alt="Sistema" />
        </div>
      </div>

      <div className="container mx-auto flex flex-col sm:flex-row items-center py-10 sm:py-16 md:py-20 text-2xl md:text-2xl md:leading-loose xl:leading-loose">
        <div className="w-full sm:w-1/2">
          <Image src={imagem} alt="Imagem" />
        </div>
        <div className="w-full sm:w-1/2 py-4 sm:py-0 px-4 sm:px-8 xl:px-16">
          <p>
            O EMPCD foi desenvolvido pelos alunos da FIEC (Fundação Indaiatubana
            de Educação e Cultura), uma instituição de ensino dedicada a
            promover a educação e o progresso em nossa comunidade. Junte-se a
            nós no EMPCD e seja parte dessa jornada de inclusão e oportunidades!
          </p>
        </div>
      </div>

    </>
  );
}

{
  /* <Header />
           
<h1 className=" font-bold text-teal-600 text-3xl text-center py-12  ">Quem somos?</h1>
    
    
   <div className="relative w-1/2 left-1/2">
   <div className="sm:px-4 md:px-8 xl:px-16 py-10 sm:py-16 md:py-20 text-2xl md:text-2xl md:leading-loose xl:leading-loose">
   Nossa missão é facilitar o acesso de pessoas com deficiência ao mercado de trabalho.
   Entendemos que cada pessoa tem habilidades únicas e valiosas, independentemente da sua deficiência. É por isso que nos dedicamos a proporcionar um espaço onde os candidatos possam encontrar vagas de emprego adequadas as suas capacidades e interesses.
   </div>
   
   <div className="absolute top-3 -left-3/4 transform translate-x-1/2 sm:-translate-x-1/4 xl:translate-x-0">
        <Image className="sm:px-0 md:px-0 xl:px-48 max-w-screen-xl" src={negocio} alt="" />
    </div>

   </div>
   
    <div className="relative w-1/2 right-0">
   <div className=" sm:px-4 md:px-8 xl:px-16 py-10 sm:py-16 md:py-20 text-2xl md:text-2xl md:leading-loose xl:leading-loose ">
   Nosso sistema visa a simplicidade, facilidade e acessibilidade, para o melhor aproveitamento de todos os usuarios.
   </div>
   
   <div className="absolute top-0  -right-3/4 transform md:translate-x-1/4 sm:translate-x-2/4 xl:translate-x-0">
           <Image className="sm:px-28 md:px-36 xl:pl-60 max-w-screen-xl " src={sistema} alt="" />
   </div>
   </div>
   
    <div className="relative w-1/2 left-1/2">
   <div className=" sm:px-4 md:px-8 xl:px-16 py-10 sm:py-16 md:py-20 text-2xl md:text-2xl md:leading-loose xl:leading-loose ">
   O EMPCD foi desenvolvido pelos alunos da FIEC (Fundação Indaiatubana de Educação e Cultura), uma instituição de ensino dedicada a promover a educação e o progresso em nossa comunidade. 
   
   
   <p>Junte-se a nós no EMPCD e seja parte dessa jornada de inclusão e oportunidades!</p>
   </div>
   
   <div className="absolute top-2  -left-3/4 transform md:-translate-x-80 sm:-translate-x-2/4 xl:translate-x-0">
           <Image className="sm:px-40 md:px-36  xl:px-48  max-w-screen-xl " src={imagem} alt="" />
   </div>
   </div>
   
   
   
   <Rodape/> */
}
