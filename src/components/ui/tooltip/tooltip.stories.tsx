import React from "react";
import type { Story } from "@ladle/react";
import { Portal } from '@ark-ui/react'
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
  type TooltipProps,
} from '~/components/ui/tooltip'

export const tooltip: Story = (props: TooltipProps) => (
  <Tooltip {...props}>
    <TooltipTrigger>Hover Me</TooltipTrigger>
    <Portal>
      <TooltipPositioner>
        <TooltipArrow>
          <TooltipArrowTip />
        </TooltipArrow>
        <TooltipContent>I am a Tooltip!</TooltipContent>
      </TooltipPositioner>
    </Portal>
  </Tooltip>
)


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Tooltip"
};