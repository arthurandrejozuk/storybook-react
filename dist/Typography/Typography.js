"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
// Criando um CVA     // Permite colocar informações padrões
const textVariants = (0, class_variance_authority_1.cva)("text-gray-primary text-sm font-normal", {
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
// sendo o children a informação e o element o componente
const Typography = ({ children, element = "p", className, ...rest }) => {
    const Element = element;
    return ((0, jsx_runtime_1.jsx)(Element
    // rest possuira as informações das variantes
    , { 
        // rest possuira as informações das variantes
        className: `${textVariants(rest)} ${className}`, ...rest, children: children }));
};
exports.default = Typography;
