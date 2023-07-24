import React from "react";

const FutureImpacts: React.FC = () => {
  return (
    <div className="border border-yellow-950 text-gray-400 p-6 rounded shadow-lg">
      <h2 className="text-xs text-yellow-800 uppercase font-semibold mb-4 cursor-default">
        The Impact of Climate Change on Future Migration
      </h2>
      <p>
        Climate change is projected to have significant impacts on weather
        patterns, sea levels, and agricultural productivity. These changes are
        expected to challenge the livability of many regions around the world
        and could potentially lead to mass migrations in the decades to come.
      </p>
      <p className="mt-4">
        As sea levels rise, low-lying areas, especially in the developing world,
        are at a particularly high risk. It is estimated that by 2050, up to 200
        million people could be displaced due to climatic changes. The{" "}
        <a
          target="_blank"
          className="text-yellow-800 underline"
          href="https://www.un.org/en/global-issues/migration"
        >
          United Nations
        </a>{" "}
        is deeply concerned about this issue.
      </p>
      <p className="mt-4">
        Agricultural productivity is also expected to decline in many regions
        due to increased temperatures, droughts, and flooding, making it
        difficult for people to sustain their livelihoods. According to the{" "}
        <a
          target="_blank"
          className="text-yellow-800 underline"
          href="https://www.worldbank.org/en/topic/climatechange"
        >
          World Bank
        </a>
        , climate change could push more than 100 million people into extreme
        poverty by 2030.
      </p>
      <p className="mt-4">
        The challenges posed by climate migration require comprehensive and
        global responses. For more details, refer to the reports from
        organizations such as the{" "}
        <a
          target="_blank"
          className="text-yellow-800 underline"
          href="https://www.ipcc.ch/"
        >
          Intergovernmental Panel on Climate Change (IPCC)
        </a>{" "}
        and the{" "}
        <a
          target="_blank"
          className="text-yellow-800 underline"
          href="https://www.un.org/sustainabledevelopment/climate-change/"
        >
          United Nations Sustainable Development Goals
        </a>
        .
      </p>
    </div>
  );
};

export default FutureImpacts;
