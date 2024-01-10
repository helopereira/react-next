import ListaProdutos from "@/components/listas/ListaProdutos"
import produtos from "@/constants/produto"
import { useState } from "react"
import ItemCarrinho from "@/model/ItemCarrinho"
import Produto from "@/model/Produto"
import Carrinho from "@/components/listas/Carrinho"

export default function PaginaProdutos(){
    const [itens,setItens] = useState<ItemCarrinho[]>([])

    function adicionarProduto(produto: Produto){
        const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? { quantidade: 0, produto }
        const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 }
        const outrosItens = itens.filter((item) => item.produto.id !== produto.id)
        setItens([...outrosItens, novoItem])

        console.log(produto)
    }

    return(
        <div className={`
        flex justify-center items-center h-screen flex-col gap-4
        `}>
            <Carrinho itens={itens}/>
            <ListaProdutos produtos={produtos} comprar={adicionarProduto}/>
        </div>
    )
}


