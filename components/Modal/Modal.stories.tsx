
import React, { useState } from "react";
import Modal, { ModalProps } from "./Modal";

import { StoryObj, Meta } from "@storybook/react";
import Button from "../Button/Button";
import Typography from "../Typograph/Typography";


// Criando um componente Modal para representar no storybook
const ModalStoryInfo = (args: ModalProps) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <>
      <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Typography>
          Today, every company I talk to wants to implement a design system from
          scratch. Unfortunately, the details of a design system are not
          explored, so often they are not used to the maximum to create a useful
          user experience.
        </Typography>
        <Typography>
          New designers can take a look at any of the design patterns listed
          below to learn best practices and make informed design decisions on
          their projects.
        </Typography>
        <div className=" flex flex-col gap-3">
          <Button onClick={() => setIsOpen(false)}>Primary Button</Button>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Secondary Button
          </Button>
        </div>
      </Modal>
    </>
    );
};

//
const meta: Meta<ModalProps> = {
    title: "Design System/Atoms/Modal",
    component: Modal,
  decorators: [
    // decorators permitem cercar o componente Story com outra tag
        (Story) => (
            <div style={{margin: "3em"}}>
                <Story/>
            </div>
        )
    ],
}


export default meta;

type Story = StoryObj<typeof Modal>;

// Componente primário
export const Primary: Story= {
    args: {
        isOpen: false,
        title: "Modal info"
  },
  // Renderiza o componente no Storybook
    render: (args: ModalProps) => {
        return <ModalStoryInfo {...args} />
    }
}