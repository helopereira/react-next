import ItemCarrinho from "@/model/ItemCarrinho";

export default function CarrinhoItem(props: ItemCarrinho){
    function exibirComoMoeda (valor: number){
        return new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
        }) .format(valor)
    }

    return(
        <div className={`
        flex justify-between bg-zinc-700 rounded md p-2 items-center gap-3
        `}>
            <div className={`bg-pink-400 rounded-full w-8 h-8 flex justify-center items-center font-black`}>
              {props.quantidade}  
            </div>
            <div>
             {props.produto.nome}   
            </div>
            <span className={`font-black`}>
                R$ {exibirComoMoeda}
                {props.produto.preco * props.quantidade}
            </span>
        </div>
    )
}