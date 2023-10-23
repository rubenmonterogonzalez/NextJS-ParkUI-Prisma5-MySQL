import React from "react";
import type { Story } from "@ladle/react";
import { ArrowRightIcon } from 'lucide-react'
import { Button, type ButtonProps } from '~/components/ui/button'

export const button: Story = (props: ButtonProps) => {
  return (
    <Button {...props}>
      Button
      <ArrowRightIcon />
    </Button>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Button"
};