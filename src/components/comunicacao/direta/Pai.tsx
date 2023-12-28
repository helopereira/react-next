import Filho from './Filho'

interface paiProps{
    nome: string
    sobrenome:string
}

export default function Pai (props: paiProps){
    return(
        <div className={`
        flex gap-5
        bg-purple-600  text-white 
        rounded-md p-5
        flex-col
        `}>
            <div>
               <h1 className='font-bold flex justify-center'>Pai</h1>
               <h1 className='  flex justify-center'>{props.nome} {props.sobrenome}</h1> 
            </div>
            
            <Filho nome='Matheus' sobrenome={props.sobrenome}/>
            <Filho nome='Guilherme' sobrenome={props.sobrenome}/>
            <Filho nome='Diogo' sobrenome={props.sobrenome}/>
        </div>
    )
}