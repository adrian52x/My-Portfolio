alter table public.visitor_events
add column if not exists source_type text not null default 'direct'
    check (source_type in ('direct', 'internal', 'external')),
add column if not exists source_host text,
add column if not exists source_url text;

create index if not exists visitor_events_source_type_idx
    on public.visitor_events (source_type);

create index if not exists visitor_events_source_host_idx
    on public.visitor_events (source_host)
    where source_host is not null;
