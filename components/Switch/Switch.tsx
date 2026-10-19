import { Switch as SwitchButton, SwitchProps as SwitchButtonProps } from '@headlessui/react'
import classNames from 'classnames';
import { useState } from 'react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import useStyle from "./Switch.style";

// props do Switch
export type SwitchProps = {
// Padrão de ativação do switch
  defaultEnable?: boolean;
// Variants do Switch que mudarão o estilo
  variant?: "common" | "contract";
// Desativará o Switch
    disabled?: boolean;
// Mudará o valor de enabled
  onChange?: (enabled: boolean) => void;
} & SwitchButtonProps<any>;



const Switch = ({variant ="common", defaultEnable = true, disabled, onChange, ...rest}:SwitchProps) => {
    const [enabled, setEnabled] = useState(defaultEnable);
    // alteração de alguns valores
    const toggle = () => {
        // Cria o novo valor para enabled
        const newState = !enabled
        // Insere no useState
        setEnabled(newState);
        // e no onChange
        onChange?.(newState);
    }
    // um context dos estilos, separando a organização dos estilos do componente em si
    const style = useStyle({variant, enabled, disabled})
  return (
    <SwitchButton
      checked={enabled}
      onChange={toggle}
      disabled={disabled}
      className={style.Container}
      {...rest}
    >
      <span className="sr-only">switch toggle</span>
      {variant === "common" && <span className={style.Switch} />}
      {variant === "contract" && (
        <span className={style.Switch}>
          {enabled && (
            <CheckIcon className={style.Icon} aria-disabled={disabled} />
          )}
          {enabled || (
            <XMarkIcon className={style.Icon} aria-disabled={disabled} />
          )}
        </span>
      )}
    </SwitchButton>
  )
}

export default Switch;