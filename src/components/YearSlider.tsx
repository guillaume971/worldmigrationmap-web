import React from "react";
import * as Slider from "@radix-ui/react-slider";

const YearSlider: React.FC<{
  year: number;
  setYear: (year: number) => void;
}> = ({ year, setYear }) => {
  return (
    <form>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full"
        value={[year]}
        onValueChange={([year]) => setYear(year)}
        min={1950}
        max={2100}
        step={1}
      >
        <Slider.Track className="bg-gray-600 relative grow h-1">
          <Slider.Range className="absolute bg-gray-300 h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="flex items-center justify-center text-xs cursor-default font-semibold w-20 h-8 rounded-sm bg-gray-300 shadow-[0_0_3em] shadow-black/50 hover:bg-white focus:bg-white active:bg-white focus:outline-gray-100/40 focus:outline-offset-1 active:outline-gray-100/40 active:outline-offset-1"
          aria-label="Year"
        >
          {year}
        </Slider.Thumb>
      </Slider.Root>
    </form>
  );
};

export default YearSlider;
