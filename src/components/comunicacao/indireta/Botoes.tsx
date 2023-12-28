interface propsBotao{
    incr: (valor: number) => void
    decr: (valor: number) => void
}

export default function Botoes(props: propsBotao){
    return(
        <div className={`
        flex justify-between items-center pt-2 gap-3
        `}>
            <button className="botao" onClick={()=>props.decr(10)}>decrementar</button>
            <button className="botao" onClick={()=>props.incr(10)}>incrementar</button>
        </div>
    )
}