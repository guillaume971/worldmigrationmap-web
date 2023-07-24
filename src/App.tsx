import React, { useState } from "react";
import MigrationMap from "./components/MigrationMap";
import YearSlider from "./components/YearSlider";
import Legend from "./components/Legend";
import HistoricalEventsList from "./components/HistoricalEventsList";
import FutureImpacts from "./components/FutureImpacts";

const App: React.FC = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  return (
    <>
      <main>
        <section className="relative z-20 mt-24 max-w-prose mx-auto text-center">
          <h1 className="text-gray-200 text-3xl font-semibold">
            The World Migration Map
          </h1>
          <p className=" text-gray-400 my-4">
            The <i className="italic">World Migration Map</i> is a dynamic tool
            that aims to provide valuable insights into historical and projected
            population migrations worldwide, highlighting the influences of
            historical events, climate change, and other key factors. With an
            intuitive map interface spanning from 1950 to 2100, it offers a
            comprehensive understanding of diverse population movements,
            fostering heightened awareness of human mobility and the
            interconnected drivers shaping these migrations.
          </p>
        </section>
        <section>
          <aside className="sticky z-10 top-0 pt-11 left-0 w-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:shadow-[0_0_10em_6em] before:shadow-gray-950">
            <YearSlider year={year} setYear={setYear} />
          </aside>
          <figure className="-mt-14 -mb-56">
            <MigrationMap year={year} />
          </figure>
          <figure className="text-gray-600 text-xs font-medium sticky bottom-0 left-0 p-4 space-y-2">
            <Legend />
          </figure>
          <article className="min-h-screen max-w-prose mx-auto">
            {year > 2023 ? (
              <FutureImpacts />
            ) : (
              <HistoricalEventsList year={year} />
            )}
          </article>
        </section>
      </main>
      <footer className="text-gray-400 py-10 mt-10">
        <div className="text-center container mx-auto px-4">
          <p className="text-sm">
            Developed by{" "}
            <a
              href="https://github.com/heitornobrega"
              className="text-white hover:text-gray-600"
            >
              Heitor Nóbrega Tico
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/guillaume971"
              className="text-white hover:text-gray-600"
            >
              Guillaume Lelasseur
            </a>
            .
          </p>
          <p className="text-xs mt-4">
            Proudly supported by{" "}
            <a
              href="https://www.paradigmemode.com"
              className="text-white hover:text-gray-600"
            >
              Paradigme Mode
            </a>
            .
          </p>
          <p className="text-xs mt-4">
            This project is open to all. Feel free to contribute on{" "}
            <a
              href="https://github.com/guillaume971/worldmigrationmap-web"
              className="text-white hover:text-gray-600"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
