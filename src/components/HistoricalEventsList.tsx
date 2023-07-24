import React from "react";
import { useHistoricalEvents } from "../hooks/useHistoricalEvents";

interface HistoricalEventsListProps {
  year: number;
}

const HistoricalEventsList: React.FC<HistoricalEventsListProps> = ({
  year,
}) => {
  const { events, loading, error } = useHistoricalEvents();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  const eventsInCurrentYear = events.filter((event) => {
    const eventStartYear = new Date(event.date_start).getFullYear();
    const eventEndYear =
      event.date_end === "Ongoing"
        ? Infinity
        : new Date(event.date_end).getFullYear();
    return eventStartYear <= year && eventEndYear >= year;
  });

  return (
    <dl>
      {eventsInCurrentYear.length > 0 ? (
        eventsInCurrentYear.map((event, index) => (
          <div key={index} className="mb-4 border border-pink-950 p-6 rounded">
            <dt className="text-pink-800 uppercase font-semibold text-xs mb-2 cursor-default">
              {event.title}
            </dt>
            <dd className="text-sm md:text-base text-gray-500">
              {event.description}
            </dd>
          </div>
        ))
      ) : (
        <p>No major historical events data available for this year.</p>
      )}
    </dl>
  );
};

export default HistoricalEventsList;
