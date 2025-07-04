<script setup>
import { ref, computed } from 'vue'
import { useMailchimp } from '~/composables/useMailchimp'

const links = [
  { name: 'about', path: '/about', label: 'About' },
  { name: 'menu', path: '/menu', label: 'Our Menu' },
  { name: 'locations', path: '/locations', label: 'Locations' },
  { name: 'private events', path: '/private-events', label: 'Private Events' },
  { name: 'contact', path: '/contact', label: 'Contact' }
]

const lowerLinks = [
  { name: 'privacy policy', path: '/privacy-policy', label: 'Privacy Policy' },
  { name: 'terms of service', path: '/terms-of-service', label: 'Terms of Service' },
  { name: 'cookie policy', path: '/cookie-policy', label: 'Cookie Policy' },
  { name: 'faq', path: '/faq', label: 'FAQ' }
]

const cities = [
  {
    name: 'Atlanta',
    kitchen: [
      { days: 'Mon–Thu', hours: '11am - 10pm' },
      { days: 'Fri', hours: '11am - 11pm' },
      { days: 'Sat', hours: '10am - 11pm' },
      { days: 'Sunday', hours: '10am - 11pm' }
    ],
    bar: [
      { days: 'Mon–Thu', hours: '11am - 10pm' },
      { days: 'Fri', hours: '11am - 11pm' },
      { days: 'Sat', hours: '10am - 11pm' },
      { days: 'Sunday', hours: '10am - 11pm' }
    ]
  },
  {
    name: 'Chicago',
    kitchen: [
      { days: 'Mon–Thu', hours: '5pm - 10pm' },
      { days: 'Fri', hours: '11am - 12am' },
      { days: 'Sat', hours: '11am - 12am' },
      { days: 'Sunday', hours: '11am - 11pm' }
    ],
    bar: [
      { days: 'Mon–Thu', hours: '5pm - 10pm' },
      { days: 'Fri', hours: '11am - 12am' },
      { days: 'Sat', hours: '11am - 12am' },
      { days: 'Sunday', hours: '11am - 11pm' }
    ]
  },
  {
    name: 'Charlotte',
    kitchen: [
      { days: 'Mon–Thu', hours: '11am - 10pm' },
      { days: 'Fri', hours: '11am - 11pm' },
      { days: 'Sat', hours: '11am - 12am' },
      { days: 'Sunday', hours: '11am - 10pm' }
    ],
    bar: [
      { days: 'Mon–Thu', hours: '11am - 10pm' },
      { days: 'Fri', hours: '11am - 11pm' },
      { days: 'Sat', hours: '11am - 12am' },
      { days: 'Sunday', hours: '11am - 10pm' }
    ]
  },
  {
    name: 'Dallas',
    kitchen: [
      { days: 'Mon–Thu', hours: '11am - 10pm' },
      { days: 'Fri', hours: '11am - 11pm' },
      { days: 'Sat', hours: '10am - 11pm' },
      { days: 'Sunday', hours: '10am - 11pm' }
    ],
    bar: [
      { days: 'Mon–Thu', hours: '11am - 10pm' },
      { days: 'Fri', hours: '11am - 11pm' },
      { days: 'Sat', hours: '10am - 11pm' },
      { days: 'Sunday', hours: '10am - 11pm' }
    ]
  },
  {
    name: 'Washington D.C.',
    kitchen: [
      { days: 'Mon–Thu', hours: '11am - 10pm' },
      { days: 'Fri', hours: '11am - 11pm' },
      { days: 'Sat', hours: '10am - 11pm' },
      { days: 'Sunday', hours: '10am - 10pm' }
    ],
    bar: [
      { days: 'Mon–Thu', hours: '11am - 10pm' },
      { days: 'Fri', hours: '11am - 11pm' },
      { days: 'Sat', hours: '10am - 11pm' },
      { days: 'Sunday', hours: '10am - 10pm' }
    ]
  }
]

const selectedCity = ref(cities[0].name)

const current = computed(() => {
  return cities.find((c) => c.name === selectedCity.value)
})

const dropdownOpen = ref(false)

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function selectCity(city) {
  selectedCity.value = city
  dropdownOpen.value = false
}

const { email, name, isEmailStep, handleInput } = useMailchimp()
</script>

