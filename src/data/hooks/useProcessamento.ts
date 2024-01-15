import { useState } from "react";

export default function useProcessamento(){
    const [processando, setProcessando] = useState<boolean>(false)

    function iniciarProcessamento(){
        setProcessando(true)
    }

    function finalizarProcessamento(){
        setProcessando(false)
    }

}

