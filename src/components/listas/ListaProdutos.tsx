import Produto from "@/model/Produto"
import ProdutoItem from "./ProdutoItem"

interface ListaProdutosProps {
    produtos: Produto[]
}

export default function ListaProdutos (props: ListaProdutosProps){
    return (
        <div className={`
        flex flex-wrap gap-3 p-3 justify-center items-center
        `}>
            {props.produtos.map((produto) => {
                return <ProdutoItem key={produto.id} produto={produto}/>
            })}
        </div>
    )
}