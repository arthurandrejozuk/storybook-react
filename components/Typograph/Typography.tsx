import { cva, type VariantProps } from "class-variance-authority";

// Criando um CVA     // Permite colocar informações padrões
const textVariants = cva("text-gray-primary text-sm font-normal", {
  // variants são opções do componente
  variants: {
    variant: {
      primary: "text-gray-primary",
      secondary: "text-gray-secondary",
      tertiary: "text-gray-tertiary",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      xl: "text-xl",
      title1: "text-txl",
      title2: "text-tlg",
      title3: "text-tmd",
    },
    // opções padrões das variantes
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
});
// type de typography, é um VariantProps de textVariants, expandindo para um children e um element
export type TypographyProps = VariantProps<typeof textVariants> & {
    children?: React.ReactNode
    element?: keyof JSX.IntrinsicElements
} & JSX.IntrinsicElements["p"];

// sendo o children a informação e o element o componente
const Typography = ({ children, element = "p", className, ...rest}: TypographyProps) => {
    const Element = element as any;
  return (
    <Element
        // rest possuira as informações das variantes
            className={`${textVariants(rest)} ${className}`}
            {...rest} >{children}
        </Element>
    )
}

export default Typography;