/// <reference types="react" />
export type DividerProps = {
    width?: string;
    height?: string;
    children?: React.ReactNode;
    bgColor?: "light" | "black" | "dark";
} & React.HTMLAttributes<HTMLElement>;
declare const Divider: ({ width, height, children, bgColor, ...rest }: DividerProps) => import("react").JSX.Element;
export default Divider;
