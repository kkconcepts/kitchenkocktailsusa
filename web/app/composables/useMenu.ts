export function useMenu() {
  const getFeaturedDishes = () => useSanityQuery(FEATURED_DISHES_QUERY)
  const getMenuItemBySlug = (slug: string) => useSanityQuery(MENU_ITEM_BY_SLUG_QUERY, { slug })
  const getAllMenuItems = () => useSanityQuery(ALL_MENU_ITEMS_QUERY)

  return {
    getFeaturedDishes,
    getMenuItemBySlug,
    getAllMenuItems
  }
}
