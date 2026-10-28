"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = __importDefault(require("../Box/Box"));
const Typography_1 = __importDefault(require("../Typography/Typography"));
const TextBlock = ({ title, type = "primary", children, className, ...rest }) => {
    // Verifica o type e então muda a cor do texto
    const textClass = type === "primary" ? "text-white" : "text-gray-primary";
    return ((0, jsx_runtime_1.jsx)(Box_1.default, { className: "flex gap-1 p-5", rounded: true, ...rest, type: type, children: (0, jsx_runtime_1.jsxs)("div", { className: `${className} flex flex-col p-2 gap-1`, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { className: `font-bold ${textClass}`, size: "xl", children: title }), (0, jsx_runtime_1.jsx)(Typography_1.default, { className: `${textClass}`, children: children })] }) }));
};
exports.default = TextBlock;
