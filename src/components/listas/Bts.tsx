interface BtsProps {
    musicas: string[]
}

export default function Bts (props: BtsProps){    
    const itens = props.musicas?.map((musica, i) => {
        return(
            <li key={musica} className={`
            text-black text-2xl p-2 
            `}>
                {musica}
            </li>
        )
    })

    return <ol>{itens}</ol>
}