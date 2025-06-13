interface ToastUrls {
  atlanta?: string
  charlotte?: string
  chicago?: string
  dallas?: string
  washington_dc?: string
}

export const useToast = () => {
  const selectedCity = useState<string>('selectedCity', () => 'atlanta')

  const getToastUrl = (toastUrls: ToastUrls | null | undefined): string | null => {
    if (!toastUrls) return null

    const cityKey = selectedCity.value === 'washington-dc' ? 'washington_dc' : selectedCity.value
    return toastUrls[cityKey as keyof ToastUrls] || null
  }

  return {
    selectedCity,
    getToastUrl
  }
}
