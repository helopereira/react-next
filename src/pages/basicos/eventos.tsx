import Evento from '@/components/basicos/Evento';

export default function paginaEventos(){
    return(
        <div className={`
        flex justify-center items-center h-screen gap-7
        `}>
            <Evento/>
            <Evento/>
        </div>
    )
}