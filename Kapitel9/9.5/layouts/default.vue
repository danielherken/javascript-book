<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>
          <nuxt-link :to="localePath('/')">
            {{ $t('headline') }}
          </nuxt-link>
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <nuxt-link :to="switchLocalePath('en')">
          {{ $t('english') }}
        </nuxt-link>
        |
        <nuxt-link :to="switchLocalePath('de')">
          {{ $t('german') }}
        </nuxt-link>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.container-fluid {
  max-width: 1280px;
  margin: 50px auto;
}
</style>
