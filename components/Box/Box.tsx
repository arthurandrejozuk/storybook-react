import classNames from "classnames";

export type BoxProps = {
    rounded?: boolean,
    filledBackground?: boolean,
    border?: boolean
    type?: "primary" | "secondary" | "dark" | "alert" | "success" | "error"
    children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>;

// type padronizará o background e a cor do texto no componente Box
const boxClassMap = {
    primary: "bg-primary",
    secondary: "bg-gray-100",
    dark: "bg-dark",
    alert: "bg-blue-100 text-yellow-100",
    success: "bg-green-100 text-green-100",
    error: "bg-red-200 text-error-100",  
}   

const Box = ({ children, rounded = false, filledBackground = false, border = false, type = "primary", className, ...rest }: BoxProps) => {
    
    const classes = classNames({
        // Considera os booleanos da classe acima, retornando o valor entre aspas
        "rounded-md": rounded,
        "border border-gray-100": border,
        "bg-dark": filledBackground,
        [boxClassMap[type]]: type
    })

    return (
        <div className={classNames(classes, className)} {...rest}>
            {children}
        </div>
    )
}
export default Box;