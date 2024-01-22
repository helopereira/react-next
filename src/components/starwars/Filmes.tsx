interface FilmesProps{
    filmes: any[]
    voltar: () => void
}

export default function Filmes(props: FilmesProps) {

    return (
        <div className="flex flex-col w-full gap-5 items-center">
            <table className={`
            text-xl opacity-70 rounded-md overflow-hidden
            `}>
                <thead>
                    <tr className="bg-zinc-900">
                        <th className="p-3">Título</th>
                        <th className="p-3">Episódio</th>
                        <th className="p-3">Lançamento</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filmes.map((p: any) => (
                        <tr key={p.name} className="text-black text-center bg-zinc-400">
                            <td className="">{p.title}</td>
                            <td className="p-3">{p.episode_id}</td>
                            <td className="p-3">{new Date(p.release_date).toLocaleDateString('pt-BR')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button className="botao" onClick={props.voltar}>Voltar</button>
        </div>
    );
}

