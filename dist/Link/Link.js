"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Link = ({ children, href, disabled, className, ...rest }) => {
    return (0, jsx_runtime_1.jsx)("a", { href: disabled ? undefined : href, className: `text-primary aria-disabled:text-disabled ${className}`, "aria-disabled": disabled, ...rest, children: children });
};
exports.default = Link;
