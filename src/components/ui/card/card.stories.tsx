import React from "react";
import type { Story } from "@ladle/react";
import { Stack } from '~/styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Card, type CardProps } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export const card: Story = (props: CardProps) => {
  return (
    <Card.Root width="sm" {...props}>
      <Card.Header>
        <Card.Title>Team Members</Card.Title>
        <Card.Description>Add new members to your organisation.</Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap="4">
          <Stack gap="1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name" />
          </Stack>
          <Stack gap="1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" />
          </Stack>
        </Stack>
      </Card.Body>
      <Card.Footer gap="3">
        <Button variant="outline">Cancel</Button>
        <Button>Invite</Button>
      </Card.Footer>
    </Card.Root>
  )
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Card"
};