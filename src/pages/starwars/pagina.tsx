import Personagens from "@/components/starwars/Personagens"
import useStarWars from "@/data/hooks/useStarWars"
import Background from "@/components/starwars/Background"

export default function PaginaStarWars (){
    const {processando, personagens, obterPersonagens} = useStarWars()

    return(
        <div className={`
        flex justify-center items-center h-screen
        font-black text-3xl flex-col
        `}>
            <Background/>
            {processando ? (
                <div>processando...</div>
            ) : personagens?.length > 0 ? (
                <Personagens personagens={personagens} />
            ): (
                <div>Nenhum personagem encontrado.</div>
            )}

        <button onClick={obterPersonagens} className={`botao`}>Obter</button>
        </div>
    )
}