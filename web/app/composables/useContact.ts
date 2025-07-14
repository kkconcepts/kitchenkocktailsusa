import { ref } from 'vue'

interface ContactForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  inquiryType: string
  message: string
}

interface Option {
  value: string
  label: string
}

export const useContact = () => {
  const form = ref<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    inquiryType: '',
    message: ''
  })

  const locations: Option[] = [
    { value: 'atlanta', label: 'Atlanta' },
    { value: 'chicago', label: 'Chicago' },
    { value: 'charlotte', label: 'Charlotte' },
    { value: 'dallas', label: 'Dallas' },
    { value: 'dc', label: 'Washington D.C.' }
  ]

  const inquiryTypes: Option[] = [
    { value: 'large-party', label: 'Large Party Reservation' },
    { value: 'private-event', label: 'Private Event' },
    { value: 'catering', label: 'Catering' },
    { value: 'other', label: 'Other' }
  ]

  const handleSubmit = async () => {
    try {
      const { data, error } = await useFetch<{ success: boolean }>('/api/contact', {
        method: 'POST',
        body: form.value
      })

      if (error.value) {
        console.error('Submission failed:', error.value)
        alert('Something went wrong. Please try again later.')
        return
      }

      if (data.value?.success) {
        alert('Your message has been sent!')
        form.value = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          location: '',
          inquiryType: '',
          message: ''
        }
      } else {
        alert('There was an issue sending your message.')
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      alert('Could not send. Please try again.')
    }
  }

  return {
    form,
    locations,
    inquiryTypes,
    handleSubmit
  }
}
