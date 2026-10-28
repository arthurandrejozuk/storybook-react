/// <reference types="react" />
export type BoxProps = {
    rounded?: boolean;
    filledBackground?: boolean;
    border?: boolean;
    type?: "primary" | "secondary" | "dark" | "alert" | "success" | "error";
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;
declare const Box: ({ children, rounded, filledBackground, border, type, className, ...rest }: BoxProps) => import("react").JSX.Element;
export default Box;
