<script setup>
import { ogImage } from '~/constants'
import { useParallaxEffects } from '~/composables/useParallaxEffects'
import { ref } from 'vue'
import { transition } from '~/utils/transition'

definePageMeta({
  pageTransition: transition
})

useParallaxEffects()

const title = ref('Terms of Service')
const pageDescription = ref(
  'See how Kitchen + Kocktails by Kevin Kelley collects, uses & safeguards your personal data. Transparent, secure, and customer‑focused.'
)

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
  <diV>
    <section class="min-h-100vh max-w-3xl m-auto f-py-160-180">
      <LayoutContain>
        <div class="flex flex-col f-gap-32-48">
          <div class="flex flex-col">
            <h1 class="text-4xl text-center font-bold mb-10">{{ title }}</h1>
            <p class="text-lg text-center">
              By accessing or using the Kitchen + Kocktails website, you agree to be bound by these
              Terms of Service. Please read them carefully before using our site or services.
            </p>
          </div>
          <div class="border-color-[#e2a368] divider border" />
          <div class="flex flex-col">
            <h2 class="text-2xl font-bold mb-4">Use of Our Website</h2>
            <p>
              Kitchen + Kocktails provides this website for viewing menus, making reservations,
              ordering food online, booking private events, and accessing promotional content. You
              agree to use the site only for lawful purposes.
            </p>
          </div>
          <div class="border-color-[#e2a368] divider border" />
          <div class="flex flex-col">
            <h3 class="text-xl font-bold mb-6">Terms & Conditions Overview</h3>
            <p>
              <strong>Terms of Service</strong>
              <br />
              Kitchen + Kocktails provides this website for viewing menus, making reservations,
              ordering food online, booking private events, and accessing promotional content. You
              agree to use the site only for lawful purposes.
              <br /><br />
              <strong>Online Orders and Reservations</strong>
              <br />
              When placing an order or reservation through our website or third-party platforms
              (such as ToastTab or OpenTable), you agree to provide accurate and complete
              information. We reserve the right to cancel or refuse any order or reservation at our
              discretion.
              <br /><br />
              <strong>Payments and Refunds</strong>
              <br />
              All prices listed are in U.S. dollars. Payments made online are securely processed
              through our third-party payment providers. Refunds, if applicable, are handled in
              accordance with our Cancellation and Refund Policy.
              <br /><br />
              <strong>Cancellation and No-Show Policy</strong>
              <br />
              For reservations and private event bookings, cancellations must be made within the
              specified timeframe noted during booking. No-shows or late cancellations may result in
              a fee.
              <br /><br />
              <strong>Loyalty Programs and Promotions</strong>
              <br />
              If enrolled in any loyalty or rewards programs, participation is subject to the
              specific terms outlined during registration. Offers and promotions may be subject to
              change or termination without notice.
              <br /><br />
              <strong>Intellectual Property</strong>
              <br />
              All content on this website—including logos, text, photos, and designs—is the property
              of Kitchen + Kocktails or its licensors and may not be used without prior written
              consent.
              <br /><br />
              <strong>User Content</strong>
              <br />
              If you submit feedback, reviews, or other content, you grant us a non-exclusive,
              royalty-free license to use, reproduce, and display it for promotional or operational
              purposes.
              <br /><br />
              <strong>Limitation of Liability</strong>
              <br />
              We are not liable for any direct or indirect damages resulting from your use of this
              website, including reservation issues, service outages, or pricing errors.
              <br /><br />
              <strong>Third-Party Links</strong>
              <br />
              Our website may contain links to third-party platforms. We are not responsible for the
              content, privacy practices, or terms of those sites.
              <br /><br />
              <strong>Changes to These Terms</strong>
              <br />
              We may update these Terms of Service from time to time. Continued use of the website
              constitutes acceptance of any changes.
              <br /><br />
              <strong>Contact Us</strong>
              <br />
              If you have questions about these terms, or would like to review or would like to
              discuss further, please e-mail us at
              <a
                href="mailto:info@kitchenkocktailsusa.com"
                class="underline hover:text-brand-accent duration-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                >info@kitchenkocktailsusa.com</a
              >.
            </p>
          </div>
        </div>
      </LayoutContain>
    </section>
  </diV>
</template>
