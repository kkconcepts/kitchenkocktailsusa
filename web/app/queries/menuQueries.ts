export const FEATURED_DISHES_QUERY = groq`
  *[_type == "menuItem" && featured == true] {
    _id,
    name,
    image,
    slug
  }
`

export const MENU_ITEM_BY_SLUG_QUERY = groq`
  *[_type == "menuItem" && slug.current == $slug][0] {
    _id,
    name,
    image,
    description,
    addOns,
    toastUrls
  }
`

export const ALL_MENU_ITEMS_QUERY = groq`
  *[_type == "menuItem"] {
    _id,
    name,
    description,
    "imageUrl": image.asset->url,
    "slug": slug.current,
    productType,
    price,
    availableIn,
    toastUrls,
    featured
  }
`
