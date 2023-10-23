import React from "react";
import type { Story } from "@ladle/react";
import { Avatar, AvatarFallback, AvatarImage, type AvatarProps } from '~/components/ui/avatar'

export const avatar: Story = (props: AvatarProps) => {
    return (
        <Avatar {...props}>
            <AvatarFallback>PA</AvatarFallback>
            <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
        </Avatar>
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Avatar"
};
