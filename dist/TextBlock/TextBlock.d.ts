/// <reference types="react" />
export type TextBlockProps = {
    title?: string;
    type?: "primary" | "secondary" | "dark";
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;
declare const TextBlock: ({ title, type, children, className, ...rest }: TextBlockProps) => import("react").JSX.Element;
export default TextBlock;
