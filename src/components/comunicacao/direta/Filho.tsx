interface filhoProps{
    nome: string
    sobrenome:string
}

export default function Filho (props: filhoProps){
    return(
        <div className={`
        flex justify-center items-center
        bg-pink-500 rounded-md p-5 gap-2
        `}>
            <h1 className='font-bold'>Filho</h1>
            <h1>{props.nome} {props.sobrenome}</h1>
        </div>
    )
}