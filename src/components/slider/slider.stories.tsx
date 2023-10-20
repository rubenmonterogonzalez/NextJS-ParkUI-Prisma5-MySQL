import React from "react";
import type { Story } from "@ladle/react";
import {
    Slider,
    SliderControl,
    SliderMarker,
    SliderMarkerGroup,
    SliderRange,
    SliderThumb,
    SliderTrack,
    type SliderProps,
  } from '~/components/slider'
  
  export const slider: Story = (props: SliderProps) => {
    return (
      <Slider min={0} max={100} defaultValue={33} {...props}>
        <SliderControl>
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
        <SliderMarkerGroup>
          <SliderMarker value={25}>25</SliderMarker>
          <SliderMarker value={50}>50</SliderMarker>
          <SliderMarker value={75}>75</SliderMarker>
        </SliderMarkerGroup>
      </Slider>
    )
  }
  

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Slider"
};