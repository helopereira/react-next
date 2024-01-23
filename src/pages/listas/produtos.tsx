import ListaProdutos from "@/components/listas/ListaProdutos"
import produtos from "@/constants/produto"
import { useContext } from "react"
import Carrinho from "@/components/listas/Carrinho"
import CarrinhoContext from "@/data/contexts/CarrinhoContext"
import Link from "next/link"

export default function PaginaProdutos(){
    const {itens, adicionarProduto} = useContext(CarrinhoContext)

    return(
        <div className={`
        flex justify-center items-center h-screen flex-col gap-4
        `}>
            <Carrinho itens={itens}/>
            <ListaProdutos produtos={produtos} comprar={adicionarProduto}/>
            <Link href='/'>Voltar</Link>
        </div>
    )
}


