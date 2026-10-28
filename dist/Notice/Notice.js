"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const Box_1 = __importDefault(require("../Box/Box"));
const outline_1 = require("@heroicons/react/24/outline");
const Typography_1 = __importDefault(require("../Typography/Typography"));
const Button_1 = __importDefault(require("../Button/Button"));
// Criamos um padrão para cada alerta
const noticeStyles = {
    secondary: {
        icon: "hidden",
        text: "text-gray-500",
        button: "bg-green-500",
        moreAction: true,
    },
    alert: {
        icon: "text-yellow-500",
        text: "text-yellow-700",
        button: "bg-yellow-500",
        moreAction: false,
    },
    success: {
        icon: "text-green-600",
        text: "text-green-700",
        button: "bg-green-500",
        moreAction: false,
    },
    error: {
        icon: "text-red-500",
        text: "text-red-700",
        button: "bg-red-500",
        moreAction: true,
    },
};
const Notice = ({ children = "Amet minim mollit non deserunt ullamco est", type = "secondary", className, ...rest }) => {
    const styles = noticeStyles[type] ?? noticeStyles.secondary;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { rounded: true, className: (0, classnames_1.default)("flex flex-row items-center justify-between gap-2 p-3", className), filledBackground: true, type: type, ...rest, children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { rounded: true, className: (0, classnames_1.default)("flex flex-row items-center justify-between gap-5 p-3", className), filledBackground: true, type: type, children: [(0, jsx_runtime_1.jsx)(outline_1.ExclamationCircleIcon, { className: (0, classnames_1.default)("h-7 w-7 shrink-0", styles.icon) }), (0, jsx_runtime_1.jsx)(Typography_1.default, { className: "text-[20px]", children: children }), (0, jsx_runtime_1.jsx)(Button_1.default, { type: "button", "aria-label": "Fechar aviso", className: (0, classnames_1.default)("ml-auto shrink-0 bg-", styles.button), children: "Action" }), styles.moreAction ?
                        (0, jsx_runtime_1.jsx)(Button_1.default, { type: "button", "aria-label": "", className: (0, classnames_1.default)("ml-auto shrink-0 bg-gray-400"), children: "Action" }) :
                        (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})] }), (0, jsx_runtime_1.jsx)(outline_1.XMarkIcon, { className: "relative h-6 w-6 text-gray-700" })] }));
};
exports.default = Notice;
