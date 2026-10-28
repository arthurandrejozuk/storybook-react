"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@headlessui/react");
const react_2 = require("react");
const solid_1 = require("@heroicons/react/24/solid");
const Switch_style_1 = __importDefault(require("./Switch.style"));
const Switch = ({ variant = "common", defaultEnable = true, disabled, onChange, ...rest }) => {
    const [enabled, setEnabled] = (0, react_2.useState)(defaultEnable);
    // alteração de alguns valores
    const toggle = () => {
        // Cria o novo valor para enabled
        const newState = !enabled;
        // Insere no useState
        setEnabled(newState);
        // e no onChange
        onChange?.(newState);
    };
    // um context dos estilos, separando a organização dos estilos do componente em si
    const style = (0, Switch_style_1.default)({ variant, enabled, disabled });
    return ((0, jsx_runtime_1.jsxs)(react_1.Switch, { checked: enabled, onChange: toggle, disabled: disabled, className: style.Container, ...rest, children: [(0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "switch toggle" }), variant === "common" && (0, jsx_runtime_1.jsx)("span", { className: style.Switch }), variant === "contract" && ((0, jsx_runtime_1.jsxs)("span", { className: style.Switch, children: [enabled && ((0, jsx_runtime_1.jsx)(solid_1.CheckIcon, { className: style.Icon, "aria-disabled": disabled })), enabled || ((0, jsx_runtime_1.jsx)(solid_1.XMarkIcon, { className: style.Icon, "aria-disabled": disabled }))] }))] }));
};
exports.default = Switch;
