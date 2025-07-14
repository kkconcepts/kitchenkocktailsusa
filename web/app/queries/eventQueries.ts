export const EVENT_BY_SLUG_QUERY = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    date,
    endDate,
    mainImage,
    "imageUrl": mainImage.asset->url,
    description,
    specials,
    locations
  }
`
export const ALL_UPCOMING_EVENTS_QUERY = groq`
  *[_type == "event" && dateTime(date) >= dateTime(now())] | order(date asc) {
    _id,
    title,
    description,
    date,
    imageUrl,
    slug
  }
`
