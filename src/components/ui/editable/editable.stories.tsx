import React from "react";
import type { Story } from "@ladle/react";
import { Button } from '~/components/ui/button'
import {
  Editable,
  EditableArea,
  EditableCancelTrigger,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditableLabel,
  EditablePreview,
  EditableSubmitTrigger,
  type EditableProps,
} from '~/components/ui/editable'
import { Label } from '~/components/ui/label'

export const editable: Story = (props: EditableProps) => {
  return (
    <Editable
      placeholder="Your favorite Framework"
      defaultValue="Double click to edit"
      activationMode="dblclick"
      {...props}
    >
      {(state) => (
        <>
          <EditableLabel asChild>
            <Label>Framework</Label>
          </EditableLabel>
          <EditableArea>
            <EditableInput />
            <EditablePreview />
          </EditableArea>
          <EditableControl>
            {state.isEditing ? (
              <>
                <EditableSubmitTrigger asChild>
                  <Button variant="link">Save</Button>
                </EditableSubmitTrigger>
                <EditableCancelTrigger asChild>
                  <Button variant="link">Cancel</Button>
                </EditableCancelTrigger>
              </>
            ) : (
              <EditableEditTrigger asChild>
                <Button variant="link">Edit</Button>
              </EditableEditTrigger>
            )}
          </EditableControl>
        </>
      )}
    </Editable>
  )
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Editable"
};