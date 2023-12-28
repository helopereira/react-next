import ImagemAleatoria from "@/components/hooks/ImagemAleatoria"
export default function paginaImagens(){
    return(
        <div className={`
        flex justify-center items-center h-screen
        gap-6
        `}>
            <ImagemAleatoria />
            <ImagemAleatoria />
            <ImagemAleatoria />
        </div>
    )
}