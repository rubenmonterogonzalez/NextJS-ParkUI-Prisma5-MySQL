import React from "react";
import type { Story } from "@ladle/react";
import { Label, type LabelProps } from '~/components/ui/label'

export const label: Story = (props: LabelProps) => {
  return <Label {...props}>I`m a label</Label>
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Label"
};