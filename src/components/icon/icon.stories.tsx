import React from "react";
import type { Story } from "@ladle/react";
import { DiamondIcon } from 'lucide-react'
import { Icon } from '~/components/icon'

export const icon: Story = (props) => {
  return (
    <Icon {...props}>
      <DiamondIcon />
    </Icon>
  )
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Icon"
};