interface personagensProps{
    personagens: any[]
    selecionar: (personagem: any) => void
}

export default function Personagens(props: personagensProps) {

    return (
        <div>
            <table className={`
            text-xl opacity-70 rounded-md overflow-hidden
            `}>
                <thead>
                    <tr className="bg-zinc-900">
                        <th className="p-3">Nome</th>
                        <th className="p-3">Altura</th>
                        <th className="p-3">Peso</th>
                        <th className="p-3">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.personagens.map((p: any) => (
                        <tr key={p.name} className="text-black text-center bg-zinc-400">
                            <td className="">{p.name}</td>
                            <td className="p-3">{p.height}</td>
                            <td className="p-3">{p.mass}</td>
                            <td className="p-3">
                            <button className="botao" onClick={() => props.selecionar(p)}></button>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

