import Bts from "@/components/listas/Bts"
import Image from "next/image"

export default function PaginaListaBasica(){
    const hyyh = [
        'Intro: The most bealtiful moment in Life',
        'I NEED YOU',
        'Hold me tight',
        'SKIT: Expectation!',
        'DOPE',
        'Boyz with fun',
        'Converse High',
        'Moving on',
        'Outro: Love is not over'
    ]

    return(
        <div className={`
        bg-red-100 h-screen gap-3
        flex justify-center flex-col items-center
        `}>
            <p className={`
            text-red-300 font-black text-2xl 
            `}>
                THE 3RD MINI ALBUM
            </p>
            <h1 className={`
            text-5xl font-black
             text-white drop-shadow-xl
            `}>
                THE MOST BEALTIFUL MOMENT IN LIFE
            </h1>
            <div className={`flex flex-row gap-3`}>
                <img src="https://ibighit.com/bts/images/bts/discography/hwayangyeonhwa-pt1/album-cover.jpg" alt="album cover" width={400} height={400}/>
                <Bts musicas={hyyh} />
            </div>
        </div>
    )

}