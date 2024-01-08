import Faq from "@/components/condicional/Faq";

export default function paginaFaq(){
    return(
        <div className={`
        flex justify-center items-center h-screen flex-col gap-3
        `}>
            <h1 className={`
            font-black text-5xl
            `}>Condicional</h1>
            <Faq/>
        </div>
    )
}