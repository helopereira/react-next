import {useState} from "react"

interface perguntaProps{
    pergunta:string
    resposta:string
}

export default function Pergunta(props: perguntaProps){ 
    const [aberta, setAberta] = useState<boolean>(false)
    
    return(
        <div className={`
        flex flex-col rounded-md overflow-hidden
        `}>
            <div className={`
                bg-green-700 
                flex justify-center items-center
                text-2xl p-3`}
                onClick={()=>setAberta(!aberta)}
                >
                    {props.pergunta}
                
            </div>
            {aberta &&(
            <div className={`
            text-2xl bg-zinc-800 p-4
            `}>
                {props.resposta}
            </div>
            )}
            
        </div>
    )
}