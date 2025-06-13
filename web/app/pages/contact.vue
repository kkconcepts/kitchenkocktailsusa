<script setup>
import { ogImage } from '~/constants'

const title = ref('Contact')
const pageDescription = ref(
  'Have questions, feedback, or event inquiries? Reach out to our team and well be in touch.'
)

const pageClass = computed(() => `page page-${title.value.toLowerCase()}`)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  inquiryType: '',
  message: ''
})

const locations = [
  { value: 'atlanta', label: 'Atlanta' },
  { value: 'chicago', label: 'Chicago' },
  { value: 'charlotte', label: 'Charlotte' },
  { value: 'dallas', label: 'Dallas' },
  { value: 'dc', label: 'Washington D.C.' }
]

const inquiryTypes = [
  { value: 'large-party', label: 'Large Party Reservation' },
  { value: 'private-event', label: 'Private Event' },
  { value: 'catering', label: 'Catering' },
  { value: 'other', label: 'Other' }
]

const handleSubmit = () => {
  // Handle form submission here
  console.log('Form submitted:', form.value)
}

useSeoMeta({
  title: title,
  ogTitle: title,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: ogImage,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="bg-light-400" :class="pageClass">
    <section class="min-h-100vh max-w-2xl mx-auto f-py-160-180">
      <div class="flex flex-col f-gap-32-48">
        <!-- Page Header -->
        <div class="flex flex-col items-center text-center">
          <h1 class="text-4xl font-bold mb-10 uppercase">Contact</h1>
          <p class="text-lg">
            Have questions, feedback, or event inquiries? Reach out to our team and we'll be in
            touch.
          </p>
        </div>
        <!-- Border -->
        <!-- Contact Form -->
        <form
          @submit.prevent="handleSubmit"
          class="flex flex-col gap-6 bg-white p-12 border-brand-accent border-4 shadow-sm backdrop-blur-md"
        >
          <!-- Name Fields -->
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col">
              <label for="firstName" class="text-sm mb-2">First Name*</label>
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                required
                class="px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
              />
            </div>
            <div class="flex flex-col">
              <label for="lastName" class="text-sm mb-2">Last Name*</label>
              <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                required
                class="px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
              />
            </div>
          </div>

          <!-- Contact Fields -->
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col">
              <label for="email" class="text-sm mb-2">Email*</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
              />
            </div>
            <div class="flex flex-col">
              <label for="phone" class="text-sm mb-2">Phone Number*</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
              />
            </div>
          </div>

          <!-- Location and Inquiry Type Fields -->
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col">
              <label for="location" class="text-sm mb-2">Location*</label>
              <select
                id="location"
                v-model="form.location"
                required
                class="px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 bg-white"
              >
                <option value="" disabled>Select a location</option>
                <option v-for="location in locations" :key="location.value" :value="location.value">
                  {{ location.label }}
                </option>
              </select>
            </div>
            <div class="flex flex-col">
              <label for="inquiryType" class="text-sm mb-2">Inquiry Type*</label>
              <select
                id="inquiryType"
                v-model="form.inquiryType"
                required
                class="px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 bg-white"
              >
                <option value="" disabled>Select inquiry type</option>
                <option v-for="type in inquiryTypes" :key="type.value" :value="type.value">
                  {{ type.label }}
                </option>
              </select>
            </div>
          </div>

          <!-- Message Field -->
          <div class="flex flex-col">
            <label for="message" class="text-sm mb-2">Message*</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="4"
              class="px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
            ></textarea>
          </div>

          <button
            type="submit"
            class="bg-red-600 text-white px-6 py-3 hover:bg-primary/90 transition-colors duration-200 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
