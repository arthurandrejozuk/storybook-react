"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
// type padronizará o background e a cor do texto no componente Box
const boxClassMap = {
    primary: "bg-primary",
    secondary: "bg-gray-100",
    dark: "bg-dark",
    alert: "bg-yellow-100 text-yellow-100",
    success: "bg-green-100 text-green-100",
    error: "bg-red-200 text-error-100",
};
const Box = ({ children, rounded = false, filledBackground = false, border = false, type = "primary", className, ...rest }) => {
    const classes = (0, classnames_1.default)({
        // Considera os booleanos da classe acima, retornando o valor entre aspas
        "rounded-md": rounded,
        "border border-gray-100": border,
        "bg-dark": filledBackground,
        [boxClassMap[type]]: type
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(classes, className), ...rest, children: children }));
};
exports.default = Box;
