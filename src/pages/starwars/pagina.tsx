import Personagens from "@/components/starwars/Personagens"

export default function PaginaStarWars (){
    return(
        <div className={`
        flex justify-center items-center h-screen
        font-black text-3xl
        `}>
            <Personagens/>
        </div>
    )
}