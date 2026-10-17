

import Avatar, { AvatarProps } from "./Avatar";

import { StoryObj, Meta } from '@storybook/react';



const meta: Meta<AvatarProps> = {
    title: "Atoms/Avatar",
    component: Avatar,
    argTypes: {
        className: {
            type: "string"
        },
        size: {
            type: "string"
        }
    }
}

export default meta;

export const Primary: StoryObj<AvatarProps> = {
    args: {

    }
}