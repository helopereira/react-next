import Circulo from '@/components/basicos/Circulo';

export default function paginaCirculos(){
    return(
        <div className={`
        flex justify-around
        items-center
        h-screen
        g-7
        `}>
            <Circulo cor="bg-yellow-500" texto="circ-1"/>
            <Circulo cor="bg-green-700" quasePerfeito texto="circ-2"/>
            <Circulo cor="bg-red-600" texto="circ-3"/>
        </div>
    )
    
}