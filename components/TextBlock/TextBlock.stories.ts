
import { Meta, StoryObj } from "@storybook/react";

import TextBlock, { type TextBlockProps } from "./TextBlock";

const meta: Meta<TextBlockProps> = {
    title: "Design System/Molecules/TextBlock",
    component: TextBlock,
    argTypes: {
        type: {
            type: "string",
        },
        title: {
            type: "string",
        },
        children: {
            type: "string",
        },
    },
};

export default meta;

export const TextBlockPrimary: StoryObj<TextBlockProps> = {
    args: {
        title: "Ser gamer",
        children: "Olá, eu sou gamer",
        type: "primary"
    }
}

export const TextBlockSecondary: StoryObj<TextBlockProps> = {
    args: {
        title: "Ser gamer",
        children: "Olá, eu sou gamer",
        type: "secondary"
    }
}

export const TextBlockDark: StoryObj<TextBlockProps> = {
    args: {
        title: "Ser gamer",
        children: "Olá, eu sou gamer",
        type: "dark"
    }
}

