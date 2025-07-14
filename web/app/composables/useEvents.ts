export function useEvents() {
  const getEventBySlug = (slug: string) => useSanityQuery(EVENT_BY_SLUG_QUERY, { slug })
  const getAllUpcomingEvents = () => useSanityQuery(ALL_UPCOMING_EVENTS_QUERY)

  return {
    getEventBySlug,
    getAllUpcomingEvents
  }
}
