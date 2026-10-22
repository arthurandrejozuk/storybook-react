import { Dialog, DialogPanel, DialogTitle, DialogProps, Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

export type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    title: string;
    
  // Criando componente baseado no HeadlessUi Dialog
} & DialogProps<any> & React.HTMLAttributes<HTMLDivElement>;

const Modal = ({ children, isOpen, onClose, title }: ModalProps) => {

  return (
      //componente Transition permite criar uma animação css
    <Transition appear show={isOpen} as={Fragment}>
      {/* Componente que controla o modal */}
      <Dialog  open={isOpen} as="div" className="relative z-10" onClose={onClose}>
        <TransitionChild
          // Cria um componente transition como um fragmento
          // Adicionando uma animação
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition show={isOpen}
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="flex flex-col gap-5 w-full max-w-md transform overflow-hidden rounded-lg bg-white p-7 transition-all">
                <div className="flex items-center justify-between">
                  <DialogTitle as="h3" className="text-lg font-semibold">
                    {title}
                  </DialogTitle>
                  <button onClick={onClose}>
                    <XMarkIcon className="w-5 h-5 text-disabled" />
                  </button>
                </div>
                {children}
              </DialogPanel>
            </Transition>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;

