import Divider, { DividerProps } from './Divider';

import { StoryObj, Meta } from '@storybook/react';



const meta: Meta<DividerProps> = {
    title: "Atoms/Divider",
    component: Divider,
    argTypes: {
        className: {
            type: "string"
        }
    }
}

export default meta;

export const Primary: StoryObj<DividerProps> = {
    args: {

    }
}
export const Default: StoryObj<DividerProps> = {
    args: {

    }
}
export const DivisorWithProps: StoryObj<DividerProps> = {
    args: {
        children: "Olá mundo!"
    }
}