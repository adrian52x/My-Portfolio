"use client";

import { useEffect } from "react";

type EventType = "home_visit" | "project_open";

interface VisitTrackerProps {
  eventType: EventType;
  path: string;
  projectId?: string;
}

function normalizeSource(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

function getVisitorSource() {
  const storedSource = sessionStorage.getItem("visitor-source");
  if (storedSource) {
    return storedSource;
  }

  const params = new URLSearchParams(window.location.search);
  const sourceFromQuery = params.get("src") ?? params.get("utm_source");

  if (sourceFromQuery) {
    const normalizedSource = normalizeSource(sourceFromQuery);
    sessionStorage.setItem("visitor-source", normalizedSource);
    return normalizedSource;
  }

  if (!document.referrer) {
    sessionStorage.setItem("visitor-source", "direct");
    return "direct";
  }

  try {
    const referrerUrl = new URL(document.referrer);
    const currentHost = window.location.host;
    const normalizedSource = referrerUrl.host === currentHost
      ? "direct"
      : normalizeSource(referrerUrl.hostname.replace(/^www\./, ""));

    sessionStorage.setItem("visitor-source", normalizedSource);
    return normalizedSource;
  } catch {
    sessionStorage.setItem("visitor-source", "direct");
    return "direct";
  }
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
      visitorSource: getVisitorSource(),
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
