/// <reference types="react" />
export type InputProps = {
    label?: string;
    multiline?: boolean;
} & (React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>);
declare const Input: ({ label, className, ...rest }: InputProps) => import("react").JSX.Element;
export default Input;
