create extension if not exists pgcrypto;

create table if not exists public.visitor_events (
    id uuid primary key default gen_random_uuid(),
    event_type text not null check (event_type in ('home_visit', 'project_open')),
    project_id text,
    path text not null,
    ip_address inet,
    user_agent text,
    device_type text,
    visited_at timestamptz not null default timezone('utc', now()),
    metadata jsonb not null default '{}'::jsonb,
    constraint project_id_required_for_project_open check (
        (event_type = 'project_open' and project_id is not null)
        or (event_type = 'home_visit')
    )
);

create index if not exists visitor_events_visited_at_idx
    on public.visitor_events (visited_at desc);

create index if not exists visitor_events_event_type_idx
    on public.visitor_events (event_type);

create index if not exists visitor_events_project_id_idx
    on public.visitor_events (project_id)
    where project_id is not null;

alter table public.visitor_events enable row level security;
