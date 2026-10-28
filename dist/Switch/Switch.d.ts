/// <reference types="react" />
import { SwitchProps as SwitchButtonProps } from '@headlessui/react';
export type SwitchProps = {
    defaultEnable?: boolean;
    variant?: "common" | "contract";
    disabled?: boolean;
    onChange?: (enabled: boolean) => void;
} & SwitchButtonProps<any>;
declare const Switch: ({ variant, defaultEnable, disabled, onChange, ...rest }: SwitchProps) => import("react").JSX.Element;
export default Switch;
