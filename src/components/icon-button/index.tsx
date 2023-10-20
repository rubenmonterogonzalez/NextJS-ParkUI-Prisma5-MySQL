import { Button, type ButtonProps } from '~/components/button'

export type IconButtonProps = ButtonProps & { 'aria-label': string }

export const IconButton = (props: IconButtonProps) => {
  return <Button px="0" {...props} />
}