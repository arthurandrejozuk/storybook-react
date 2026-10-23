import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState, Fragment } from "react";
import { dropdownStyles } from "./Dropdown.styles";

export type DropdownProps = {
    list: string[];
} 



// Componente Dropdown 
const Dropdown = ({ list, ...rest }: DropdownProps) => {
  // useState que irá selecionar o item da lista do Dropdown
  const [selectedItem, setSelectedItem] = useState<string | null>(list[0] ?? null);

  // Query permitirá buscar ou filtrar itens com a pesquisa
  const [query, setQuery] = useState('')

  // itens filtrados da pesquisa
  const filteredItem =
    query === ''
      ? list
      : list.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase())
        })

  return (
    // Dropdown do HeadlessUI
    <Combobox value={selectedItem} onChange={setSelectedItem} {...rest}>
      {/* Possui um estilo separado, para ajudar com a visibilidade e tornar o código ajustável sem quebra-lo */}
      <div className={dropdownStyles.container}>
        <div className={dropdownStyles.containerMenu}>
          {/* Componente de input que mostra o valor selecionado ou o valor pesquisado */}
          <ComboboxInput
            className={dropdownStyles.input}
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
          />
          {/* Botão que abre o dropdown */}
          <ComboboxButton className={dropdownStyles.button}>
            <ChevronDownIcon
              className="h-5 w-5 text-primary"
              aria-hidden="true"
            />
          </ComboboxButton>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          {/* Opções do dropdown */}
          <ComboboxOptions className={dropdownStyles.optionsContainer}>
            {filteredItem.length === 0 && query !== "" ? (
              <div className={dropdownStyles.noResult}>Nenhum selecionado.</div>
            ) : (
              filteredItem.map((item) => (
                <ComboboxOption
                  className={({ active }) =>
                    `${dropdownStyles.option} ${
                      active ? "bg-dark text-gray-primary" : "text-gray-900"
                    }`
                  }
                  key={item}
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium text-primary" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                    </>
                  )}
                </ComboboxOption>
              ))
            )}
          </ComboboxOptions>
        </Transition>
      </div>
    </Combobox>
  )
}
export default Dropdown;