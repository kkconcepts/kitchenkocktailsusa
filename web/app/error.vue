<script setup>
const error = useError()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="error-page flex min-h-screen items-center justify-center bg-zinc-900/95">
    <AppHeader />
    <div class="container mx-auto px-4">
      <div class="text-center flex flex-col gap-2">
        <h1 class="text-5xl font-semibold mb-4 text-white">
          {{ error?.statusCode === 404 ? '404' : 'Error' }}
        </h1>
        <p class="text-lg mb-8 font-light text-white">
          {{
            error?.statusCode === 404
              ? 'This page doesn’t exist. But there’s always a seat at our table.'
              : error?.message || 'Something went wrong'
          }}
        </p>
        <div class="mx-auto flex flex-col items-center justify-center gap-4 max-w-xs">
          <NuxtLink
            to="/reservations"
            class="f-text-12-13 uppercase bg-brand-accent border border-brand-accent text-white hover:text-brand-accent hover:bg-white/0 f-py-6-8 f-px-24-32 tracking-wider transition-colors duration-300"
          >
            Reserve your table
          </NuxtLink>
          <div
            class="flex flex-col hover:text-brand-accent text-white transition-colors duration-300"
          >
            <button @click="handleError" class="font-light">or back to homepage</button>
            <div class="line h-0.25 w-full bg-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  height: 100dvh;
  overflow: hidden;
}
</style>
