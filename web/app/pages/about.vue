<script setup>
import { ogImage } from '~/constants'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref } from 'vue'
import { onMounted } from 'vue'
import AnimatedButton from '~/components/base/AnimatedButton.vue'

gsap.registerPlugin(ScrollTrigger)

const title = ref('About us')
const pageDescription = ref(
  'Kitchen + Kocktails by Kevin Kelley is revolutionizing the way Americans enjoy elevated comfort food.'
)

useSeoMeta({
  title: title,
  ogTitle: title,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: ogImage,
  twitterCard: 'summary_large_image'
})

onMounted(() => {
  if (process.client) {
    gsap.utils.toArray('.stagger-fade-in').forEach((element) => {
      gsap.set(element, { autoAlpha: 0 }) // Set initial state
      gsap.to(element, {
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.1,
        y: -5,
        ease: 'cubic.out',
        delay: 1.25
      })
    })
    gsap.from('.hero-about-fade-in', {
      autoAlpha: 0,
      duration: 1,
      ease: 'cubic.inOut',
      stagger: 0.5
    })

    // Add opacity animation to sections
    gsap.utils.toArray('.scroll-fade').forEach((element) => {
      gsap.set(element, { opacity: 0 }) // Set initial state

      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%', // Starts animation when element is 80% from the top of the viewport
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        animation: gsap.to(element, {
          opacity: 1,
          duration: 0.8,
          ease: 'cubic.out'
        })
      })
    })

    gsap.utils.toArray('.card-fade').forEach((element) => {
      gsap.set(element, { opacity: 0 }) // Set initial state

      ScrollTrigger.create({
        trigger: element,
        start: 'top 60%', // Starts animation when element is 80% from the top of the viewport
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        animation: gsap.to(element, {
          opacity: 1,
          duration: 0.8,
          ease: 'ease.out'
        })
      })
    })

    // Add staggered animation for multiple elements in a container
    gsap.utils.toArray('.stagger-container').forEach((container) => {
      const elements = container.children

      ScrollTrigger.create({
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        animation: gsap.to(elements, {
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.15,
          y: -15,
          ease: 'power1.out'
        })
      })
    })
  }
})
</script>

