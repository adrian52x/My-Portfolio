"use client";

import { useEffect } from "react";

interface VisitTrackerProps {
  eventType: "home_visit" | "project_open";
  path: string;
  projectId?: string;
}

export default function VisitTracker({ eventType, path, projectId }: VisitTrackerProps) {
  useEffect(() => {
    const sessionKey = `visit-tracked:${eventType}:${projectId ?? path}`;

    if (sessionStorage.getItem(sessionKey)) {
      return;
    }

    const payload = JSON.stringify({
      eventType,
      projectId,
      path,
    });

    const blob = new Blob([payload], { type: "application/json" });
    const sentWithBeacon =
      typeof navigator.sendBeacon === "function" && navigator.sendBeacon("/api/track", blob);

    if (!sentWithBeacon) {
      void fetch("/api/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
        keepalive: true,
      });
    }

    sessionStorage.setItem(sessionKey, "1");
  }, [eventType, path, projectId]);

  return null;
}
