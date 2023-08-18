import Link from "next/link"

export default function Erro404 () {
    return (
        <div>
            <h1> Erro 404 </h1>
            <p> Opss, parece que a página não foi encontrada... </p>
            <Link href="/"> Voltar para Home </Link>
        </div>
    )
}