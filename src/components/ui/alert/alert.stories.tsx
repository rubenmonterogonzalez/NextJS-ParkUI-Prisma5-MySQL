import React from "react";
import type { Story } from "@ladle/react";
import { InfoIcon } from 'lucide-react'
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  type AlertProps,
} from '~/components/ui/alert'

export const alert: Story = (props: AlertProps) => {
  return (
    <Alert {...props}>
      <AlertIcon asChild>
        <InfoIcon />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Browser Update available</AlertTitle>
        <AlertDescription>For the best experience, please update your browser.</AlertDescription>
      </AlertContent>
    </Alert>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Alert"
};