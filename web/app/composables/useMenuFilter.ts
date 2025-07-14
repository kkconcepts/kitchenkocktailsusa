export interface MenuItem {
  _id: string
  name: string
  description: string
  imageUrl: string
  slug: string
  productType: string
  price: number
  availableIn: string[]
  toastUrls: Record<string, string>
  featured: boolean
}

export function useMenuFilter() {
  const searchQuery = ref('')
  const selectedCity = ref('atlanta')
  const selectedType = ref('all')
  const isSearchExpanded = ref(false)
  const searchInputRef = ref<HTMLInputElement | null>(null)

  const filterItems = (items: MenuItem[]) => {
    let filtered = items

    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(query) || item.productType.toLowerCase().includes(query)
      )
    }

    if (selectedType.value !== 'all') {
      filtered = filtered.filter((item) => item.productType === selectedType.value)
    }

    filtered = filtered.filter(
      (item) => item.availableIn.includes('all') || item.availableIn.includes(selectedCity.value)
    )

    return filtered
  }

  const toggleSearch = () => {
    isSearchExpanded.value = !isSearchExpanded.value
    if (isSearchExpanded.value) {
      // Focus the input when expanded
      nextTick(() => {
        searchInputRef.value?.focus()
      })
    } else {
      // Clear search when collapsed
      searchQuery.value = ''
    }
  }

  return {
    // State
    searchQuery,
    selectedCity,
    selectedType,
    isSearchExpanded,
    searchInputRef,

    // Methods
    filterItems,
    toggleSearch
  }
}
