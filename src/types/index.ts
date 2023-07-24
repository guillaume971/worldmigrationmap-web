export type CountryMigrationData = {
  [country: string]: string;
};

export type YearMigrationData = {
  [year: string]: CountryMigrationData;
};

export type MigrationData = {
  country: string;
  value: number;
};

interface CountryInvolved {
  name: string;
  present_name?: string;
}

export interface HistoricalEvent {
  title: string;
  date_start: string;
  date_end: string;
  countries_involved: CountryInvolved[];
  description: string;
}
