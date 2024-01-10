import ItemCarrinho from "@/model/ItemCarrinho"
import CarrinhoItem from "@/components/listas/CarrinhoItem"

interface CarrinhoProps{
    itens: ItemCarrinho[]
}

export default function Carrinho (props: CarrinhoProps){
    return(
        <div className="border-zinc-600 p-5 rounded-md overflow-hidden border-8">
            <h1 className={`
            font-black text-4xl text-center
            `}>Carrinho</h1>
            <div>
                {props.itens.map((item,i)=>{
                    return <CarrinhoItem key={i} {...item}/>
                })}
            </div>
        </div>
    )
}