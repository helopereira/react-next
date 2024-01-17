interface personagensProps{
    personagens: any[]
}

export default function Personagens(props: personagensProps) {
    function renderizarPersonagens(){
        return(
            <div className={`
            text-white
            `}>
                <ul>
                    {props.personagens?.map((p: any) => (
                        <li key={p.name}>{p.name}</li>
                    ))}
                 </ul>
            </div>
        
        )
    }

    return (
        <div>
            {renderizarPersonagens()}
        </div>
    );
}

