import { NextRequest, NextResponse } from "next/server";

type EventType = "home_visit" | "project_open";

interface TrackRequestBody {
  eventType?: EventType;
  projectId?: string;
  path?: string;
  visitorSource?: string;
}

const allowedEventTypes = new Set<EventType>(["home_visit", "project_open"]);

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? null;
  }

  return request.headers.get("x-real-ip");
}

function getDeviceType(userAgent: string) {
  const normalizedUserAgent = userAgent.toLowerCase();

  if (/mobile|android|iphone|ipod|blackberry|iemobile|opera mini/.test(normalizedUserAgent)) {
    return "mobile";
  }

  if (/ipad|tablet/.test(normalizedUserAgent)) {
    return "tablet";
  }

  return "desktop";
}

function normalizeSource(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

function getFallbackVisitorSource(request: NextRequest) {
  const referer = request.headers.get("referer");
  if (!referer) {
    return "direct";
  }

  try {
    const refererUrl = new URL(referer);
    const requestHost = request.headers.get("host");

    if (refererUrl.host === requestHost) {
      return "direct";
    }

    return normalizeSource(refererUrl.hostname.replace(/^www\./, ""));
  } catch {
    return "direct";
  }
}

export async function POST(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const ownerIpAddress = process.env.OWNER_IP_ADDRESS;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ error: "Supabase environment variables are missing." }, { status: 500 });
  }

  let body: TrackRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const eventType = body.eventType;
  const path = body.path;
  const projectId = body.projectId ?? null;

  if (!eventType || !allowedEventTypes.has(eventType)) {
    return NextResponse.json({ error: "Invalid event type." }, { status: 400 });
  }

  if (!path) {
    return NextResponse.json({ error: "Path is required." }, { status: 400 });
  }

  if (eventType === "project_open" && !projectId) {
    return NextResponse.json({ error: "projectId is required for project_open." }, { status: 400 });
  }

  const userAgent = request.headers.get("user-agent") ?? "";
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const referer = request.headers.get("referer");
  const ipAddress = getClientIp(request);
  const deviceType = getDeviceType(userAgent);
  const isOwner = Boolean(ipAddress && ownerIpAddress && ipAddress === ownerIpAddress);
  const visitorSource = body.visitorSource ? normalizeSource(body.visitorSource) : getFallbackVisitorSource(request);

  const response = await fetch(`${supabaseUrl}/rest/v1/visitor_events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      event_type: eventType,
      project_id: projectId,
      path,
      ip_address: ipAddress,
      user_agent: userAgent,
      device_type: deviceType,
      visitor_source: visitorSource,
      metadata: {
        referer,
        forwarded_for: forwardedFor,
        real_ip: realIp,
        is_owner: isOwner,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    return NextResponse.json(
      { error: "Failed to store visitor event.", details: errorText },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
