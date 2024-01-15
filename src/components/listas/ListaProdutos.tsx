import Produto from "@/model/Produto"
import ProdutoItem from "./ProdutoItem"

interface ListaProdutosProps {
    produtos: Produto[]
    comprar: (produto: Produto) => void
}

export default function ListaProdutos (props: ListaProdutosProps){
    return (
        <div className={`
        flex flex-wrap gap-3 p-3 justify-center items-center grid grid-cols-4
        `}>
            {props.produtos.map((produto) => {
                return <ProdutoItem key={produto.id} produto={produto} comprar={props.comprar}/>
            })}
        </div>
    )
}