import {  StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from "@ignite-ui/react"

export default {
    title: 'Data display/Avatar',
    component: Avatar,

    args: {
        src: 'https://github.com/felipeslopes2010.png',
        alt: 'Felipe Kimura'
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            }
        }
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
}