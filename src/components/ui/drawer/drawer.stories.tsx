import React from "react";
import type { Story } from "@ladle/react";
import { Portal } from '@ark-ui/react'
import { Button } from '~/components/ui/button'
import { Drawer, type DrawerProps } from '~/components/ui/drawer'

export const drawer: Story = (props: DrawerProps) => {
  return (
    <Drawer.Root {...props}>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Container>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Title</Drawer.Title>
              <Drawer.Description>Description</Drawer.Description>
            </Drawer.Header>
            <Drawer.Body>Content</Drawer.Body>
            <Drawer.Footer gap="3">
              <Button variant="outline">Secondary</Button>
              <Button>Primary</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Container>
      </Portal>
    </Drawer.Root>
  )
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Drawer"
};