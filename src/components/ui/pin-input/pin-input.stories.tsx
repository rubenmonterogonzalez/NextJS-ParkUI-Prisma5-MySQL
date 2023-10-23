import React from "react";
import type { Story } from "@ladle/react";
import { Input } from '~/components/ui/input'
import {
  PinInput,
  PinInputControl,
  PinInputInput,
  PinInputLabel,
  type PinInputProps,
} from '~/components/ui/pin-input'

export const pinInput: Story = (props: PinInputProps) => (
  <PinInput placeholder="0" onComplete={(e) => alert(e.valueAsString)}>
    <PinInputLabel>Enter your pin</PinInputLabel>
    <PinInputControl>
      {[0, 1, 2, 3].map((id, index) => (
        <PinInputInput key={id} index={index} asChild>
          <Input size="lg" width="0" textAlign="center" />
        </PinInputInput>
      ))}
    </PinInputControl>
  </PinInput>
)

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Pin-Input"
};