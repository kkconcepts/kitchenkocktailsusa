import { ref } from 'vue'

export const useMailchimp = () => {
  const email = ref('')
  const name = ref('')
  const isEmailStep = ref(true)
  const isLoading = ref(false)
  const error = ref('')
  const success = ref(false)

  const resetForm = () => {
    email.value = ''
    name.value = ''
    isEmailStep.value = true
    error.value = ''
    success.value = false
  }

  const handleInput = async () => {
    if (isEmailStep.value) {
      if (email.value && email.value.includes('@')) {
        isEmailStep.value = false // Switch to name input
      }
    } else {
      if (name.value) {
        // Submit both email and name
        await submitSubscription()
      }
    }
  }

  const submitSubscription = async () => {
    if (!email.value || !name.value) return

    isLoading.value = true
    error.value = ''

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email.value,
          name: name.value
        })
      })

      const result = await response.json()

      if (result.success) {
        success.value = true
        resetForm()
      } else {
        error.value = result.error || 'Failed to subscribe'
      }
    } catch (err) {
      error.value = 'An error occurred while subscribing'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    email,
    name,
    isEmailStep,
    isLoading,
    error,
    success,
    handleInput,
    submitSubscription,
    resetForm
  }
}
