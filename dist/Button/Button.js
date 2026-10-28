"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function getVariant(variant, disabled) {
    switch (variant) {
        case 'primary':
            return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white';
        case 'secondary':
            return disabled ? 'bg-disabled text-disabled' : 'bg-quaternary text-primary';
        case 'tertiary':
        default:
            return disabled ? 'text-disabled' : 'text-primary';
    }
}
const Button = ({ variant = 'primary', children, className, disabled, ...rest }) => {
    return (0, jsx_runtime_1.jsx)("button", { className: `rounded-md px-6 py-2 ${getVariant(variant, disabled)} ${className}`, disabled: disabled, ...rest, children: children });
};
exports.default = Button;
