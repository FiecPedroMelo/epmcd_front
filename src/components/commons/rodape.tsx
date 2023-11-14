import React from "react";
import Image from "next/image";
import Logo from "/public/images/Logo.png";

export default function Rodape() {
  return (
    <footer className="bg-teal-600">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div>
          <Image src={Logo} alt="EMPCD" priority className="h-36 w-36" />
        </div>
        <div className="text-white text-sm">
          Desenvolvido por EmpcdGroup
        </div>
      </div>
    </footer>
  );
}
