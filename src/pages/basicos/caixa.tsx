import Caixa from "@/components/basicos/Caixa";

export default function paginaCaixa(){
    return(
        <div className={`
        flex flex-row
        align-middle
        justify-items-center
        g-7
        `}
        >
            <Caixa>1</Caixa>
            <Caixa>2</Caixa>
            <Caixa>3</Caixa>
        </div>
    )
}