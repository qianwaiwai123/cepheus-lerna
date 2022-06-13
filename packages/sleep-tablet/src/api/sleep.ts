export type SleepReportData = {
  na: number | string;
  ratio_of_sleep: number | string;
  sleepAll: number | string;
  sleepBed: number | string;
  sleepEnd: string;
  sleepLatency: number | string;
  sleepStart: string;
  waso: number | string;
};

export type SleepUserInfo = {
  age: number,
  disease_history: string;
  name: string;
};