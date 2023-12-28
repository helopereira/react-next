import Pai from './Pai'

interface avoProps{
    nome: string
    sobrenome:string
}

export default function Avo (props: avoProps){
    return(
        <div className={`
        flex gap-2 p-3
        items-center
        bg-blue-500 text-white 
        flex-col
        `}>
            <h1 className='font-bold'>Avô</h1>
            <h1>{props.nome} {props.sobrenome}</h1>
            
            <div className={`flex flex-row gap-3`}>
                <Pai nome='João' sobrenome={props.sobrenome}/>
                <Pai nome='Pedro' sobrenome={props.sobrenome}/>
                <Pai nome='Miguel' sobrenome={props.sobrenome}/>
            </div>
            
        </div>
    )
}