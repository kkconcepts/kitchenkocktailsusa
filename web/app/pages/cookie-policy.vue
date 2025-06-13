<script setup>
import { ogImage } from '~/constants'

const title = ref('Cookie Policy')
const pageDescription = ref(
  'See how Kitchen + Kocktails by Kevin Kelley collects, uses & safeguards your personal data. Transparent, secure, and customer‑focused.'
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
</script>

<template>
  <div :class="pageClass">
    <section class="min-h-100vh max-w-3xl m-auto f-py-160-180">
      <LayoutContain>
        <div class="flex flex-col f-gap-32-48">
          <div class="flex flex-col">
            <h1 class="text-4xl text-center font-bold mb-10">{{ title }}</h1>
            <p class="text-lg text-center">
              We use cookies and similar technologies to enhance your browsing experience, analyze
              site traffic, and deliver personalized content. By continuing to use our site, you
              consent to our use of cookies. You can manage your preferences through your browser
              settings or visit our Privacy Policy for more information.
            </p>
          </div>
          <div class="border-color-[#e2a368] divider border"></div>
          <div class="flex flex-col">
            <h2 class="text-2xl font-bold mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device that help us improve your
              experience, analyze traffic, and offer personalized content and ads.
            </p>
          </div>
          <div class="border-color-[#e2a368] divider border"></div>
          <div class="flex flex-col">
            <h3 class="text-xl font-bold mb-6">Types of Cookies We Use</h3>
            <p>
              <strong>Essential Cookies</strong>
              <br />
              These cookies are necessary for the site to function properly (e.g., navigating pages,
              making reservations, securing payment forms).
              <br /><br />
              <strong>Analytics Cookies</strong>
              <br />
              We use tools like Google Analytics to understand how visitors interact with the site,
              so we can improve performance and usability.
              <br /><br />
              <strong>Marketing Cookies</strong>
              <br />
              These cookies track activity across websites to deliver relevant ads and promotions.
              They may be set by third-party services like Facebook or Google Ads.
              <br /><br />
              <strong>Functionality Cookies</strong>
              <br />
              These remember your preferences—such as your selected location—so we can personalize
              your experience.
              <br /><br />
              <strong>Our Security Procedures</strong>
              <br />
              We restrict access to non-public personal information about you to those persons who
              need such information to provide products or services to you. We maintain physical,
              electronic and procedural safeguards that comply with applicable regulations to guard
              your non-public personal information. However, we cannot guarantee that unauthorized
              persons will always be unable to defeat our security measures.
              <br /><br />
              <strong>Changes to Privacy Policy</strong>
              <br />
              Kitchen + Kocktails By: Kevin Kelley reserves the right, in its sole discretion, to
              revise, change, or modify this Privacy Policy at time. We will incorporate all
              material changes to this Privacy Policy on this page and will provide advance notice
              to you. Such notice may be given in any manner we choose that complies with law,
              including, but not limited to posting a notice of such changes on the Web Sites. We
              encourage you to review this page periodically for the most recent version of this
              Privacy Policy. Any use by a User of the Web Sites following notice of such changes
              shall be deemed to constitute acceptance by that User of those changes to the Privacy
              Policy.
              <br /><br />
              <strong>Questions</strong>
              <br />
              If you have questions about this Notice, or would like to review or make changes to
              your personal information, please e-mail us at
              <a
                href="mailto:info@kitchenkocktailsusa.com"
                class="underline transition-colors hover:text-brand-accent duration-200"
                target="_blank"
                rel="noopener noreferrer"
                >info@kitchenkocktailsusa.com</a
              >.
            </p>
          </div>
        </div>
      </LayoutContain>
    </section>
  </div>
</template>
