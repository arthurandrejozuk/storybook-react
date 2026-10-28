"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const InputOrTextArea = (props) => {
    if (props.multiline) {
        return (0, jsx_runtime_1.jsx)("textarea", { ...props });
    }
    return (0, jsx_runtime_1.jsx)("input", { ...props });
};
const Input = ({ label, className, ...rest }) => {
    return (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [label && (0, jsx_runtime_1.jsx)("label", { className: "absolute pt-1 pl-3 text-xs", children: label }), (0, jsx_runtime_1.jsx)(InputOrTextArea, { className: `
        bg-dark text-gray-primary rounded-md p-3
        disabled:bg-disabled disabled:border-2 disabled:border-disabled
        ${label && 'pt-5'}
        ${className}
      `, ...rest })] });
};
exports.default = Input;
