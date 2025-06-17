import { AnalyticsEvent } from '../types/analytics';

export const useAnalytics = () => {
  const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  return { trackEvent };
}; 