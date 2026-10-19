import { cva } from "class-variance-authority";
import classNames from "classnames";
import { SwitchProps } from "./Switch";
// Utiliza os mesmos props do Switch
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ variant, enabled, disabled }: SwitchProps) => {
    // Criando um CVA e inserindo um classNames para variações de CSS
    const containerVariant = cva(
        classNames(
            "outline-none relative inline-flex h-6 w-16 items-center rounded-full disabled:bg-disabled",
            { "pointer-events-none": disabled }
        ),
        {
            // Criando variantes
            variants: {
                variant: {
                    // primeira variante possuirá um estilo bg-primary quando enabled == true, sendo igual quando false, porém com um estilo a mais
                    common: classNames(
                        { "bg-primary": enabled },
                        { "bg-primary hover:bg-primaryHover": !enabled }
                    ),
                    // parecido com a primeira variante, apenas mudando bg quando true ou false
                    contract: classNames(
                        { "bg-success": enabled },
                        { "bg-error": !enabled }
                    ),
                },
            },
            // inserindo estilo padrão
            defaultVariants: {
                variant: "common",
            },
        }
    );
    // Classe container criada acima, possuirá as variações e os estilos gerais
    const containerClasses = containerVariant({ variant });


    // Criando os estilos do switch
    const switchClasses = classNames(
        "inline-block bg-white h-5 w-5 rounded-full transform transition-transform duration-200 ease-in-out",
        enabled ? "translate-x-[2.1rem]" : "translate-x-1"
    );

    // Criando classes de Icones
    const iconClasses = classNames(
        "aria-disabled: text-font-disabled",
        // Estilo text-success quando enabled for true e disabled false
        { "text-success": enabled && !disabled },
        // Estilo text-error quando enabled for false e disabled false
        { "text-error": !enabled && !disabled },
        // Estilo text-disabled quando disabled for true
        { "text-disabled": disabled }
    );

    // retornando as classNames 
    return {
        Icon: iconClasses,
        Switch: switchClasses,
        Container: containerClasses,
    };
};