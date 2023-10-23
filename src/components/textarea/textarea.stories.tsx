import React from "react";
import type { Story } from "@ladle/react";
import { Stack } from '~/styled-system/jsx'
import { Label } from '~/components/label'
import { Textarea, type TextareaProps } from '~/components/textarea'

export const textarea: Story = (props: TextareaProps) => {
  return (
    <Stack gap="1.5" width="2xs">
      <Label htmlFor="description">Description</Label>
      <Textarea id="description" rows={4} {...props} />
    </Stack>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Textarea"
};