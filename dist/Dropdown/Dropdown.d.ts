/// <reference types="react" />
export type DropdownProps = {
    list: string[];
};
declare const Dropdown: ({ list, ...rest }: DropdownProps) => import("react").JSX.Element;
export default Dropdown;
