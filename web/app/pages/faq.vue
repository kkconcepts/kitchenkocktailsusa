<script setup>
import { ref, computed } from 'vue'
import { ogImage } from '~/constants'

const title = ref('FAQ')
const pageDescription = ref(
  'See how Kitchen + Kocktails by Kevin Kelley collects, uses & safeguards your personal data. Transparent, secure, and customer‑focused.'
)

const pageClass = computed(() => `page page-${title.value.toLowerCase()}`)

useSeoMeta({
  title: title,
  ogTitle: title,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: ogImage,
  twitterCard: 'summary_large_image'
})

const faqs = ref([
  {
    question: 'Can I bring outside food, cakes, or drinks?',
    answer:
      'No, outside food, beverages, and cakes are not permitted. We offer a full menu of food and drinks, as well as custom cake options for special occasions.',
    isOpen: false
  },
  {
    question: "What if I'm running late for my reservation?",
    answer:
      "We offer a 15-minute grace period for late arrivals. If you arrive after the grace period, you will be placed on the waitlist. Please call the restaurant if you know you'll be late.",
    isOpen: false
  },
  {
    question: 'Do all members of my party need to be here before we are seated?',
    answer:
      'We require at least 85% of your party to be present before seating. This helps ensure a smooth dining experience for everyone.',
    isOpen: false
  },
  {
    question: 'Do you have a dress code?',
    answer:
      'Yes, we have a dress code to maintain a high standard of ambiance:\n\n• No Tank Tops\n• No Athletic Slides or Flip Flops (Regardless of brand)\n• No Crocs\n• No Explicit Clothing\n• No Sagging\n• No Revealing Attire\n• No Jerseys\n• No Hoods, Durags, Stocking Caps, etc., while dining',
    isOpen: false
  },
  {
    question: 'Can I split the bill if we have a large party?',
    answer:
      'For parties of 6 or more, we allow a maximum of 4 separate payments. We do not offer individual checks.',
    isOpen: false
  },
  {
    question: 'Do you accept reservations for large parties?',
    answer:
      'Yes, we accept reservations for parties of all sizes depending on the day of the week and availability. For parties of 6 or more, please call ahead to secure your reservation.',
    isOpen: false
  },
  {
    question: 'Is parking available at the restaurant?',
    answer:
      'Yes, there is public parking at each location. Some locations also offer valet service. Please contact us if you have any additional questions.',
    isOpen: false
  },
  {
    question: 'Do you offer vegetarian or gluten-free options?',
    answer:
      'Yes, we offer vegetarian and gluten-free options. Please refer to our menu for detailed options or ask your server for recommendations.',
    isOpen: false
  },
  {
    question: 'Can I make a reservation for special events or private dining?',
    answer:
      'Yes, we offer private dining options for special events. Please refer to the “Large Group Reservations” section on our website for your specific city to contact your event manager.',
    isOpen: false
  },
  {
    question: 'What if I need to cancel or change my reservation?',
    answer:
      'If you need to cancel or change your reservation, please let us know at least 24 hours in advance so we may open the reservation for other guests. We would love the opportunity to reschedule your dining experience with us.',
    isOpen: false
  }
])

const toggleFaq = (index) => {
  faqs.value.forEach((faq, i) => {
    faq.isOpen = i === index ? !faq.isOpen : false
  })
}
</script>

<template>
  <div class="bg-zinc-900/95" :class="pageClass">
    <section class="min-h-100vh max-w-3xl m-auto f-py-160-180">
      <LayoutContain class="">
        <div class="flex flex-col f-gap-32-48 bg-white p-12 border-3 border-brand-accent">
          <div class="flex flex-col w-full justify-start items-center">
            <h1 class="text-4xl font-gt-ultra text-center mb-10">{{ title }}</h1>
            <p class="f-text-15-17 font-light max-w-lg text-center leading-tight">
              Find answers to commonly asked questions about dining at Kitchen + Kocktails. From
              dress code and reservations to our policies and services, we're here to help make your
              dining experience exceptional.
            </p>
          </div>

          <!-- FAQ Accordion -->
          <div class="space-y-5">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="border border-gray-200 overflow-hidden"
            >
              <button
                @click="toggleFaq(index)"
                class="group w-full px-6 py-4 text-left flex justify-between items-center hover:bg-brand-accent hover:text-white duration-300 transition-colors"
                aria-label="Toggle FAQ Question"
              >
                <span class="font-regular f-text-15-17">{{ faq.question }}</span>
                <Icon
                  :name="faq.isOpen ? 'uil:angle-up' : 'uil:angle-down'"
                  :class="[
                    'w-6 h-6 transition-transform',
                    faq.isOpen ? 'text-white' : 'text-gray-500 group-hover:text-white'
                  ]"
                />
              </button>
              <div v-show="faq.isOpen" class="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p class="text-gray-600">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </LayoutContain>
    </section>
  </div>
</template>

<style scoped>
.divider {
  border-color: #e2a368;
}
</style>
