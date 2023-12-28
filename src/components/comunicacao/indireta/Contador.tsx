import { useState } from "react"
import Botoes from "./Botoes"
import Display from "./Display"

export default function Contador(){
    const[num, setNum] = useState<number>(0)

    function incrementar(valor: number){
        setNum(num + valor)
    }
    
    function decrementar(valor: number){
        setNum(num - valor)
    }
    
    return(
        <div className={`
        border border-zinc-700
        rounded-lg w-72 h-108
        flex flex-col p-2 gap-3
        `}>
            <Display valor={num}/>
            <Botoes incr={incrementar} decr={decrementar}/>
        </div>
    )
}