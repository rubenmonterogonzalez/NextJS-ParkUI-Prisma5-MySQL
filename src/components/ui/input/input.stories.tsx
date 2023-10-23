import React from "react";
import type { Story } from "@ladle/react";
import { Stack } from '~/styled-system/jsx'
import { Input, type InputProps } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export const input: Story = (props: InputProps) => {
  return (
    <Stack gap="1.5" width="2xs">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Your Name" {...props} />
    </Stack>
  )
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Input"
};