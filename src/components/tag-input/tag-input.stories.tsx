import React from "react";
import type { Story } from "@ladle/react";
import { XIcon } from 'lucide-react'
import { Fragment } from 'react'
import { IconButton } from '~/components/icon-button'
import { Label } from '~/components/label'
import {
  Tag,
  TagDeleteTrigger,
  TagInput,
  TagsInput,
  TagsInputControl,
  TagsInputInput,
  TagsInputLabel,
  type TagsInputProps,
} from '~/components/tag-input'

export const tagInput: Story = (props: TagsInputProps) => {
  return (
    <TagsInput defaultValue={['React', 'Solid', 'Vue']} maxW="xs" {...props}>
      {({ value }) => (
        <>
          <TagsInputLabel asChild>
            <Label>Framework</Label>
          </TagsInputLabel>
          <TagsInputControl>
            {(value ?? []).map((value, index) => (
              <Fragment key={index}>
                <Tag index={index} value={value}>
                  {value}
                  <TagDeleteTrigger index={index} value={value} asChild>
                    <IconButton aria-label="Delete tag" variant="link" size="xs">
                      <XIcon />
                    </IconButton>
                  </TagDeleteTrigger>
                </Tag>
                <TagInput index={index} value={value} />
              </Fragment>
            ))}
            <TagsInputInput placeholder="Add tag" />
          </TagsInputControl>
        </>
      )}
    </TagsInput>
  )
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Tag-Input"
};