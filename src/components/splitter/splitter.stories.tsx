import React from "react";
import type { Story } from "@ladle/react";
import {
  Splitter,
  SplitterPanel,
  SplitterResizeTrigger,
  type SplitterProps,
} from '~/components/splitter'

export const splitter: Story = (props: SplitterProps) => {
  return (
    <>
      <Splitter
        size={[
          { id: 'a', size: 50 },
          { id: 'b', size: 50 },
        ]}
        {...props}
      >
        <SplitterPanel id="a">A</SplitterPanel>
        <SplitterResizeTrigger id="a:b" />
        <SplitterPanel id="b">B</SplitterPanel>
      </Splitter>
    </>
  )
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Splitter"
};