import { Button, type ButtonProps } from '~/components/ui/button'

export type IconButtonProps = ButtonProps & { 'aria-label': string }

export const IconButton = (props: IconButtonProps) => {
  return <Button px="0" {...props} />
}