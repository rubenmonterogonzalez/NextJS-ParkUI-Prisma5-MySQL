import React from "react";
import type { Story } from "@ladle/react";
import {
    RangeSlider,
    RangeSliderControl,
    RangeSliderMarker,
    RangeSliderMarkerGroup,
    RangeSliderRange,
    RangeSliderThumb,
    RangeSliderTrack,
    type RangeSliderProps,
  } from '~/components/ui/range-slider'
  
  export const rangeSlider: Story = (props: RangeSliderProps) => (
    <RangeSlider min={0} max={100} defaultValue={[33, 66]} {...props}>
      <RangeSliderControl>
        <RangeSliderTrack>
          <RangeSliderRange />
        </RangeSliderTrack>
        {[0, 1].map((i) => (
          <RangeSliderThumb key={i} index={i} />
        ))}
      </RangeSliderControl>
      <RangeSliderMarkerGroup>
        <RangeSliderMarker value={25}>25</RangeSliderMarker>
        <RangeSliderMarker value={50}>50</RangeSliderMarker>
        <RangeSliderMarker value={75}>75</RangeSliderMarker>
      </RangeSliderMarkerGroup>
    </RangeSlider>
  )
  
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Range-Slider"
};