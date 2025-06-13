<script setup>
import { ogImage } from '~/constants'

const title = ref('Careers')
const pageDescription = ref(
  'Join the team at Kitchen + Kocktails by Kevin Kelley. Discover career opportunities in upscale dining, hospitality, and guest experience.'
)

const pageClass = computed(() => `page page-${title.value.toLowerCase()}`)

const expandedJob = ref(null)
const selectedLocation = ref('all')
const selectedRoleType = ref('all')

const locations = [
  { value: 'all', label: 'All Locations' },
  { value: 'atlanta', label: 'Atlanta' },
  { value: 'chicago', label: 'Chicago' },
  { value: 'charlotte', label: 'Charlotte' },
  { value: 'dallas', label: 'Dallas' },
  { value: 'dc', label: 'Washington D.C.' }
]

const roleTypes = [
  { value: 'all', label: 'All Roles' },
  { value: 'hourly', label: 'Hourly' },
  { value: 'management', label: 'Management' }
]

const careers = [
  {
    title: 'Executive Chef',
    location: 'Dallas',
    displayLocation: 'Dallas, TX',
    type: 'Full-time',
    roleType: 'management',
    description:
      'We are seeking an experienced Executive Chef to lead our culinary team in creating exceptional Southern comfort food with a modern twist.',
    responsibilities: [
      'Develop and implement new menu items',
      'Manage kitchen staff and operations',
      'Maintain food quality and consistency',
      'Control food and labor costs',
      'Ensure compliance with health and safety regulations'
    ],
    requirements: [
      '5+ years experience as an Executive Chef or Sous Chef',
      'Strong leadership and team management skills',
      'Knowledge of Southern cuisine and modern cooking techniques',
      'ServSafe certification',
      'Ability to work weekends and holidays'
    ]
  },
  {
    title: 'Mixologist',
    location: 'Chicago',
    displayLocation: 'Chicago, IL',
    type: 'Full-time',
    roleType: 'hourly',
    description:
      'Join our bar team as a creative Mixologist to craft innovative cocktails that complement our Southern-inspired menu.',
    responsibilities: [
      'Create signature cocktails and seasonal drink menus',
      'Maintain bar inventory and ordering',
      'Ensure exceptional guest service',
      'Train bar staff on cocktail preparation',
      'Maintain cleanliness and organization of bar area'
    ],
    requirements: [
      '3+ years experience in craft cocktail preparation',
      'Knowledge of classic and modern cocktail techniques',
      'Strong multitasking and organizational skills',
      'Available to work evenings and weekends',
      'TIPS certification required'
    ]
  },
  {
    title: 'Server',
    location: 'Atlanta',
    displayLocation: 'Atlanta, GA',
    type: 'Full-time/Part-time',
    roleType: 'hourly',
    description: 'We are looking for energetic Servers to join our front-of-house team.',
    responsibilities: [
      'Provide attentive and professional service to guests',
      'Knowledge of menu items, ingredients, and preparation methods',
      'Process orders and payments accurately',
      'Maintain cleanliness and organization of dining area',
      'Work collaboratively with kitchen and bar staff'
    ],
    requirements: [
      'Previous serving experience in upscale dining',
      'Excellent communication and interpersonal skills',
      'Ability to work in a fast-paced environment',
      "Food Handler's certification",
      'Flexible schedule including nights and weekends'
    ]
  }
]

const filteredCareers = computed(() => {
  return careers.filter((job) => {
    const locationMatch =
      selectedLocation.value === 'all' || job.location === selectedLocation.value
    const roleTypeMatch =
      selectedRoleType.value === 'all' || job.roleType === selectedRoleType.value
    return locationMatch && roleTypeMatch
  })
})

const toggleJob = (jobTitle) => {
  expandedJob.value = expandedJob.value === jobTitle ? null : jobTitle
}

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
            <p class="text-lg text-center">{{ pageDescription }}</p>
          </div>

          <!-- Filters -->
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                v-model="selectedLocation"
                class="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
              >
                <option v-for="location in locations" :key="location.value" :value="location.value">
                  {{ location.label }}
                </option>
              </select>
            </div>

            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">Role Type</label>
              <select
                v-model="selectedRoleType"
                class="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
              >
                <option v-for="roleType in roleTypes" :key="roleType.value" :value="roleType.value">
                  {{ roleType.label }}
                </option>
              </select>
            </div>
          </div>

          <!-- Career Listings -->
          <div v-if="filteredCareers.length" class="grid gap-6">
            <div
              v-for="job in filteredCareers"
              :key="job.title"
              class="bg-white shadow-md overflow-hidden transition-all duration-300"
              :class="{ 'shadow-lg': expandedJob === job.title }"
            >
              <!-- Job Header - Always Visible -->
              <div class="p-6 cursor-pointer" @click="toggleJob(job.title)">
                <div class="flex justify-between items-start">
                  <div>
                    <h2 class="text-2xl font-semibold text-primary">{{ job.title }}</h2>
                    <div class="flex gap-4 mt-2 text-gray-600">
                      <span class="flex items-center">
                        <Icon name="uil:location-point" class="w-5 h-5 mr-1" />
                        {{ job.location }}
                      </span>
                      <span class="flex items-center">
                        <Icon name="uil:clock" class="w-5 h-5 mr-1" />
                        {{ job.type }}
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-4">
                    <button
                      class="bg-red-600 text-white px-6 py-2 hover:bg-primary/90 transition-colors duration-200"
                    >
                      Apply Now
                    </button>
                    <Icon
                      :name="expandedJob === job.title ? 'uil:angle-up' : 'uil:angle-down'"
                      class="w-6 h-6 transition-transform duration-300"
                    />
                  </div>
                </div>

                <p class="text-gray-700 mt-4">{{ job.description }}</p>
              </div>

              <!-- Expandable Content -->
              <div
                class="overflow-hidden transition-all duration-300"
                :class="expandedJob === job.title ? 'max-h-[1000px] border-t' : 'max-h-0'"
              >
                <div class="p-6 space-y-6 bg-gray-50">
                  <div>
                    <h3 class="text-lg font-semibold mb-3 flex items-center">
                      <Icon name="uil:list-ul" class="w-5 h-5 mr-2" />
                      Responsibilities
                    </h3>
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                      <li v-for="item in job.responsibilities" :key="item">{{ item }}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold mb-3 flex items-center">
                      <Icon name="uil:check-circle" class="w-5 h-5 mr-2" />
                      Requirements
                    </h3>
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                      <li v-for="item in job.requirements" :key="item">{{ item }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- No Results -->
          <div v-else class="text-center py-12">
            <Icon name="uil:search" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p class="text-lg text-gray-600">No positions found matching your criteria</p>
            <button
              @click="((selectedLocation = 'all'), (selectedRoleType = 'all'))"
              class="mt-4 text-primary hover:text-primary/80 transition-colors duration-200"
            >
              Clear filters
            </button>
          </div>
        </div>
      </LayoutContain>
    </section>
  </div>
</template>
