import {  StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

export default {
    title: 'Typography/Text Input',
    component: TextInput,

    args: {},
    decorators: [
        (Story) => {
            return (
               <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    <Text size={"sm"}>E-mail address</Text>
                    {Story()}
               </Box> 
            )
        }
    ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type your e-mail'
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'call.com/',
        placeholder: 'your-username',
    }
}