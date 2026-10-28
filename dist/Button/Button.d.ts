/// <reference types="react" />
export type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: ({ variant, children, className, disabled, ...rest }: ButtonProps) => import("react").JSX.Element;
export default Button;
