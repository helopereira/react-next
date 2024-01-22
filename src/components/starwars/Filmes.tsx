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
                    {props.filmes.map((filme: any) => (
                        <tr key={filme.title} className="text-black text-center bg-zinc-400">
                            <td className="">{filme.title}</td>
                            <td className="p-3">{filme.episode_id}</td>
                            <td className="p-3">{new Date(filme.release_date).toLocaleDateString('pt-BR')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button className="botao" onClick={props.voltar}>Voltar</button>
        </div>
    );
}

