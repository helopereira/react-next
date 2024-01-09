import ItemCarrinho from "@/model/ItemCarrinho"
import CarrinhoItem from "./CarrinhoItem"

interface CarrinhoProps{
    itens: ItemCarrinho[]
}

export default function Carrinho (props: CarrinhoProps){
    return(
        <div>
            <h1 className={`
            font-black text-4xl text-center
            `}>Carrinho</h1>
            <div className={`
            bg-pink-300
            `}>
                {props.itens.map((item,i)=>{
                    return <CarrinhoItem key={i} {...item}/>
                })}
            </div>
        </div>
    )
}