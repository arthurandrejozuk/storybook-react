import classNames from "classnames";
import AvatarImage from "./AvatarImage";
import AvatarIcon from "./AvatarIcon";
export type AvatarProps = {
    src?: string,
    alt?: string,
    size?: "xs" | "sm" | "md" | "lg",
   
} & React.HTMLAttributes<HTMLDivElement>;

const avatarSizeMap = {
  xs: "w-5 h-5",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-9 h-9",
};

const Avatar = ({ size = "xs", className,  src, alt, ...rest}: AvatarProps) => {
    const avatarSizeClass = avatarSizeMap[size]
    const avatar = src ? <AvatarImage src={src} alt={alt} /> : <AvatarIcon/>
    return (
        <div {...rest} className={classNames("rounded-full relative bg-slate-100 flex items-center justify-center text-slate-400", avatarSizeClass, className)}>
           {avatar}
        </div>
    )
}

export default Avatar;