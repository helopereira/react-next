import Contador from "@/components/hooks/Contador";
import { disconnect } from "process";

export default function PaginaContador(){
    return(
        <div className={`
        flex justify-center items-center h-screen
        `}>
            <Contador/>
        </div>
    )
}