<template>
  <div class="">
    <section>
      <SectionsHeroPage title="About Us" image="/hero-3.jpg" />
    </section>
    <section class="min-h-100vh m-auto f-py-80-120">
      <LayoutContain>
        <div class="flex flex-col f-gap-32-48 lg:space-y-14 space-y-4">
          <div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div class="flex flex-col gap-8">
                <div class="relative h-[400px] overflow-hidden md:h-800px">
                  <NuxtImg
                    src="/kitchen-and-kocktails-kevin-kelley.jpeg"
                    alt="Chef preparing food"
                    class="w-full h-full object-cover"
                    quality="80"
                    format="webp"
                    loading="lazy"
                    data-speed="0.9"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-5">
                <div class="flex flex-col">
                  <p
                    class="text-xs mb-4 text-start uppercase tracking-0.5 font-semibold text-brand-accent"
                  ></p>
                  <h3
                    class="f-text-24-56 leading-[95%] font-gt-ultra text-start uppercase tracking-wide mb-8"
                  >
                    About us
                  </h3>
                </div>
                <p class="f-text-15-17 font-regular max-w-md tracking-tight leading-tight mb-4">
                  Kitchen + Kocktails by Kevin Kelley is revolutionizing the way Americans enjoy
                  elevated comfort food. Mr. Kevin Kelley, the owner, is a serial entrepreneur. Mr.
                  Kevin Kelley was living abroad in Paris, France after finding success as a
                  litigation attorney in Dallas, Texas at the Kelley Law Firm. Upon returning to the
                  United States, Mr. Kelley realized how much he missed the food that reminded him
                  of home while overseas. Through this experience, he decided on his next endeavor:
                  to open a beautifully designed, elevated comfort food dining room. From there,
                  Kevin Kelley had a vision. Why don't we have a restaurant in a prime location
                  where we can feel good about ourselves, with great cocktails and soul food?
                  Answering this question set him on a path to find a location to bring this idea to
                  life. Unfortunately, in Dallas, no one with prime locations would lease a building
                  to him for imprudent reasons. Kevin's response was to buy the historic East
                  building on Elm st. outright. This is how Kitchen + Kocktails by Kevin Kelley came
                  to life in a prime location and historic landmark of Dallas, Texas. Kitchen +
                  Kocktails was introduced to the Dallas restaurant market in May of 2020, during
                  the pandemic.
                </p>
                <div class="justify-self-end flex items-center space-x-4">
                  <button
                    class="f-text-12-13 font-semibold uppercase rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                    aria-label="View our menu button"
                  >
                    View our menu
                  </button>
                  <AnimatedButton
                    text="Book a reservation"
                    aria-label="Book a reservation button"
                    button-class="border-1 border-brand-accent bg-transparent hover:ease-in-out text-brand-accent"
                  />
                </div>
              </div>
            </div>
          </div>
          <section>
            <div class="flex flex-col gap-4">
              <h1
                class="f-text-24-40 leading-9 tracking-0.25 font-gt-ultra font-medium text-start uppercase mb-2"
              >
                Our Locations
              </h1>
              <div class="divider bg-white/20 h-0.25 mb-12"></div>
            </div>
            <div class="grid grid-cols-3 f-gap-48-96 h-70vh mb-40">
              <NuxtImg
                src="/hero-7.jpeg"
                alt="Restaurant interior"
                class="w-full h-full object-cover"
                quality="80"
                format="webp"
                loading="lazy"
              />
              <NuxtImg
                src="/hero-8.jpeg"
                alt="Restaurant interior"
                class="w-full h-full object-cover"
                quality="80"
                format="webp"
                loading="lazy"
              />
              <NuxtImg
                src="/hero-9.jpg"
                alt="Restaurant interior"
                class="w-full h-full object-cover"
                quality="80"
                format="webp"
                loading="lazy"
              />
            </div>
            <div class="flex flex-col justify-end items-end gap-0">
              <div class="flex flex-col justify-start max-w-2xl w-full">
                <p
                  class="f-text-11-12 text-start tracking-0.25 font-semibold uppercase text-brand-accent mb-6"
                >
                  Expanding our dishes to your city
                </p>
                <p class="f-text-15-17 max-w-xl tracking-tight leading-tight mb-12">
                  By 2023 we've added two additional locations in Chicago, IL and Washington, D.C.
                  The company has its sights on at least five additional locations in 2023, alone.
                  Every food item, crafted cocktail and dessert is carefully created, tasted and
                  selected by Kevin Kelley himself. This is the time, attention and quality that
                  goes into each of our offerings.
                </p>
                <div class="flex flex-row gap-4">
                  <button
                    class="f-text-12-13 font-semibold uppercase rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                    aria-label="View our menu button"
                  >
                    View our menu
                  </button>
                  <AnimatedButton
                    text="Book a reservation"
                    aria-label="Book a reservation button"
                    button-class="border-1 border-brand-accent bg-transparent hover:ease-in-out text-brand-accent"
                  />
                </div>
              </div>
              <div class="divider bg-white/20 h-0.25 mb-12 w-full"></div>
            </div>
          </section>

          <section class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div class="flex flex-col gap-0">
              <p
                class="f-text-11-12 text-start tracking-0.25 font-semibold uppercase text-brand-accent mb-6"
              >
                title goes here
              </p>
              <h4 class="text-4xl font-gt-ultra text-start uppercase tracking-wide mb-10">
                Making our way to you
              </h4>
              <p class="f-text-15-17 max-w-xl tracking-tight leading-tight mb-12">
                By 2023 we've added two additional locations in Chicago, IL and Washington, D.C. The
                company has its sights on at least five additional locations in 2023, alone. Every
                food item, crafted cocktail and dessert is carefully created, tasted and selected by
                Kevin Kelley himself. This is the time, attention and quality that goes into each of
                our offerings. The quotes you see are Mr. Kevin Kelley's nod to living your best
                life. The artwork featured inside each location are hand selected by Mr. Kelley and
                can be reminiscent of the city's location. Kitchen + Kocktails by Kevin Kelley is
                more than just a restaurant, it is a home and a way of living your best life. The
                term at Kitchen + Kocktails by Kevin Kelley continues to scale and venture into new
                opportunities while happily serving the great cities of Dallas, Chicago and now,
                Washington, D.C.
              </p>
              <div class="justify-self-end flex items-center space-x-4">
                <button
                  class="f-text-12-13 font-semibold uppercase rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                  aria-label="View our menu button"
                >
                  View our menu
                </button>
                <AnimatedButton
                  text="Book a reservation"
                  aria-label="Book a reservation button"
                  button-class="border-1 border-brand-accent bg-transparent hover:ease-in-out text-brand-accent"
                />
              </div>
            </div>
            <div class="relative h-[400px] overflow-hidden md:h-800px">
              <NuxtImg
                src="/hero-8.jpeg"
                alt="Restaurant interior"
                class="w-full h-full object-cover"
                quality="80"
                format="webp"
                loading="lazy"
                data-speed="0.9"
              />
            </div>
          </section>
        </div>
      </LayoutContain>
    </section>
  </div>
</template>