<template>
  <footer class="footer text-warmGray-800">
    <div class="app-footer-top f-pt-24-48 f-mb-64-72">
      <nav>
        <div class="logo w-38 m-auto mb-12">
          <NuxtImg
            src="/logo-dark.png"
            alt="Kitchen + Kocktails"
            class="object-fit"
            quality="80"
            format="webp"
          />
        </div>
      </nav>
    </div>
    <div class="app-footer-middle">
      <LayoutContain class="max-w-90rem">
        <div class="grid grid-cols-1 px-6 md:grid-cols-3 gap-8 f-mb-100-140">
          <div
            class="footer-col flex flex-col f-gap-2-4 items-center md:items-start justify-start order-1"
          >
            <h3 class="text-center md:text-start">Get the latest updates</h3>
            <div class="news-input relative flex flex-row w-full max-w-250px overflow-hidden">
              <transition name="slide" mode="out-in">
                <input
                  v-if="isEmailStep"
                  v-model="email"
                  class="w-full bg-transparent border-b border-gray-200 pr-24 f-text-15-15 pb-2 outline-none placeholder:text-gray-400 transition-all duration-300"
                  type="email"
                  placeholder="Enter your email"
                  @keyup.enter="handleInput"
                />
                <input
                  v-else
                  v-model="name"
                  class="w-full bg-transparent border-b border-gray-200 pr-24 pb-2 outline-none placeholder:text-gray-400 transition-all duration-300"
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
          </div>
          <div
            class="footer-col flex flex-col justify-start items-center f-gap-4-8 order-3 md:order-2"
          >
            <h3 class="text-center font-semibold">Hours</h3>
            <div class="relative flex flex-col items-center w-full">
              <div class="flex items-center justify-center gap-2 mb-4">
                <p class="font-medium">Change city</p>
                <div class="relative inline-block">
                  <button
                    @click="toggleDropdown"
                    class="flex items-center text-brand-accent font-medium cursor-pointer"
                    aria-label="Toggle dropdown button"
                  >
                    {{ selectedCity }}
                    <Icon name="uil:angle-down" class="ml-1 text-sm" />
                  </button>
                  <ul
                    v-show="dropdownOpen"
                    class="absolute left-1/2 -translate-x-1/2 z-50 mt-2 bg-white/80 backdrop-blur-md text-black border border-gray-200 rounded shadow w-48 text-sm"
                  >
                    <li
                      v-for="city in cities"
                      :key="city.name"
                      @click="selectCity(city.name)"
                      class="px-4 py-2 hover:bg-gray-100/80 cursor-pointer whitespace-nowrap text-center relative group"
                    >
                      <span class="relative">
                        {{ city.name }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            class="footer-col flex flex-col f-gap-2-4 items-center md:items-end justify-start order-2 md:order-3 mb-8 md:mb-0"
          >
            <h3 class="text-center md:text-end">Stay up to date</h3>
            <div class="social-icons text-xl flex flex-row justify-center md:justify-end f-gap-4-8">
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
      </LayoutContain>
      <div class="relative px-4 md:px-0">
        <div
          class="absolute left-1/2 -translate-x-1/2 -bottom-85 md:-bottom-32 bg-white text-black p-6 w-[calc(100%-2rem)] md:w-full max-w-4xl flex flex-col md:flex-row gap-6 text-md z-10"
        >
          <!-- Kitchen Column -->
          <div class="flex-1">
            <h4 class="font-bold mb-6 text-center text-xl">Kitchen</h4>
            <div v-for="row in current.kitchen" :key="row.days" class="flex justify-between py-1">
              <span>{{ row.days }}</span>
              <span :class="{ 'text-red-500 font-semibold': row.hours === 'Closed' }">{{
                row.hours
              }}</span>
            </div>
          </div>

          <!-- Divider Line -->
          <div class="hidden md:block w-1px bg-" />

          <!-- Bar Column -->
          <div class="flex-1">
            <h4 class="font-bold text-xl mb-6 text-center">Bar</h4>
            <div v-for="row in current.bar" :key="row.days" class="flex justify-between py-1">
              <span>{{ row.days }}</span>
              <span :class="{ 'text-red-500 font-semibold': row.hours === 'Closed' }">{{
                row.hours
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-footer bg-zinc-900">
      <div class="app-footer-inner pt-35 f-gap-24-48 min-h-65vh md:min-h-35vh">
        <div class="app-footer-btm flex flex-col h-full f-gap-4-8 text-center px-4 md:px-0">
          <ul class="flex items-center justify-center space-x-8 px-4 flex-wrap text-white">
            <li v-for="link in links" :key="link.name">
              <NuxtLink :to="link.path">{{ link.label }}</NuxtLink>
            </li>
          </ul>
          <nav class="w-full md:overflow-visible">
            <ul
              class="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-7 w-full md:min-w-0 mb-4 md:mb-4"
            >
              <li v-for="link in lowerLinks" :key="link.name" class="text-center">
                <NuxtLink :to="link.path" :scroll="false" class="text-sm md:text-base">{{
                  link.label
                }}</NuxtLink>
              </li>
            </ul>
          </nav>
          <p class="text-brand-accent text-sm md:text-base break-words">
            © Kitchen + Kocktails by Kevin Kelley
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  display: block;
  position: relative;
  width: 100%;
  z-index: 1;
  color: #fff;
}

.app-footer-inner {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 2rem;
}

.btn-primary {
  background: transparent;
  font-weight: 500;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
