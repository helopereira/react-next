import { useState } from "react"

export default function ImagemAleatoria(){
    const [pesquisa, alterarPesquisa] = useState<string>('abstract')
    const url = 'https://source.unsplash.com/featured/200x200?'

    function renderizarBotao(valor: string){
        return(
            <button className={`
            bg-blue-400
            px-4
            py-2
            rounded-md
            font-bold
            `} onClick={()=>{
                alterarPesquisa(valor)
            }}>
                {valor}
            </button>
        )
    }
    
    return(
        <div className={`
       flex justify-center flex-col items-center gap-2
        `}>
            <img src={`${url}${pesquisa}`} height={200} width={200} />
            <div
            className={` 
            flex flex-row gap-3 justify-around
            `}>
                {renderizarBotao('flower')}
                {renderizarBotao('snow')}
                {renderizarBotao('sun')}
            </div>
            
        </div>
    )
}