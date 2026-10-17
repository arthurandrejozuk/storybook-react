import Image from "next/image"

export type AvatarImageProps = {

} & React.ImgHTMLAttributes<HTMLImageElement>

const AvatarImage = ({src ="", alt =""}: AvatarImageProps) => {
    return (
        <img src={src} alt={alt} className="absolute w-1/2 h-1/2 rounded-full"/>
    )
}

export default AvatarImage;