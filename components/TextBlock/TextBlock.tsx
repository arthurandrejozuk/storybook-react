import Box from "../Box/Box"
import Typography from "../Typography/Typography"

// recebe um title, um tipo para o estilo do box
export type TextBlockProps = {
    title?: string
    type?: "primary" | "secondary" | "dark"
    children?: React.ReactNode
} & React.HTMLAttributes<HTMLElement>

 
const TextBlock = ({ title, type = "primary", children, className, ...rest }: TextBlockProps) => {
    // Verifica o type e então muda a cor do texto
    const textClass = type === "primary" ? "text-white" : "text-gray-primary"
    return (
        <Box className="flex gap-1 p-5" rounded {...rest} type={type}>
            <div className={`${className} flex flex-col p-2 gap-1`}>
                <Typography className={`font-bold ${textClass}`} size={"xl"}  >
                    {title}
                </Typography>           
               <Typography className={`${textClass}`}>
                    {children}
                </Typography>
            </div>
        </Box>
    )
}

export default TextBlock;