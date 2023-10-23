import React from "react";
import type { Story } from "@ladle/react";
import { Portal } from '@ark-ui/react'
import { XIcon } from 'lucide-react'
import { Box, Stack } from '~/styled-system/jsx'
import { Button } from '~/components/button'
import { IconButton } from '~/components/icon-button'
import {
  Toast,
  ToastCloseTrigger,
  ToastDescription,
  ToastGroup,
  ToastPlacements,
  ToastProvider,
  ToastTitle,
  useToast,
} from '~/components/toast'

export const toast: Story = () => {
  return (
    <ToastProvider max={1}>
      <Portal>
        <ToastPlacements>
          {(placements) =>
            placements.map((placement) => (
              <ToastGroup key={placement} placement={placement}>
                {(toasts) =>
                  toasts.map((toast) => (
                    <Toast key={toast.id} toast={toast}>
                      <Stack gap="4">
                        <Stack gap="1">
                          <ToastTitle />
                          <ToastDescription />
                        </Stack>
                        <Stack direction="row" gap="3">
                          <ToastCloseTrigger asChild>
                            <Button variant="link" size="sm">
                              Dismiss
                            </Button>
                          </ToastCloseTrigger>
                          <Button variant="link" size="sm">
                            Show
                          </Button>
                        </Stack>
                      </Stack>
                      <Box position="absolute" top="3" right="3">
                        <ToastCloseTrigger asChild>
                          <IconButton size="sm" variant="link" aria-label="Close Toast">
                            <XIcon />
                          </IconButton>
                        </ToastCloseTrigger>
                      </Box>
                    </Toast>
                  ))
                }
              </ToastGroup>
            ))
          }
        </ToastPlacements>
      </Portal>
      <DemoToastWrapper />
    </ToastProvider>
  )
}

const DemoToastWrapper = () => {
  const toast = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.create({
          title: 'Hello',
          description: "I'm a toast",
          placement: 'bottom-end',
          removeDelay: 0,
        })
      }}
    >
      Add toast
    </Button>
  )
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Toast"
};