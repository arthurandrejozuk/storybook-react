/// <reference types="react" />
export type LinkProps = {
    children: React.ReactNode;
    disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
declare const Link: ({ children, href, disabled, className, ...rest }: LinkProps) => import("react").JSX.Element;
export default Link;
