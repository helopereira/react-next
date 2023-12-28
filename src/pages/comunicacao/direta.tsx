import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta(){
    return(
    <div className={`
    flex justify-center items-center h-screen flex-col gap-3 
    `}>
        <h1 className={`
        font-black text-3xl
        `}>Comunicação direta</h1>
        <Avo nome="José" sobrenome="Cruz"/>
        <Avo nome="Joaquim" sobrenome="Santos"/>
    </div>
    )
}