import Contador from "@/components/comunicacao/indireta/Contador";

export default function paginaIndireta(){
    return(
        <div className={`
        flex  flex-col justify-center items-center
        h-screen gap-5
        `}>
            <h1 className={`
            font-black text-5xl
            `}>Comunicação Indireta</h1>
            <Contador/>
        </div>
    )
}