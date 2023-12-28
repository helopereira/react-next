import Caixa from "@/components/basicos/Caixa";

export default function paginaCaixas(){
    return(
        <div className={`
        flex justify-center items-center h-screen
        g-7
        `}
        >
            <Caixa>1</Caixa>
            <Caixa>2</Caixa>
            <Caixa>3</Caixa>
        </div>
    )
}