

import { StoryObj, Meta } from '@storybook/react';

import Typography, { type TypographyProps } from './Typography';

const meta: Meta<TypographyProps> = {
    title: "Design System/Atoms/Typography",
    component: Typography,
    argTypes: {
        className: {
            type: "string"
        }
    }
}

export default meta;

export const Primary: StoryObj<TypographyProps> = {
    args: {
        children: "Args"
    }
}
export const TextHeading1: StoryObj<TypographyProps> = {
    args: {
        children: "Texto",
        element: "h1",
        size: "title1",
        className: "font-extrabold"
    }
}
export const TextHeading2: StoryObj<TypographyProps> = {
    args: {
        children: "Texto",
        element: "h2",
        size: "title2",
        className: "font-extrabold"
    }
}
export const TextHeading3: StoryObj<TypographyProps> = {
    args: {
        children: "Texto",
        element: "h3",
        size: "title3",
        className: "font-extrabold"
    }
}
export const TextParagraph: StoryObj<TypographyProps> = {
    args: {
        children: "Texto",
        element: "p",
        size: "md",
        className: "text-primary"
    }
}