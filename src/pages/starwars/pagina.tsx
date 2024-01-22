import Personagens from "@/components/starwars/Personagens"
import useStarWars from "@/data/hooks/useStarWars"
import Background from "@/components/starwars/Background"
import Filmes from "@/components/starwars/Filmes"

export default function PaginaStarWars (){
    const {processando, personagens, voltar, filmes, selecionarPersonagem} = useStarWars()

    return(
        <div className={`
        flex justify-center items-center h-screen
         text-3xl flex-col
        `}>
            <Background/>
            {processando ? (
                <div>processando...</div>
            ): filmes.length > 0 ?(
                <Filmes filmes={filmes} voltar={voltar}/>
            ) : personagens?.length > 0 ? (
                <Personagens selecionar={selecionarPersonagem} personagens={personagens} />
            ): (
                <div>Nenhum personagem encontrado.</div>
            )}
            
        </div>
    )
}