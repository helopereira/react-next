interface CirculoProps{
    texto: string
    cor: string
    quasePerfeito?: boolean 
}

export default function Circulo(props: CirculoProps){
    return(
        <div className={`
        ${props.cor}
        w-40
        h-40
        flex justify-center items-center
        font-black
        p-2
        ${props.quasePerfeito? 'rounded-md': 'rounded-full'}
        `}>
           {props.texto}
        </div>
    )
}