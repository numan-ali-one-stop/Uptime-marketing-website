"use client";

import * as React from "react";

import { trackEvent } from "@/lib/analytics";

type TrackPageViewProps = {
  eventName?: string;
  params?: Record<string, string | number | boolean | undefined>;
};

/** Fires a GA4 event once on mount — for view tracking that server components can't do themselves. */
function TrackPageView({
  eventName = "service_page_view",
  params,
}: TrackPageViewProps) {
  React.useEffect(() => {
    trackEvent(eventName, params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export { TrackPageView };
