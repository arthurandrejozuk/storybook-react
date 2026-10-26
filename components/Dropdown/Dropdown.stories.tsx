

import { Meta, StoryObj } from "@storybook/react"
import Dropdown from "./Dropdown"
 

const meta: Meta<typeof Dropdown> = {
    title: "Design System/Molecules/Dropdown",
    component: Dropdown,
    decorators: [
    // decorator para adicionar Paddings 
        (Story) => (
            <div style= {{ paddingBottom: "15em", paddingTop: "3em" }} >
                <Story />
            </div>
        ),
    ]
}

export default meta;


// Tipando o dropdown em um StoryObj
type Story = StoryObj<typeof Dropdown>;

// Usando o tipo 
export const Primary: Story = {
    args: {
        list: []
    }
}


export const Secondary: Story = {
    args: {
        list: [
            "Durward Reynolds",
            "Lars Jansen",
            "Kenton Towne",
            "Therese Wunsch",
            "Benedict Kessler"
        ]
    }
}