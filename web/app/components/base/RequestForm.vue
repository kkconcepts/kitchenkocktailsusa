<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['cancel', 'success'])

const currentStep = ref(1)
const formSubmitted = ref(false)

const formData = ref({
  location: '',
  date: '',
  time: '',
  guests: '',
  purpose: '',
  specialRequests: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  notes: ''
})

const isStepValid = computed(() => {
  if (currentStep.value === 1) {
    return (
      formData.value.location &&
      formData.value.date &&
      formData.value.time &&
      formData.value.guests &&
      formData.value.purpose
    )
  } else if (currentStep.value === 2) {
    return (
      formData.value.firstName &&
      formData.value.lastName &&
      formData.value.email &&
      formData.value.phone
    )
  }
  return true
})

const nextStep = () => {
  if (currentStep.value < 3 && isStepValid.value) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const cancel = () => {
  emit('cancel')
}

const submitForm = async () => {
  try {
    const res = await fetch('/api/private-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData.value)
    })

    if (!res.ok) throw new Error('Submission failed')
    formSubmitted.value = true
    emit('success')
  } catch (err) {
    console.error('Submission error:', err)
    alert('There was an issue submitting your request. Please try again later.')
  }
}
</script>

<template>
  <div class="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
    <!-- Success Message -->
    <Transition name="fade" mode="out-in">
      <div
        v-if="formSubmitted"
        class="flex flex-col items-center justify-center space-y-6 py-16 text-center"
      >
        <div class="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-4">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              d="M5 13l4 4L19 7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h2 class="text-2xl font-medium text-white">Request Submitted Successfully!</h2>
        <p class="text-gray-300 max-w-md">
          Thank you for your interest in hosting an event with us. Our team will review your request
          and get back to you within 48 hours.
        </p>
        <NuxtLink
          to="/"
          class="px-6 py-2 bg-brand-accent text-white rounded-0.5 hover:bg-brand-accent/90"
        >
          Return to Home
        </NuxtLink>
      </div>
    </Transition>

    <!-- Form content -->
    <Transition name="fade" mode="out-in">
      <div v-if="!formSubmitted" class="space-y-8">
        <h1 class="text-3xl font-gt-ultra uppercase text-white text-center mb-12">
          Private Event Request
        </h1>

        <!-- Progress Steps -->
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <div
              :class="[
                `w-8 h-8 rounded-0.5 flex font-regular leading-tight f-text-13-14 items-center justify-center`,
                currentStep === 1
                  ? 'bg-brand-accent text-white'
                  : 'border-1 border-warmgray-600 text-gray-300'
              ]"
            >
              1
            </div>
            <span class="ml-3 font-regular leading-tight f-text-13-14 text-gray-300"
              >Event Details</span
            >
          </div>
          <div class="flex items-center">
            <div
              :class="[
                `w-8 h-8 rounded-0.5 flex font-regular leading-tight f-text-13-14 items-center justify-center`,
                currentStep === 2
                  ? 'bg-brand-accent text-white'
                  : 'border-1 border-warmgray-600 bg-brand-dark text-gray-300'
              ]"
            >
              2
            </div>
            <span class="ml-3 font-regular leading-tight f-text-13-14 text-gray-300"
              >Contact Details</span
            >
          </div>
          <div class="flex items-center">
            <div
              :class="[
                `w-8 h-8 flex rounded-0.5 font-regular leading-tight f-text-13-14 items-center justify-center`,
                currentStep === 3
                  ? 'bg-brand-accent text-white'
                  : 'border-1 border-warmgray-600 bg-brand-dark text-gray-300'
              ]"
            >
              3
            </div>
            <span class="ml-3 font-regular leading-tight f-text-13-14 text-gray-300"
              >Review Details</span
            >
          </div>
        </div>

        <!-- Step 1: Event Details -->
        <div class="relative min-h-[500px] f-text-13-14 transition-all duration-500 ease-in-out">
          <Transition name="fade" mode="out-in">
            <div :key="currentStep">
              <div v-if="currentStep === 1">
                <div class="flex flex-col mb-6">
                  <label class="f-text-11-13 font-medium mb-2 text-gray-300"
                    >Select Location*</label
                  >
                  <div class="relative">
                    <select
                      v-model="formData.location"
                      class="w-full px-4 py-2.5 border border-warmgray-600 rounded-none appearance-none focus:ring-0 focus:border-warmgray-400 bg-brandDark text-white"
                      required
                    >
                      <option value="" disabled class="text-gray-400">Select a location</option>
                      <option value="atlanta" class="text-white">Atlanta</option>
                      <option value="chicago" class="text-white">Chicago</option>
                      <option value="charlotte" class="text-white">Charlotte</option>
                      <option value="dallas" class="text-white">Dallas</option>
                      <option value="washington-dc" class="text-white">Washington D.C.</option>
                    </select>
                    <div
                      class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                    >
                      <svg
                        class="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 9l-7 7-7-7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col">
                      <label class="f-text-11-13 font-medium mb-2 text-gray-300"
                        >Date you wish to book*</label
                      >
                      <input
                        type="date"
                        v-model="formData.date"
                        class="w-full px-4 py-2.5 border border-warmgray-600 rounded-none focus:ring-0 focus:border-warmgray-400 bg-brandDark text-white"
                        placeholder="mm/dd/yyyy"
                        required
                      />
                    </div>
                    <div class="flex flex-col">
                      <label class="f-text-11-13 font-medium mb-2 text-gray-300"
                        >Select Time*</label
                      >
                      <div class="relative">
                        <select
                          v-model="formData.time"
                          class="w-full px-4 py-2.5 border border-warmgray-600 rounded-none appearance-none focus:ring-0 focus:border-warmgray-400 bg-brandDark text-white"
                          required
                        >
                          <option value="" disabled class="text-gray-400">Select a time</option>
                          <option value="lunch" class="text-white">
                            Lunch (11:00 AM - 3:00 PM)
                          </option>
                          <option value="dinner" class="text-white">
                            Dinner (5:00 PM - 10:00 PM)
                          </option>
                        </select>
                        <div
                          class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                        >
                          <svg
                            class="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M19 9l-7 7-7-7"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col">
                      <label class="text-sm font-medium f-text-11-13 mb-2 text-gray-300"
                        >Purpose for group/private event*</label
                      >
                      <div class="relative">
                        <select
                          v-model="formData.purpose"
                          class="w-full px-4 py-2.5 border border-warmgray-600 rounded-none appearance-none focus:ring-0 focus:border-warmgray-400 bg-brandDark text-white"
                          required
                        >
                          <option value="" disabled class="text-gray-400">Select a purpose</option>
                          <option value="birthday" class="text-white">Birthday Celebration</option>
                          <option value="corporate" class="text-white">Corporate Event</option>
                          <option value="wedding" class="text-white">Wedding Related</option>
                          <option value="other" class="text-white">Other</option>
                        </select>
                        <div
                          class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                        >
                          <svg
                            class="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M19 9l-7 7-7-7"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div class="flex flex-col">
                      <label class="text-sm font-medium f-text-11-13 mb-2 text-gray-300"
                        >Number of guests in your party*</label
                      >
                      <input
                        type="number"
                        v-model="formData.guests"
                        min="1"
                        class="w-full px-4 py-2.5 border border-warmgray-600 rounded-none focus:ring-0 focus:border-warmgray-400 bg-brandDark text-white"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium f-text-11-13 mb-2 text-gray-300"
                      >Any Special Requests:</label
                    >
                    <textarea
                      v-model="formData.specialRequests"
                      rows="4"
                      class="w-full px-4 py-2 border border-warmgray-600 focus:ring-brand-accent focus:border-brand-accent bg-brandDark text-white rounded-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- Step 2: Contact Details -->
              <div v-else-if="currentStep === 2" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex flex-col">
                    <label class="text-sm font-medium text-gray-300 mb-2">First Name*</label>
                    <input
                      type="text"
                      v-model="formData.firstName"
                      class="w-full px-4 py-2.5 border border-warmgray-600 rounded-none focus:ring-0 focus:border-warmgray-400 bg-brandDark text-white"
                      required
                    />
                  </div>
                  <div class="flex flex-col">
                    <label class="text-sm font-medium text-gray-300 mb-2">Last Name*</label>
                    <input
                      type="text"
                      v-model="formData.lastName"
                      class="w-full px-4 py-2.5 border border-warmgray-600 rounded-none focus:ring-0 focus:border-warmgray-400 bg-brandDark text-white"
                      required
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex flex-col">
                    <label class="text-sm font-medium text-gray-300 mb-2">Email Address*</label>
                    <input
                      type="email"
                      v-model="formData.email"
                      class="w-full px-4 py-2.5 border border-warmgray-600 rounded-none focus:ring-0 focus:border-warmgray-400 bg-brandDark text-white"
                      required
                    />
                  </div>
                  <div class="flex flex-col">
                    <label class="text-sm font-medium text-gray-300 mb-2">Phone Number*</label>
                    <input
                      type="tel"
                      v-model="formData.phone"
                      class="w-full px-4 py-2.5 border border-warmgray-600 rounded-none focus:ring-0 focus:border-warmgray-400 bg-brandDark text-white"
                      required
                    />
                  </div>
                </div>

                <div class="flex flex-col">
                  <label class="text-sm font-medium text-gray-300 mb-2">Company/Organization</label>
                  <input
                    type="text"
                    v-model="formData.company"
                    class="w-full px-4 py-2.5 border border-warmgray-600 rounded-none focus:ring-0 focus:border-warmgray-400 bg-brandDark text-white"
                  />
                </div>

                <div class="flex flex-col">
                  <label class="text-sm font-medium text-gray-300 mb-2">Additional Notes</label>
                  <textarea
                    v-model="formData.notes"
                    rows="4"
                    class="w-full px-4 py-2.5 border border-warmgray-600 rounded-none focus:ring-0 focus:border-warmgray-400 resize-none bg-brandDark text-white"
                  ></textarea>
                </div>
              </div>

              <!-- Step 3: Review Details -->
              <div v-else-if="currentStep === 3" class="space-y-6">
                <div class="bg-brandDark p-6 rounded-0.5 border border-warmgray-600">
                  <h3 class="text-lg font-medium mb-4 text-white">Review Your Event Details</h3>
                  <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        <p class="text-sm font-medium text-gray-400">Location:</p>
                        <p class="capitalize text-white">
                          {{ formData.location.replace('-', ' ') }}
                        </p>
                      </div>
                      <div>
                        <p class="text-sm font-medium text-gray-400">Date:</p>
                        <p class="text-white">{{ formData.date }}</p>
                      </div>
                      <div>
                        <p class="text-sm font-medium text-gray-400">Time:</p>
                        <p class="text-white">
                          {{
                            formData.time === 'lunch'
                              ? 'Lunch (11:00 AM - 3:00 PM)'
                              : 'Dinner (5:00 PM - 10:00 PM)'
                          }}
                        </p>
                      </div>
                      <div>
                        <p class="text-sm font-medium text-gray-400">Number of Guests:</p>
                        <p class="text-white">{{ formData.guests }}</p>
                      </div>
                      <div>
                        <p class="text-sm font-medium text-gray-400">Event Purpose:</p>
                        <p class="capitalize text-white">
                          {{ formData.purpose.replace('-', ' ') }}
                        </p>
                      </div>
                      <div class="col-span-1">
                        <p class="text-sm font-medium text-gray-400">Special Requests:</p>
                        <p class="text-white">{{ formData.specialRequests || 'None' }}</p>
                      </div>
                    </div>

                    <div class="border-t border-warmgray-600 pt-4 mt-4">
                      <h4 class="font-medium mb-2 text-white">Contact Information</h4>
                      <div class="grid grid-cols-2 gap-4">
                        <div>
                          <p class="text-sm font-medium text-gray-400">Name:</p>
                          <p class="text-white">{{ formData.firstName }} {{ formData.lastName }}</p>
                        </div>
                        <div>
                          <p class="text-sm font-medium text-gray-400">Email:</p>
                          <p class="text-white">{{ formData.email }}</p>
                        </div>
                        <div>
                          <p class="text-sm font-medium text-gray-400">Phone:</p>
                          <p class="text-white">{{ formData.phone }}</p>
                        </div>
                        <div>
                          <p class="text-sm font-medium text-gray-400">Company/Organization:</p>
                          <p class="text-white">{{ formData.company || 'N/A' }}</p>
                        </div>
                        <div class="col-span-2">
                          <p class="text-sm font-medium text-gray-400">Additional Notes:</p>
                          <p class="text-white">{{ formData.notes || 'None' }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex justify-between pt-6">
          <button
            v-if="currentStep > 1"
            @click="previousStep"
            class="px-6 py-2 border rounded-0.5 hover:cursor-pointer border-warmgray-600 text-gray-300 hover:bg-warmgray-800"
            aria-label="Navigation back button"
          >
            Back
          </button>
          <button
            v-else
            @click="cancel"
            class="px-6 py-2 border border-warmgray-600 hover:cursor-pointer rounded-0.5 text-gray-300 hover:bg-warmgray-800"
            aria-label="Navigation cancel button"
          >
            Cancel
          </button>
          <button
            v-if="currentStep < 3"
            @click="nextStep"
            class="px-6 py-2 bg-brand-accent text-white hover:cursor-pointer rounded-0.5 hover:bg-brand-accent/90"
            :disabled="!isStepValid"
            aria-label="Navigation next button"
          >
            Continue
          </button>
          <button
            v-else
            @click="submitForm"
            class="px-6 py-2 bg-brand-accent text-white hover:cursor-pointer rounded-0.5 hover:bg-brand-accent/90"
            aria-label="Navigation submit button"
          >
            Submit Request
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
select,
input,
textarea {
  cursor: pointer;
  background-color: #1b1b1b;
  color: white;
  border-radius: 0.25rem;
}

input[type='date']::-webkit-calendar-picker-indicator {
  filter: invert(1) brightness(0.8); /* This will make the icon white/light */
  opacity: 0.7;
}

input[type='date']::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
