import React from "react";
import type { Story } from "@ladle/react";
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
  type NumberInputProps,
} from '~/components/number-input'

export const numberInput: Story = (props: NumberInputProps) => {
  return (
    <NumberInput min={0} max={5} defaultValue="3" width="2xs" {...props}>
      <NumberInputLabel>Quantity</NumberInputLabel>
      <NumberInputControl>
        <NumberInputInput />
        <NumberInputIncrementTrigger>
          <ChevronUpIcon />
        </NumberInputIncrementTrigger>
        <NumberInputDecrementTrigger>
          <ChevronDownIcon />
        </NumberInputDecrementTrigger>
      </NumberInputControl>
    </NumberInput>
  )
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Number-Input"
};