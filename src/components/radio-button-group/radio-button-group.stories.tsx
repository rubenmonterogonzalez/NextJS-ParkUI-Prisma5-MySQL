import React from "react";
import type { Story } from "@ladle/react";
import {
    Radio,
    RadioButtonGroup,
    RadioControl,
    RadioLabel,
    type RadioGroupProps,
  } from '~/components/radio-button-group'
  
  export const radioButtonGroup: Story = (props: RadioGroupProps) => {
    const options = [{ value: 'S' }, { value: 'M' }, { value: 'L', disabled: true }, { value: 'XL' }]
    return (
      <RadioButtonGroup defaultValue="M" {...props}>
        {options.map((option, id) => (
          <Radio key={id} value={option.value} disabled={option.disabled} px="0">
            <RadioControl />
            <RadioLabel>{option.value}</RadioLabel>
          </Radio>
        ))}
      </RadioButtonGroup>
    )
  }
  

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Radio-Button-Group"
};