import Image from "next/image";

export default function Background() {
    return (
        <Image
            src="https://wallpapers.com/images/hd/star-wars-the-force-awakens-7t6s48g4atoa9t44.webp"
            fill
            alt="background"
            className="-z-50 opacity-30 object-cover"
        />
    )
}