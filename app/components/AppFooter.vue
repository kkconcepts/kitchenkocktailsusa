<script setup>
import { ref, computed } from 'vue'

const links = [
  { name: 'about', path: '/about', label: 'About' },
  { name: 'menu', path: '/menu', label: 'Our Menu' },
  { name: 'locations', path: '/locations', label: 'Locations' },
  { name: 'private events', path: '/private-events', label: 'Private Events' },
  { name: 'reservations', path: '/reservations', label: 'Reservations' },
  {
    name: 'Order Online',
    path: 'https://order.toasttab.com/online/kitchen-kocktails-dallas-1933-elm-street',
    label: 'Order Online'
  },
  { name: 'contact', path: '/contact', label: 'Contact' }
]

const lowerLinks = [
  { name: 'privacy policy', path: '/privacy-policy', label: 'Privacy Policy' },
  { name: 'terms of service', path: '/terms-of-service', label: 'Terms of Service' },
  { name: 'cookie policy', path: '/cookie-policy', label: 'Cookie Policy' },
  { name: 'careers', path: '/careers', label: 'Careers' }
]

const cities = [
  {
    name: 'Atlanta',
    kitchen: [
      { days: 'Mon–Tue', hours: 'Closed' },
      { days: 'Wed–Thu', hours: '7 – 11:45 PM' },
      { days: 'Fri–Sat', hours: '7 – 11:45 PM' },
      { days: 'Sunday', hours: '7 – 11:45 PM' }
    ],
    bar: [
      { days: 'Mon–Tue', hours: 'Closed' },
      { days: 'Wed–Thu', hours: '7 – 11:45 PM' },
      { days: 'Fri–Sat', hours: '7 – 11:45 PM' },
      { days: 'Sunday', hours: '7 – 11:45 PM' }
    ]
  },
  {
    name: 'Chicago',
    kitchen: [
      { days: 'Mon–Tue', hours: 'Closed' },
      { days: 'Wed–Thu', hours: '7 – 10:45 PM' },
      { days: 'Fri–Sat', hours: '7 – 11:45 PM' },
      { days: 'Sunday', hours: '7 – 11:45 PM' }
    ],
    bar: [
      { days: 'Mon–Tue', hours: 'Closed' },
      { days: 'Wed–Thu', hours: '7 – 11:45 PM' },
      { days: 'Fri–Sat', hours: '7 – 11:45 PM' },
      { days: 'Sunday', hours: '7 – 11:45 PM' }
    ]
  },
  {
    name: 'Charlotte',
    kitchen: [
      { days: 'Mon–Tue', hours: 'Closed' },
      { days: 'Wed–Thu', hours: '7 – 11:45 PM' },
      { days: 'Fri–Sat', hours: '7 – 11:45 PM' },
      { days: 'Sunday', hours: '7 – 11:45 PM' }
    ],
    bar: [
      { days: 'Mon–Tue', hours: 'Closed' },
      { days: 'Wed–Thu', hours: '7 – 11:45 PM' },
      { days: 'Fri–Sat', hours: '7 – 11:45 PM' },
      { days: 'Sunday', hours: '7 – 11:45 PM' }
    ]
  },
  {
    name: 'Dallas',
    kitchen: [
      { days: 'Mon–Tue', hours: 'Closed' },
      { days: 'Wed–Thu', hours: '7 – 11:45 PM' },
      { days: 'Fri–Sat', hours: '7 – 11:45 PM' },
      { days: 'Sunday', hours: '7 – 11:45 PM' }
    ],
    bar: [
      { days: 'Mon–Tue', hours: 'Closed' },
      { days: 'Wed–Thu', hours: '7 – 11:45 PM' },
      { days: 'Fri–Sat', hours: '7 – 11:45 PM' },
      { days: 'Sunday', hours: '7 – 11:45 PM' }
    ]
  },
  {
    name: 'Washington D.C.',
    kitchen: [
      { days: 'Mon–Tue', hours: 'Closed' },
      { days: 'Wed–Thu', hours: '7 – 11:45 PM' },
      { days: 'Fri–Sat', hours: '7 – 11:45 PM' },
      { days: 'Sunday', hours: '7 – 11:45 PM' }
    ],
    bar: [
      { days: 'Mon–Tue', hours: 'Closed' },
      { days: 'Wed–Thu', hours: '7 – 11:45 PM' },
      { days: 'Fri–Sat', hours: '7 – 11:45 PM' },
      { days: 'Sunday', hours: '7 – 11:45 PM' }
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
</script>

<template>
  <div class="footer">
    <div class="app-footer-top f-pt-24-48 f-mb-64-72">
      <nav>
        <div class="logo w-45 m-auto mb-12">
          <NuxtLink to="/">
            <NuxtImg src="/logo-dark.png" alt="Kitchen + Kocktails" />
          </NuxtLink>
        </div>
        <ul class="flex items-center justify-center gap-8">
          <li v-for="link in links" :key="link.name">
            <NuxtLink :to="link.path">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="app-footer-middle">
      <LayoutContain>
        <div class="grid grid-cols-3 gap-8 f-mb-100-140">
          <div class="footer-col flex flex-col f-gap-2-4 items-start justify-start">
            <h3 class="text-start">Get the latest updates</h3>
            <div class="news-input relative flex flex-row w-full max-w-250px">
              <input
                class="w-full bg-transparent border-b border-gray-200 pr-24 pb-2 outline-none placeholder:text-gray-400"
                type="email"
                placeholder="Enter your email"
              />
              <button class="btn-primary absolute right-0 bottom-0 pb-2">
                <Icon name="uil:arrow-right"></Icon>
              </button>
            </div>
          </div>
          <div class="footer-col flex flex-col items-center f-gap-4-8">
            <h3 class="text-4xl font-bold">Hours</h3>
            <div class="relative flex flex-row f-gap-4-8 items-center">
              <p class="font-medium">Change city</p>
              <button
                @click="toggleDropdown"
                class="flex items-center text-[#E2A368] font-medium cursor-pointer"
              >
                {{ selectedCity }}
                <Icon name="uil:angle-down" class="ml-1 text-sm" />
              </button>
              <ul
                v-show="dropdownOpen"
                class="absolute z-12 mt-2 bg-white text-black border border-gray-200 rounded shadow w-max text-sm"
              >
                <li
                  v-for="city in cities"
                  :key="city.name"
                  @click="selectCity(city.name)"
                  class="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                >
                  {{ city.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-col flex flex-col f-gap-2-4 items-end justify-start">
            <h3 class="text-end">Stay up to date</h3>
            <div class="social-icons text-xl flex flex-row justify-end f-gap-4-8">
              <NuxtLink
                to="https://www.facebook.com/share/193vpd2MN7/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                ><Icon name="uil:facebook-f"
              /></NuxtLink>
              <NuxtLink
                to="https://www.facebook.com/share/193vpd2MN7/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                ><Icon name="uil:twitter"
              /></NuxtLink>
              <NuxtLink
                to="https://www.instagram.com/kitchenkocktailsusa/"
                target="_blank"
                rel="noopener noreferrer"
                ><Icon name="uil:instagram"
              /></NuxtLink>
            </div>
          </div>
        </div>
      </LayoutContain>
      <div class="relative">
        <div
          class="absolute left-1/2 -translate-x-1/2 -bottom-32 bg-white border text-black p-8 shadow-md w-full max-w-4xl grid flex flex-row gap-6 text-sm z-10"
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
          <div class="w-px bg-gray-200 mx-4"></div>

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
    <div class="app-footer">
      <div class="app-footer-inner pt-44 f-gap-24-48 min-h-35vh">
        <div class="app-footer-btm flex flex-col h-full f-gap-4-8 text-center">
          <!-- In the lower links section -->
          <nav>
            <ul class="flex gap-4">
              <li v-for="link in lowerLinks" :key="link.name">
                <NuxtLink :to="link.path" :scroll="false">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </nav>
          <p class="text-[#E2A368]">© Kitchen + Kocktails by Kevin Kelley</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-footer {
  display: block;
  position: relative;
  width: 100%;
  z-index: 1;
  background-color: #1b1d21;
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
</style>
