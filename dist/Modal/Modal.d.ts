/// <reference types="react" />
import { DialogProps } from "@headlessui/react";
export type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    title: string;
} & DialogProps<any> & React.HTMLAttributes<HTMLDivElement>;
declare const Modal: ({ children, isOpen, onClose, title }: ModalProps) => import("react").JSX.Element;
export default Modal;
