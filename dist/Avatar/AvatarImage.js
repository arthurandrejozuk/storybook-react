"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AvatarImage = ({ src = "", alt = "" }) => {
    return ((0, jsx_runtime_1.jsx)("img", { src: src, alt: alt, className: "absolute w-1/2 h-1/2 rounded-full" }));
};
exports.default = AvatarImage;
