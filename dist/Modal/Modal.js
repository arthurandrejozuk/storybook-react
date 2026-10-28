"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@headlessui/react");
const outline_1 = require("@heroicons/react/24/outline");
const react_2 = require("react");
const Modal = ({ children, isOpen, onClose, title }) => {
    return (
    //componente Transition permite criar uma animação css
    (0, jsx_runtime_1.jsx)(react_1.Transition, { appear: true, show: isOpen, as: react_2.Fragment, children: (0, jsx_runtime_1.jsxs)(react_1.Dialog, { open: isOpen, as: "div", className: "relative z-10", onClose: onClose, children: [(0, jsx_runtime_1.jsx)(react_1.TransitionChild
                // Cria um componente transition como um fragmento
                // Adicionando uma animação
                , { 
                    // Cria um componente transition como um fragmento
                    // Adicionando uma animação
                    as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 bg-black bg-opacity-25" }) }), (0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 overflow-y-auto", children: (0, jsx_runtime_1.jsx)("div", { className: "flex min-h-full items-center justify-center p-4", children: (0, jsx_runtime_1.jsx)(react_1.Transition, { show: isOpen, as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95", children: (0, jsx_runtime_1.jsxs)(react_1.DialogPanel, { className: "flex flex-col gap-5 w-full max-w-md transform overflow-hidden rounded-lg bg-white p-7 transition-all", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)(react_1.DialogTitle, { as: "h3", className: "text-lg font-semibold", children: title }), (0, jsx_runtime_1.jsx)("button", { onClick: onClose, children: (0, jsx_runtime_1.jsx)(outline_1.XMarkIcon, { className: "w-5 h-5 text-disabled" }) })] }), children] }) }) }) })] }) }));
};
exports.default = Modal;
