"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const AvatarImage_1 = __importDefault(require("./AvatarImage"));
const AvatarIcon_1 = __importDefault(require("./AvatarIcon"));
const avatarSizeMap = {
    xs: "w-5 h-5",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-9 h-9",
};
const Avatar = ({ size = "xs", className, src, alt, ...rest }) => {
    const avatarSizeClass = avatarSizeMap[size];
    const avatar = src ? (0, jsx_runtime_1.jsx)(AvatarImage_1.default, { src: src, alt: alt }) : (0, jsx_runtime_1.jsx)(AvatarIcon_1.default, {});
    return ((0, jsx_runtime_1.jsx)("div", { ...rest, className: (0, classnames_1.default)("rounded-full relative bg-slate-100 flex items-center justify-center text-slate-400", avatarSizeClass, className), children: avatar }));
};
exports.default = Avatar;
