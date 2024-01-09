import Produto from "@/model/Produto";

interface ProdutoItemProps {
    produto: Produto
    comprar: (produto: Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps){
    const {produto} = props
    return(
        <div className={`
        flex flex-col rounded-md overflow-hidden p-2 border border-zinc-600
    `}>
        <img src={props.produto.imagem} width={300} height={300}/>
        <div className='flex flex-row justify-between items-center'>
            <div className='font-black text-2xl'>{produto.nome}</div>
            <div className='font-black text-pink-400 text-2xl'>R$ {produto.preco}</div>
        </div>
        <div className='text-zinc-500'>{produto.descricao}</div>
        <button className="botao text-2xl p-1" onClick={()=>props.comprar(produto)}>Comprar</button>
    </div>
    )
}