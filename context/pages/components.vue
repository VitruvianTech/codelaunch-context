<template>
  <v-main>
    <Html>
      <Head>
        <Title>Components</Title>
      </Head>
    </Html>
    <article>
      <section>
        <h1>Components</h1>
        <v-divider class="mb-4" />
        <Suspense>
          <template #default>
            <CodelaunchAppComponents />
          </template>
          <template #fallback>
            <div>
              <span class="tip">Loading...</span>
            </div>
          </template>
        </Suspense>
      </section>
    </article>
  </v-main>
</template>

<script setup>
definePageMeta({
  layout: 'column'
})
</script>
