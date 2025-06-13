<script setup>
const error = useError()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="error-top">
    <div class="error-elements f-p-24-48 w-full grid grid-cols-3 text-lg font-bold text-light-800">
      <p class="text-start">404</p>
      <p class="text-center">404</p>
      <p class="text-end">404</p>
    </div>
  </div>
  <div class="error-page flex min-h-screen items-center justify-center">
    <div class="container mx-auto px-4">
      <div class="text-center">
        <h1 class="text-8xl font-bold mb-4 text-light-800">
          {{ error?.statusCode === 404 ? '404' : 'Error' }}
        </h1>
        <p class="text-xl mb-8 font-bold text-light-800">
          {{
            error?.statusCode === 404
              ? 'The page you are looking for does not exist'
              : error?.message || 'Something went wrong'
          }}
        </p>
        <button
          @click="handleError"
          class="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
  <div class="error-bottom">
    <div
      class="error-elements-bottom f-p-24-48 w-full grid grid-cols-3 text-lg font-bold text-light-800"
    >
      <p class="text-start">404</p>
      <p class="text-center">404</p>
      <p class="text-end">404</p>
    </div>
  </div>
</template>

<style scoped>
.error-top {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.error-bottom {
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
</style>
