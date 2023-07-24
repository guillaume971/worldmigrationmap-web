import { useEffect, useState } from "react";
import { YearMigrationData } from "../types";

export const useMigrationData = () => {
  const [allData, setAllData] = useState<YearMigrationData>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://climatemigrationmap-back.vercel.app/migration?group_by=year"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data: YearMigrationData = await response.json();
        setAllData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { allData, loading, error };
};
