interface displayProps{
    valor: number
}

export default function Display(props: displayProps){
    return(
        <div className={`
        flex justify-center items-center p-20 
        font-black text-5xl
        bg-zinc-700 rounded-md 
        `}>
            {props.valor}
        </div>
    )
}