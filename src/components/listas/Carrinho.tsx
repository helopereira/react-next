import ItemCarrinho from "@/model/ItemCarrinho"
import CarrinhoItem from "@/components/listas/CarrinhoItem"

interface CarrinhoProps{
    itens: ItemCarrinho[]
}

export default function Carrinho (props: CarrinhoProps){
    const total = props.itens.reduce((soma, item) => {
        return soma + item.quantidade * item.produto.preco
    }, 0)

    return(
        <div className="border-zinc-600 p-5 rounded-md overflow-hidden border-8 w-4/5 flex-col">
            <div className={`flex flex-row justify-around items-center`}>
                <h1 className={`
                font-black text-4xl text-center p-3
                `}>Carrinho</h1>
                <h1 className={`font-bold text-2xl`}>R$ {total}</h1>
            </div>
            
            <div className={`flex flex-row gap-3 justify-center bg-zinc-800 p-4`}>
                {props.itens.length === 0 ? (
                    <div className={`font-black text-2xl text-zinc-600`}>Nenhum item no carrinho</div>
                ) : (
                    props.itens.map((item,i)=>{
                    return <CarrinhoItem key={i} {...item}/>
                }))}
                
            </div>
        </div>
    )
}