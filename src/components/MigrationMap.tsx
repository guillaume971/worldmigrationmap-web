import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import world from "../data/world-110m.json";
import { useMigrationData } from "../hooks/useMigrationData";
import { MigrationData } from "../types";

const MigrationMap: React.FC<{ year: number }> = ({ year }) => {
  const { allData, loading, error } = useMigrationData();
  const [tooltipContent, setTooltipContent] = React.useState<string>("");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Prepare the data for the selected year
  const data: MigrationData[] = Object.entries(
    allData[year.toString()] || {}
  ).map(([country, value]) => ({
    country,
    value: parseFloat(value),
  }));

  return (
    <div className="m-h-full">
      <Tooltip.Provider>
        <ComposableMap>
          <Geographies geography={world}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = data.find((s) => s.country === geo.properties.name);

                // Set the default color
                let fill = "#555";

                // Calculate the color transparency if data is available
                if (d) {
                  let normalizedValue = (d.value + 2) / 12;
                  normalizedValue = Math.max(0, Math.min(1, normalizedValue));
                  fill = `rgba(255,255,255,${normalizedValue})`;
                }

                return (
                  <Tooltip.Root delayDuration={0} key={geo.rsmKey}>
                    <Tooltip.Trigger asChild>
                      <Geography
                        geography={geo}
                        fill={fill}
                        className="stroke-[0.4px] stroke-slate-700/50"
                        onMouseEnter={() => {
                          setTooltipContent(
                            `${geo.properties.name}: ${
                              d
                                ? Math.round(d.value) + " in 1,000 people"
                                : "No data"
                            }`
                          );
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("");
                        }}
                        style={{
                          default: {
                            outline: "none",
                          },
                          hover: {
                            fill: "#C42",
                            outline: "none",
                          },
                          pressed: {
                            fill: "#C42",
                            outline: "none",
                          },
                        }}
                      />
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        sideOffset={5}
                        className="z-30 text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade"
                      >
                        {tooltipContent}
                        <Tooltip.Arrow className="fill-white" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </Tooltip.Provider>
    </div>
  );
};

export default MigrationMap;
