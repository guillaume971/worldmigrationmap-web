import { useEffect, useState } from "react";
import { HistoricalEvent } from "../types";

export const useHistoricalEvents = () => {
  const [events, setEvents] = useState<HistoricalEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistoricalEvents = async () => {
      setLoading(true);
      try {
        const response = await fetch("/data/historical-events.json");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data: { events: HistoricalEvent[] } = await response.json();
        setEvents(data.events);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHistoricalEvents();
  }, []);

  return { events, loading, error };
};
