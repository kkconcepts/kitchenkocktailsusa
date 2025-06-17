<template>
  <div class="relative min-h-screen f-py-160-180">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none"
      style="background-image: url('/hero-4.jpg')"
    ></div>

    <!-- Content with backdrop blur -->
    <div class="relative max-w-3xl mx-auto px-12 bg-white f-py-32-48">
      <h1 class="text-3xl font-gt-ultra tracking-wide uppercase text-center mb-12">
        Make a Private Event Request
      </h1>

      <!-- Progress Steps -->
      <div class="flex justify-between mb-8">
        <div class="flex items-center">
          <div
            :class="[
              `w-8 h-8 flex items-center justify-center`,
              currentStep === 1
                ? 'bg-brand-accent text-white'
                : 'border-2 border-gray-300 text-gray-500'
            ]"
          >
            1
          </div>
          <span class="ml-2">Event Details</span>
        </div>
        <div class="flex items-center">
          <div
            :class="[
              `w-8 h-8 flex items-center justify-center`,
              currentStep === 2
                ? 'bg-brand-accent text-white'
                : 'border-2 border-gray-300 text-gray-500'
            ]"
          >
            2
          </div>
          <span class="ml-2">Contact Details</span>
        </div>
        <div class="flex items-center">
          <div
            :class="[
              `w-8 h-8 flex items-center justify-center`,
              currentStep === 3
                ? 'bg-brand-accent text-white'
                : 'border-2 border-gray-300 text-gray-500'
            ]"
          >
            3
          </div>
          <span class="ml-2">Review Details</span>
        </div>
      </div>

      <!-- Step 1: Event Details -->
      <div v-if="currentStep === 1">
        <div class="flex flex-col mb-6">
          <label class="text-sm font-medium text-gray-700 mb-2">Select Location*</label>
          <div class="relative">
            <select
              v-model="formData.location"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-none appearance-none focus:ring-0 focus:border-gray-400 bg-white"
              required
            >
              <option value="" disabled>Select a location</option>
              <option value="atlanta">Atlanta</option>
              <option value="chicago">Chicago</option>
              <option value="charlotte">Charlotte</option>
              <option value="dallas">Dallas</option>
              <option value="washington-dc">Washington D.C.</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
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
          <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col">
                <label class="text-sm font-medium text-gray-700 mb-2">Date you wish to book*</label>
                <input
                  type="date"
                  v-model="formData.date"
                  class="w-full px-4 py-2.5 border border-gray-300 rounded-none focus:ring-0 focus:border-gray-400"
                  placeholder="mm/dd/yyyy"
                  required
                />
              </div>
              <div class="flex flex-col">
                <label class="text-sm font-medium text-gray-700 mb-2">Select Time*</label>
                <div class="relative">
                  <select
                    v-model="formData.time"
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-none appearance-none focus:ring-0 focus:border-gray-400 bg-white"
                    required
                  >
                    <option value="" disabled>Select a time</option>
                    <option value="lunch">Lunch (11:00 AM - 3:00 PM)</option>
                    <option value="dinner">Dinner (5:00 PM - 10:00 PM)</option>
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

            <div class="flex flex-col">
              <label class="text-sm font-medium text-gray-700 mb-2"
                >Purpose for group/private event*</label
              >
              <div class="relative">
                <select
                  v-model="formData.purpose"
                  class="w-full px-4 py-2.5 border border-gray-300 rounded-none appearance-none focus:ring-0 focus:border-gray-400 bg-white"
                  required
                >
                  <option value="" disabled>Select a purpose</option>
                  <option value="birthday">Birthday Celebration</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding Related</option>
                  <option value="other">Other</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
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
              <label class="text-sm font-medium text-gray-700 mb-2"
                >Number of guests in your party*</label
              >
              <input
                type="number"
                v-model="formData.guests"
                min="1"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-none focus:ring-0 focus:border-gray-400"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Any Special Requests</label
              >
              <textarea
                v-model="formData.specialRequests"
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 focus:ring-brand-accent focus:border-brand-accent"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Step 2: Contact Details -->
        <div v-if="currentStep === 2" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col">
              <label class="text-sm font-medium text-gray-700 mb-2">First Name*</label>
              <input
                type="text"
                v-model="formData.firstName"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-none focus:ring-0 focus:border-gray-400"
                required
              />
            </div>
            <div class="flex flex-col">
              <label class="text-sm font-medium text-gray-700 mb-2">Last Name*</label>
              <input
                type="text"
                v-model="formData.lastName"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-none focus:ring-0 focus:border-gray-400"
                required
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col">
              <label class="text-sm font-medium text-gray-700 mb-2">Email Address*</label>
              <input
                type="email"
                v-model="formData.email"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-none focus:ring-0 focus:border-gray-400"
                required
              />
            </div>
            <div class="flex flex-col">
              <label class="text-sm font-medium text-gray-700 mb-2">Phone Number*</label>
              <input
                type="tel"
                v-model="formData.phone"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-none focus:ring-0 focus:border-gray-400"
                required
              />
            </div>
          </div>

          <div class="flex flex-col">
            <label class="text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
            <input
              type="text"
              v-model="formData.company"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-none focus:ring-0 focus:border-gray-400"
            />
          </div>

          <div class="flex flex-col">
            <label class="text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
            <textarea
              v-model="formData.notes"
              rows="4"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-none focus:ring-0 focus:border-gray-400 resize-none"
            ></textarea>
          </div>
        </div>

        <!-- Step 3: Review Details -->
        <div v-if="currentStep === 3" class="space-y-6">
          <div class="bg-white p-6 shadow-sm border border-gray-200">
            <h3 class="font-bold mb-4">Review Your Event Details</h3>
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-sm font-medium text-gray-500">Date:</p>
                  <p>{{ formData.date }}</p>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-500">Time:</p>
                  <p>
                    {{
                      formData.time === 'lunch'
                        ? 'Lunch (11:00 AM - 3:00 PM)'
                        : 'Dinner (5:00 PM - 10:00 PM)'
                    }}
                  </p>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-500">Number of Guests:</p>
                  <p>{{ formData.guests }}</p>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-500">Event Purpose:</p>
                  <p>{{ formData.purpose }}</p>
                </div>
                <div class="col-span-2">
                  <p class="text-sm font-medium text-gray-500">Special Requests:</p>
                  <p>{{ formData.specialRequests || 'None' }}</p>
                </div>
              </div>

              <div class="border-t pt-4 mt-4">
                <h4 class="font-bold mb-2">Contact Information</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-sm font-medium text-gray-500">Name:</p>
                    <p>{{ formData.firstName }} {{ formData.lastName }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Email:</p>
                    <p>{{ formData.email }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Phone:</p>
                    <p>{{ formData.phone }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex justify-between pt-6">
          <button
            v-if="currentStep > 1"
            @click="previousStep"
            class="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            v-else
            @click="cancel"
            class="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            v-if="currentStep < 3"
            @click="nextStep"
            class="px-6 py-2 bg-brand-accent text-white hover:bg-brand-accent/90"
            :disabled="!isStepValid"
          >
            Continue
          </button>
          <button
            v-else
            @click="submitForm"
            class="px-6 py-2 bg-brand-accent text-white hover:bg-brand-accent/90"
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentStep = ref(1)

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
      formData.value.date && formData.value.time && formData.value.guests && formData.value.purpose
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
  router.push('/')
}

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', formData.value)
  // Add your submission logic here
}
</script>
