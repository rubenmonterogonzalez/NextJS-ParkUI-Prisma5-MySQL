import React from "react";
import type { Story } from "@ladle/react";
import {
    Switch,
    SwitchControl,
    SwitchLabel,
    SwitchThumb,
    type SwitchProps,
  } from '~/components/switch'
  
  export const switcher: Story = (props: SwitchProps) => (
    <Switch defaultChecked {...props}>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel>Label</SwitchLabel>
    </Switch>
  )
  

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Switch"
};