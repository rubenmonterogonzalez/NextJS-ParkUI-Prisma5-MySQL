import React from "react";
import type { Story } from "@ladle/react";
import { Badge, type BadgeProps } from '~/components/badge'

export const badge: Story = (props: BadgeProps) => {
  return <Badge {...props}>Park UI</Badge>
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Badge"
};