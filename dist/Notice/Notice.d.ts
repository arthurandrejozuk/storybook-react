/// <reference types="react" />
export type NoticeProps = {
    children?: React.ReactNode;
    type?: "alert" | "success" | "error" | "secondary";
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
declare const Notice: ({ children, type, className, ...rest }: NoticeProps) => import("react").JSX.Element;
export default Notice;
