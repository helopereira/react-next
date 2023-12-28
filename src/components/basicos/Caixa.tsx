export default function Caixa(props: any){
    return(
        <div className={`
            bg-pink-600
            w-64
            h-64
            m-2
            text-center
            text-5xl
            font-black
            text-white
            flex justify-center items-center
            `}>
        {props.children}
        </div>
    )  
}