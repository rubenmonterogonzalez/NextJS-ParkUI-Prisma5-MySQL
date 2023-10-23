import React from "react";
import type { Story } from "@ladle/react";
import {
    Segment,
    SegmentControl,
    SegmentGroup,
    SegmentGroupIndicator,
    SegmentLabel,
    type SegmentGroupProps,
  } from '~/components/segment-group'
  
  export const segmentGroup: Story = (props: SegmentGroupProps) => {
    const options = [
      { id: 'overview', label: 'Overview' },
      { id: 'customers', label: 'Customers' },
      { id: 'premium', label: 'Premium', disabled: true },
      { id: 'settings', label: 'Settings' },
    ]
    return (
      <SegmentGroup defaultValue="customers" {...props}>
        {options.map((option) => (
          <Segment key={option.id} value={option.id} disabled={option.disabled}>
            <SegmentControl />
            <SegmentLabel>{option.label}</SegmentLabel>
          </Segment>
        ))}
        <SegmentGroupIndicator />
      </SegmentGroup>
    )
  }
  

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Segment-Group"
};