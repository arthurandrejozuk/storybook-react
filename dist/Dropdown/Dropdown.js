"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@headlessui/react");
const outline_1 = require("@heroicons/react/24/outline");
const react_2 = require("react");
const Dropdown_styles_1 = require("./Dropdown.styles");
// Componente Dropdown 
const Dropdown = ({ list, ...rest }) => {
    // useState que irá selecionar o item da lista do Dropdown
    const [selectedItem, setSelectedItem] = (0, react_2.useState)(list[0] ?? null);
    // Query permitirá buscar ou filtrar itens com a pesquisa
    const [query, setQuery] = (0, react_2.useState)('');
    // itens filtrados da pesquisa
    const filteredItem = query === ''
        ? list
        : list.filter((item) => {
            return item.toLowerCase().includes(query.toLowerCase());
        });
    return (
    // Dropdown do HeadlessUI
    (0, jsx_runtime_1.jsx)(react_1.Combobox, { value: selectedItem, onChange: setSelectedItem, ...rest, children: (0, jsx_runtime_1.jsxs)("div", { className: Dropdown_styles_1.dropdownStyles.container, children: [(0, jsx_runtime_1.jsxs)("div", { className: Dropdown_styles_1.dropdownStyles.containerMenu, children: [(0, jsx_runtime_1.jsx)(react_1.ComboboxInput, { className: Dropdown_styles_1.dropdownStyles.input, displayValue: (item) => item, onChange: (event) => setQuery(event.target.value) }), (0, jsx_runtime_1.jsx)(react_1.ComboboxButton, { className: Dropdown_styles_1.dropdownStyles.button, children: (0, jsx_runtime_1.jsx)(outline_1.ChevronDownIcon, { className: "h-5 w-5 text-primary", "aria-hidden": "true" }) })] }), (0, jsx_runtime_1.jsx)(react_1.Transition, { as: react_2.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", afterLeave: () => setQuery(""), children: (0, jsx_runtime_1.jsx)(react_1.ComboboxOptions, { className: Dropdown_styles_1.dropdownStyles.optionsContainer, children: filteredItem.length === 0 && query !== "" ? ((0, jsx_runtime_1.jsx)("div", { className: Dropdown_styles_1.dropdownStyles.noResult, children: "Nenhum selecionado." })) : (filteredItem.map((item) => ((0, jsx_runtime_1.jsx)(react_1.ComboboxOption, { className: ({ active }) => `${Dropdown_styles_1.dropdownStyles.option} ${active ? "bg-dark text-gray-primary" : "text-gray-900"}`, value: item, children: ({ selected }) => ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("span", { className: `block truncate ${selected ? "font-medium text-primary" : "font-normal"}`, children: item }) })) }, item)))) }) })] }) }));
};
exports.default = Dropdown;
