import Pergunta from "@/components/condicional/Pergunta";

export default function Faq(){
    return(
        <div className={`
        flex flex-col w-3/4 gap-3
        `}>
            <Pergunta pergunta="pergunta 1" resposta="resposta 1"/>
            <Pergunta pergunta="pergunta 2" resposta="resposta 2"/>
            <Pergunta pergunta="pergunta 3" resposta="resposta 3"/>
            <Pergunta pergunta="pergunta 4" resposta="resposta 4"/>
        </div>
    )
}