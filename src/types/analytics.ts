interface Window {
  gtag: (
    command: 'event',
    eventName: string,
    eventParameters: {
      [key: string]: any;
    }
  ) => void;
}

export type AnalyticsEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
}; 