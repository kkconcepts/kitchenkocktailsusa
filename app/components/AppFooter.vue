<script setup>
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
  { name: 'sitemap', path: '/sitemap', label: 'Sitemap' }
]
</script>

<template>
  <div class="app-footer-top">
    <nav>
      <div class="logo w-45 m-auto mb-12">
        <NuxtLink to="/">
          <NuxtImg src="/logo-dark.png" alt="Kitchen + Kocktails" />
        </NuxtLink>
      </div>
      <ul class="flex items-center justify-center gap-8 mb-16">
        <li v-for="link in links" :key="link.name">
          <NuxtLink :to="link.path">{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
  <div class="app-footer-middle">
    <LayoutContain>
      <div class="grid grid-cols-3 gap-8 f-py-24-48">
        <div class="footer-col flex flex-col f-gap-2-4 justify-start">
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
          <div class="city-change flex flex-row f-gap-4-8">
            <p>Charlotte</p>
            <p class="text-[#E2A368]">
              Change city <span><Icon name="uil:angle-down"></Icon></span>
            </p>
          </div>
        </div>
        <div class="footer-col flex flex-col f-gap-2-4 justify-end">
          <h3 class="text-end">Stay up to date</h3>
          <div class="social-icons flex flex-row justify-end f-gap-2-4">
            <Icon name="uil:facebook-f" />
            <Icon name="uil:twitter" />
            <Icon name="uil:instagram" />
          </div>
        </div>
      </div>
    </LayoutContain>
  </div>
  <div class="app-footer">
    <div class="app-footer-inner f-gap-24-48 min-h-40vh">
      <div class="app-footer-btm flex flex-col h-full f-gap-4-8 text-center">
        <nav>
          <ul class="flex gap-4">
            <li v-for="link in lowerLinks" :key="link.name">
              <NuxtLink :to="link.path">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <p class="text-[#E2A368]">© Kitchen + Kocktails by Kevin Kelley</p>
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
