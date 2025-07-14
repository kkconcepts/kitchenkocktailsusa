<script setup>
import AnimatedButtonAlt from '~/components/base/AnimatedButtonAlt.vue'
import { useMailchimp } from '~/composables/useMailchimp'

const { email, name, isEmailStep, handleInput, success } = useMailchimp()
</script>

<template>
  <footer class="text-white tracking-widest text-sm">
    <div
      class="flex flex-col justify-end items-end lg:flex-row leading-tight tracking-normal f-text-13-15 h-80vh"
    >
      <!-- Left: Food Image -->
      <div data-type="image" class="w-full lg:w-2/4 h-full">
        <NuxtImg
          src="/slider-7.jpg"
          alt="Kitchen + Kocktails D.C. interior"
          class="animate-image object-cover w-full h-full"
        />
      </div>
      <!-- Navigation + Information -->
      <div class="flex flex-col lg:flex-row w-full lg:w-2/4 border-warm-gray-700">
        <!-- Navigation -->
        <div
          class="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-warm-gray-700 pl-8 flex flex-col f-gap-12-24"
        >
          <div class="flex flex-col f-gap-2-4">
            <h3 class="text-white mb-6 f-text-18-25 font-gt-ultra tracking-[1.5px] uppercase">
              Navigation
            </h3>
            <ul class="flex flex-col space-y-1 f-text-12-13 font-semibold uppercase tracking-wider">
              <li class="border-b border-warm-gray-700 py-3">
                <NuxtLink
                  to="/about"
                  class="hover:opacity-50 transition-opacity duration-375 mr-auto pr-3"
                >
                  <span>About</span>
                </NuxtLink>
              </li>
              <li class="border-b border-warm-gray-700 py-3">
                <NuxtLink
                  to="/menu"
                  class="hover:opacity-50 transition-opacity duration-375 mr-auto pr-3"
                >
                  <span>Our Menu</span>
                </NuxtLink>
              </li>
              <li class="border-b border-warm-gray-700 py-3">
                <NuxtLink
                  to="/private-events"
                  class="hover:opacity-50 transition-opacity duration-375 mr-auto pr-3"
                >
                  <span>Private Dining</span>
                </NuxtLink>
              </li>
              <li class="border-b border-warm-gray-700 py-3">
                <NuxtLink
                  to="/locations"
                  class="link-with-arrow hover:opacity-50 mr-auto block transition-all duration-375 ease-in-out flex items-center justify-between pr-3"
                >
                  <span>Locations</span>
                </NuxtLink>
              </li>
              <li class="py-3">
                <NuxtLink
                  to="/events"
                  class="hover:opacity-50 transition-opacity duration-375 mr-auto pr-3"
                >
                  <span>Events</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Information -->
        <div class="w-full lg:w-1/2 pl-12 flex flex-col f-gap-12-24">
          <div class="flex flex-col f-gap-2-4">
            <h3 class="text-white mb-6 f-text-18-25 font-gt-ultra tracking-[1.5px] uppercase">
              Information
            </h3>

            <ul
              class="flex flex-col space-y-1 py-24 f-text-12-13 font-semibold uppercase tracking-wider"
            >
              <li class="border-b border-warm-gray-700 py-3">
                <NuxtLink
                  to="/contact"
                  class="hover:opacity-50 transition-opacity duration-375 mr-auto pr-3"
                >
                  <span>Contact</span>
                </NuxtLink>
              </li>
              <li class="border-b border-warm-gray-700 py-3">
                <NuxtLink
                  to="/private-events"
                  class="hover:opacity-50 transition-opacity duration-375 mr-auto pr-3"
                >
                  <span>Large Party Reservations</span>
                </NuxtLink>
              </li>
              <li class="border-b border-warm-gray-700 py-3">
                <AnimatedButtonAlt
                  text="Book a reservation"
                  aria-label="Book a reservation button alternative"
                  class="bg-transparent border-0 p-0 m-0 text-brand-accent"
                />
              </li>
            </ul>

            <div
              class="footer-col flex flex-col f-gap-4-6 items-center md:items-start justify-start"
            >
              <p class="text-center md:text-start">Get the latest updates</p>
              <div
                class="news-input relative flex flex-row w-full max-w-250px overflow-hidden mb-6"
              >
                <transition name="slide" mode="out-in">
                  <div v-if="success" class="w-full text-warmGray-800">Subscribed!</div>
                  <input
                    v-else-if="isEmailStep"
                    v-model="email"
                    class="w-full bg-transparent border-b border-b-warmgray-700 pr-24 f-text-15-15 pb-2 outline-none placeholder:text-gray-400 transition-all duration-300"
                    type="email"
                    placeholder="Enter your email"
                    @keyup.enter="handleInput"
                  />
                  <input
                    v-else
                    v-model="name"
                    class="w-full bg-transparent border-b border-b-warmgray-700 pr-24 pb-2 outline-none placeholder:text-gray-400 transition-all duration-300"
                    type="text"
                    placeholder="Enter your name"
                    @keyup.enter="handleInput"
                  />
                </transition>
                <button
                  @click="handleInput"
                  class="btn-primary absolute right-0 bottom-0 pb-2 hover:opacity-60 transition-opacity duration-300 ease-in-out"
                  aria-label="Submit button"
                >
                  <Icon name="uil:arrow-right"></Icon>
                </button>
              </div>

              <!-- Social Links -->
              <div
                class="social-icons text-lg flex flex-row justify-center md:justify-start f-gap-10-12 mb-6"
              >
                <NuxtLink
                  to="https://www.facebook.com/share/193vpd2MN7/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  class="hover:opacity-60 transition-opacity duration-300"
                >
                  <Icon name="uil:facebook-f" />
                </NuxtLink>
                <NuxtLink
                  to="https://www.tiktok.com/@kitchenkocktailsofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  class="hover:opacity-60 transition-opacity duration-300"
                >
                  <Icon name="ic:baseline-tiktok" />
                </NuxtLink>
                <NuxtLink
                  to="https://www.instagram.com/kitchenkocktailsusa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  class="hover:opacity-60 transition-opacity duration-300"
                >
                  <Icon name="uil:instagram" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Utility Links -->
    <div
      class="w-full bg-transparent border-t border-warm-gray-700 text-white text-xs text-left text-warm-gray-400"
    >
      <LayoutContain>
        <ul class="flex flex-wrap gap-x-6 gap-y-2 py-3 tracking-wider">
          <li>
            <NuxtLink
              to="/privacy-policy"
              class="nav-item f-text-10-11 font-semibold md:flex hidden uppercase tracking-wider hover:opacity-50 transition-opacity duration-375"
              >Privacy Policy</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/terms-of-service"
              class="nav-item f-text-10-11 font-semibold md:flex hidden uppercase tracking-wider hover:opacity-50 transition-opacity duration-375"
              >Terms of Service</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/cookie-policy"
              class="nav-item f-text-10-11 font-semibold md:flex hidden uppercase tracking-wider hover:opacity-50 transition-opacity duration-375"
              >Cookie Policy</NuxtLink
            >
          </li>
        </ul>
      </LayoutContain>
    </div>
  </footer>
</template>

<style scoped>
.link-with-arrow:hover .arrow-icon {
  opacity: 1;
  transform: translateX(0);
}
</style>
