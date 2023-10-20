import React from "react";
import type { Story } from "@ladle/react";
import {
    Radio,
    RadioControl,
    RadioGroup,
    RadioLabel,
    type RadioGroupProps,
  } from '~/components/radio-group'
  
  export const radioGroup: Story = (props: RadioGroupProps) => {
    const options = [
      { id: 'react', label: 'React' },
      { id: 'solid', label: 'Solid' },
      { id: 'svelte', label: 'Svelte', disabled: true },
      { id: 'vue', label: 'Vue' },
    ]
    return (
      <RadioGroup defaultValue="react" orientation="vertical" {...props}>
        {options.map((option) => (
          <Radio key={option.id} value={option.id} disabled={option.disabled}>
            <RadioControl />
            <RadioLabel>{option.label}</RadioLabel>
          </Radio>
        ))}
      </RadioGroup>
    )
  }
  

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Radio-Group"
};