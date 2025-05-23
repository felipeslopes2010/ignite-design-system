import {  StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from "@ignite-ui/react"

export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        size: 'md',
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod molestiae saepe, quisquam magni ipsam voluptatibus eaque quo possimus fugit nisi. Molestias beatae nulla at amet esse assumenda ut error alias.',
    },
    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: {
                type: 'inline-radio'
            },
        }
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong',
    }
}