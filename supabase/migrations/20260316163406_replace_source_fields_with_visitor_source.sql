alter table public.visitor_events
add column if not exists visitor_source text;

update public.visitor_events
set visitor_source = coalesce(nullif(source_host, ''), nullif(source_type, ''), 'direct')
where visitor_source is null;

alter table public.visitor_events
alter column visitor_source set default 'direct',
alter column visitor_source set not null;

drop index if exists public.visitor_events_source_type_idx;
drop index if exists public.visitor_events_source_host_idx;

alter table public.visitor_events
 drop column if exists source_type,
 drop column if exists source_host,
 drop column if exists source_url;

create index if not exists visitor_events_visitor_source_idx
    on public.visitor_events (visitor_source);
