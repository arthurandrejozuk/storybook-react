import { type VariantProps } from "class-variance-authority";
import type { JSX } from "react";
declare const textVariants: (props?: ({
    variant?: "primary" | "secondary" | "tertiary" | null | undefined;
    size?: "xs" | "sm" | "md" | "xl" | "title1" | "title2" | "title3" | null | undefined;
    defaultVariants?: "size" | "variant" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type TypographyProps = VariantProps<typeof textVariants> & {
    children?: React.ReactNode;
    element?: keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements["p"];
declare const Typography: ({ children, element, className, ...rest }: TypographyProps) => JSX.Element;
export default Typography;
