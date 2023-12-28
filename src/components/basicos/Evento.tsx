export default function Evento(){

    let contador = 0

    function incrementar(){
        console.log(contador++)
    }
    return(
        <button onClick={incrementar} className={`
        bg-orange-500
        font-black
        text-white
        w-40
        h-40
        `}>
            evento
        </button>
    )
}