<script setup>
import { ogImage } from '~/constants'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedButton from '~/components/base/AnimatedButton.vue'
import { ref } from 'vue'
const title = ref('Home')
const pageDescription = ref(
  'Experience soulful Southern dining with a modern twist. Discover our signature cocktails, bold flavors, and vibrant atmosphere.'
)

gsap.registerPlugin(ScrollTrigger)

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
        delay: 1.25,
        onComplete: () => {
          gsap.to('.app-header', {
            yPercent: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'cubic.inOut'
          })
        }
      })
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
          duration: 1,
          stagger: 0.15,
          y: -25,
          ease: 'power1.out'
        })
      })
    })
  }
})

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
    <section class="section">
      <SectionsHeroPage title="America's Best Comfort Food" image="/hero-2.jpg" />
    </section>
    <section class="about-section hidden">
      <LayoutContain>
        <div class="w-full f-pt-100-120">
          <div class="flex flex-col w-full">
            <div class="flex flex-col justify-end items-start items-start w-full stagger-container">
              <h1
                class="f-text-25-28 leading-tight tracking-0.05 max-w-4xl font-gt-ultra font-medium text-start uppercase mb-6"
              >
                Kitchen + Kocktails by Kevin Kelley brings bold comfort food, drinks, and good vibes
                to Dallas. From flavored fried chicken and lobster tail to shrimp and grits and
                creative waffles, it's southern classics with a twist.
              </h1>
              <div class="divider hidden h-0.5px w-full bg-black/20" />
            </div>
          </div>
        </div>
      </LayoutContain>
    </section>
    <section id="main-content" class="about-section">
      <div class="grid grid-cols-3 f-gap-48-96 f-py-160-180">
        <div class="overflow-hidden col-span-2 min-h-60vh">
          <NuxtImg
            src="/hero-8.jpeg"
            alt="Restaurant interior"
            class="w-full h-full object-cover"
            loading="lazy"
            data-speed="0.95"
            plaecholder
          />
        </div>
        <div class="col-span-1">
          <LayoutContain>
            <div class="flex flex-col h-full gap-12 f-py-50-75 max-w-xs stagger-container">
              <div class="flex flex-col justify-end h-full gap-2">
                <p class="font-regular leading-tight f-text-15-17 mb-4">
                  Step into a space where every detail — from the food to the atmosphere — is
                  designed to make you feel welcome. With vibrant flavors, photo-worthy interiors,
                  and warm hospitality, we offer more than just a meal. It’s an experience that
                  brings people together through food, music, and unforgettable moments.
                </p>
              </div>
              <NuxtLink
                to="/about"
                class="f-text-12-13 font-semibold uppercase text-center rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                aria-label="Learn more about us button"
              >
                Learn more
              </NuxtLink>
            </div>
          </LayoutContain>
        </div>
      </div>
    </section>
    <section class="locations">
      <SectionsLocations />
    </section>
    <section class="">
      <div class="flex flex-col f-py-160-180 f-gap-160-180">
        <div class="grid grid-cols-2 f-gap-48-96 min-h-90vh">
          <div class="col-span-1 f-py-40-80">
            <LayoutContain>
              <div class="flex flex-col justify-end items-end gap-12 stagger-container">
                <div class="flex flex-col gap-4 max-w-lg">
                  <p
                    class="f-text-11-12 text-start tracking-0.25 font-semibold uppercase text-brand-accent"
                  >
                    DOWN-HOME DISHES, REFINED TASTE
                  </p>
                  <h3
                    class="f-text-24-56 leading-[95%] font-gt-ultra text-start uppercase tracking-wide mb-8"
                  >
                    Flavor You
                    <br />
                    Can Feel
                  </h3>
                  <p class="font-regular max-w-xlpx leading-tight f-text-15-17 mb-4">
                    Soulful and satisfying, our dishes are rooted in tradition but never stuck in
                    the past. From crispy fried catfish to rich, house-made sauces, everything is
                    built on bold flavors and heartfelt preparation. This is comfort food reimagined
                    with pride and purpose.
                  </p>
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
            </LayoutContain>
          </div>
          <div class="col-span-1 min-h-90vh overflow-hidden">
            <NuxtImg
              src="/slider-4.jpg"
              alt="Restaurant interior"
              class="w-full h-full object-cover"
              loading="lazy"
              data-speed="0.95"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 f-gap-24-32 min-h-90vh">
          <div class="col-span-1 overflow-hidden">
            <NuxtImg
              src="/slider-6.jpg"
              alt="Restaurant interior"
              class="w-full h-full object-cover"
              loading="lazy"
              data-speed="0.95"
            />
          </div>
          <LayoutContain>
            <div class="flex flex-col justify-start items-start gap-12 stagger-container">
              <div class="flex flex-col gap-4 max-w-lg f-py-48-64">
                <p
                  class="f-text-11-12 text-start tracking-0.25 font-semibold uppercase text-brand-accent"
                >
                  FRESH FLAVOR, SOUTHERN HEART
                </p>
                <h3
                  class="f-text-24-56 leading-[95%] font-gt-ultra text-start uppercase tracking-wide mb-8"
                >
                  Fresh
                  <br />
                  Meets Fire
                </h3>
                <p class="font-regular max-w-md leading-tight f-text-15-17 mb-4">
                  Crisp greens, bold seasonings, and Southern-style shrimp come together in perfect
                  balance. We take fresh ingredients and elevate them with unexpected twists,
                  creating dishes that are as satisfying as they are unforgettable. Every forkful is
                  a celebration of character and craft.
                </p>
                <div class="flex space-x-4">
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
          </LayoutContain>
        </div>
      </div>
    </section>
    <section class="f-pb-160-180">
      <GsapLoopSlider />
    </section>
    <section class="cta-section">
      <div class="w-full">
        <div class="w-full grid grid-cols-8 mx-auto f-gap-24-32">
          <div class="col-span-4 flex flex-col w-full f-py-160-180">
            <LayoutContain>
              <div
                class="flex flex-row max-w-90rem f-px-100-140 gap-4 f-gap-24-32 justify-start items-start w-full stagger-container h-40vh stagger-container"
              >
                <div class="divider h-full w-2.5px bg-brand-accent" />
                <div class="flex flex-col">
                  <p
                    class="f-text-11-12 text-start mb-4 tracking-0.25 font-semibold uppercase text-brand-accent"
                  >
                    SWEET SOUTHERN INDULGENCE
                  </p>
                  <h3 class="text-5xl font-gt-ultra text-start uppercase tracking-wide mb-12">
                    Sweet Comfort,
                    <br />
                    Bold Flavor
                  </h3>
                  <p class="font-regular max-w-xl leading-tight f-text-15-17 mb-8">
                    Our desserts are more than just the final course — they’re the grand finale.
                    Each treat is crafted by hand with rich, indulgent ingredients and layered with
                    flavor that leaves a lasting impression. From warm bites to cool finishes, it’s
                    the kind of Southern sweetness that keeps you coming back.
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
              </div>
            </LayoutContain>
          </div>
          <div class="col-span-4 h-full w-full">
            <LayoutContain>
              <div class="w-full h-full overflow-hidden scroll-fade">
                <NuxtImg
                  src="/slider-10.jpg"
                  alt="Restaurant interior"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  data-speed="0.95"
                />
              </div>
            </LayoutContain>
          </div>
        </div>
      </div>
    </section>
    <section class="locations">
      <SectionsLocationsAlt />
    </section>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
}

.about-section {
  background-color: #f2f0ed;
}

.stagger-container > * {
  opacity: 0;
}

.locations {
  position: relative;
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.hover-zoom {
  cursor: pointer;
}

.hover-zoom__image {
  transform-origin: center;
  will-change: transform;
  opacity: 0.8;
}

.location-card {
  opacity: 0;
  transition: transform 0.3s ease;
}

.location-card:hover {
  transform: translateY(-4px);
}
</style>
