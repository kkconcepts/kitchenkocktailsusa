<script setup>
import { ogImage } from '~/constants'
import { useContact } from '~/composables/useContact'
import { ref } from 'vue'
import { useParallaxEffects } from '~/composables/useParallaxEffects'
import { useFirstScreenAnimation } from '~/composables/useFirstScreenAnimation'
import { useScrollContentAnimation } from '~/composables/useScrollContentAnimation'
import { transition } from '~/utils/transition'

definePageMeta({
  pageTransition: transition
})

useScrollContentAnimation()
useParallaxEffects()

onMounted(async () => {
  await useFirstScreenAnimation('.page-content') // or whatever wraps your content
})

const title = ref('Contact')
const pageDescription = ref(
  'Have questions, feedback, or event inquiries? Reach out to our team and well be in touch.'
)

const { form, locations, inquiryTypes, handleSubmit } = useContact()

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
  <div class="">
    <section class="max-w-90rem mx-auto f-py-160-180">
      <div class="grid grid-cols-2 gap-16">
        <!-- Left Column: Contact Info -->
        <div class="flex flex-col gap-12">
          <div class="max-w-340px">
            <h1 class="text-4xl font-gt-ultra tracking-wide mb-6 uppercase">Get in touch</h1>
            <p class="">
              Have questions, feedback, or event inquiries? Reach out to our team and we'll be in
              touch.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-gt-ultra tracking-wide mb-4">EMAIL</h2>
            <p class="">General Inquiries:</p>
            <a
              href="mailto:info@kitchenkocktailsusa.com"
              class="hover:opacity-60 transition-opacity duration-300 ease-in-out"
            >
              info@kitchenkocktailsusa.com
            </a>
          </div>

          <div>
            <h2 class="text-2xl font-gt-ultra tracking-wide mb-6">SOCIALS</h2>
            <div class="social-links flex space-x-4 f-text-16-18">
              <NuxtLink
                to="https://www.facebook.com/share/193vpd2MN7/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kitchen + Kocktails on Facebook"
                class="hover:opacity-60 transition-opacity duration-300 ease-in-out"
              >
                <Icon name="uil:facebook-f" />
              </NuxtLink>
              <NuxtLink
                to="https://www.tiktok.com/@kitchenkocktailsofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kitchen + Kocktails on Facebook"
                class="hover:opacity-60 transition-opacity duration-300 ease-in-out"
              >
                <Icon name="ic:baseline-tiktok" />
              </NuxtLink>
              <NuxtLink
                to="https://www.instagram.com/kitchenkocktailsusa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kitchen + Kocktails on Facebook"
                class="hover:opacity-60 transition-opacity duration-300 ease-in-out"
              >
                <Icon name="uil:instagram" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Right Column: Contact Form -->
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-6 px-12">
          <!-- Name Fields -->
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col">
              <label for="firstName" class="text-sm mb-2">First Name*</label>
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                required
                placeholder="John"
                class="px-4 py-2 rounded-0.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 placeholder:text-gray-400"
              />
            </div>
            <div class="flex flex-col">
              <label for="lastName" class="text-sm mb-2">Last Name*</label>
              <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                required
                placeholder="Doe"
                class="px-4 py-2 rounded-0.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 placeholder:text-gray-400"
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
                placeholder="your.email@example.com"
                class="px-4 py-2 rounded-0.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 placeholder:text-gray-400"
              />
            </div>
            <div class="flex flex-col">
              <label for="phone" class="text-sm mb-2">Phone Number*</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                placeholder="(123) 456-7890"
                class="px-4 py-2 rounded-0.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 placeholder:text-gray-400"
              />
            </div>
          </div>

          <!-- Location and Inquiry Type Fields -->
          <div class="grid grid-cols-2 gap-4">
            <!-- Location Field -->
            <div class="flex flex-col">
              <label for="location" class="text-sm mb-2">Location*</label>
              <div class="relative inline-flex items-center w-full">
                <Icon name="uil:location-point" class="absolute left-2 text-brand-accent w-4 h-4" />
                <select
                  id="location"
                  v-model="form.location"
                  required
                  class="w-full rounded-0.5 pl-8 pr-8 py-2.5 appearance-none focus:outline-none font-regular text-sm text-gray-900"
                >
                  <option value="" disabled class="text-gray-400">Select a location</option>
                  <option
                    v-for="location in locations"
                    :key="location.value"
                    :value="location.value"
                  >
                    {{ location.label }}
                  </option>
                </select>
                <Icon name="uil:angle-down" class="absolute right-2 w-4 h-4" />
              </div>
            </div>

            <!-- Inquiry Type Field -->
            <div class="flex flex-col">
              <label for="inquiryType" class="text-sm mb-2">Inquiry Type*</label>
              <div class="relative inline-flex items-center w-full">
                <Icon name="uil:file-alt" class="absolute left-2 text-brand-accent w-4 h-4" />
                <select
                  id="inquiryType"
                  v-model="form.inquiryType"
                  required
                  class="w-full pl-8 rounded-0.5 pr-8 py-2.5 appearance-none focus:outline-none font-regular text-sm text-gray-900"
                >
                  <option value="" disabled class="text-gray-400">Select inquiry type</option>
                  <option v-for="type in inquiryTypes" :key="type.value" :value="type.value">
                    {{ type.label }}
                  </option>
                </select>
                <Icon name="uil:angle-down" class="absolute right-2 w-4 h-4" />
              </div>
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
              placeholder="Please tell us how we can help you..."
              class="px-4 py-2.5 rounded-0.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 placeholder:text-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            class="f-text-12-13 font-semibold uppercase rounded-0.5 bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
            aria-label="Submit Contact Form"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
    <section>
      <SectionsLocationsAlt />
    </section>
  </div>
</template>

<style scoped></style>
