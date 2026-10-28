/// <reference types="react" />
export type AvatarProps = {
    src?: string;
    alt?: string;
    size?: "xs" | "sm" | "md" | "lg";
} & React.HTMLAttributes<HTMLDivElement>;
declare const Avatar: ({ size, className, src, alt, ...rest }: AvatarProps) => import("react").JSX.Element;
export default Avatar;
