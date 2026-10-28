"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const colorClassMap = {
    light: "bg-light",
    dark: "bg-dark",
    black: "bg-black"
};
const Divider = ({ width, height = "h-[1px]", children, bgColor = "black", ...rest }) => {
    const colorClass = colorClassMap[bgColor];
    const barClass = (0, classnames_1.default)(children ? "w-1/3" : "w-1/2", height, colorClass);
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(width, "flex items-center justify-center"), children: [(0, jsx_runtime_1.jsx)("div", { className: barClass }), children && (0, jsx_runtime_1.jsx)("div", { className: "px-3", children: children }), (0, jsx_runtime_1.jsx)("div", { className: barClass })] }));
};
exports.default = Divider;
