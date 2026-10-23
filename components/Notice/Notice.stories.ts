

import Notice, { NoticeProps } from "./Notice";

import { StoryObj, Meta } from '@storybook/react';



const meta: Meta<NoticeProps> = {
    title: "Design System/Atoms/Notice",
    component: Notice,
    argTypes: {
        type: { type: "string" },
        children: { type: "string" },
    }
}

export default meta;

export const Secondary: StoryObj<NoticeProps> = {
    args: {
        type: "secondary"
    }
}
export const Alert: StoryObj<NoticeProps> = {
    args: {
        type: "alert"
    }
}
export const Error: StoryObj<NoticeProps> = {
    args: {
        type: "error"
    }
}
export const Success: StoryObj<NoticeProps> = {
    args: {
        type: "success"
    }
}